//
//  NearbyPlacesViewController.m
//  GreenTravel
//
//  Created by Alex K on 8/21/20.
//  Copyright © 2020 Alex K. All rights reserved.
//

#import "ItemDetailsMapViewController.h"
@import Mapbox;
#import "StyleUtils.h"
#import "Colors.h"
#import "MapModel.h"
#import "MapItemsObserver.h"
#import "LocationObserver.h"
#import "MapItem.h"
#import "MapPinView.h"
#import "LocationModel.h"
#import "CategoriesFilterView.h"
#import "IndexModel.h"
#import "MapButton.h"
#import "SearchViewController.h"
#import "SearchModel.h"
#import "ApiService.h"
#import "CoreDataService.h"
#import "PlaceItem.h"
#import "Category.h"
#import "BottomSheetView.h"
#import "DetailsViewController.h"
#import "PlaceDetails.h"
#import "CacheService.h"
#import "MainViewController.h"

@interface ItemDetailsMapViewController ()

@property (assign, nonatomic) BOOL loaded;

@end

static NSString* const kSourceIdPoint = @"sourceIdPoint";
static NSString* const kSourceIdPath = @"sourceIdPath";
static NSString* const kSourceIdPolygon = @"sourceIdPolygon";
static NSString* const kPolygonLayerId = @"polygonLayerId";
static NSString* const kPathLayerId = @"pathLayerId";
static NSString* const kPointLayerId = @"pointLayerId";
static NSString* const kBottomSheetButtonLabel = @"В путь";
static const CGSize kIconSize = {.width = 20.0, .height = 20.0};

@implementation ItemDetailsMapViewController

- (MGLMapView *)mapForURL:(NSString *)url darkMode:(BOOL)darkMode {
  MGLMapView *mapViewCached = [[CacheService get].cache objectForKey:@"mapView"];
  if (mapViewCached) {
    self.loaded = YES;
    return mapViewCached;
  }
  MGLMapView *mapViewConstructed = [super mapForURL:url darkMode:NO];
  [[CacheService get].cache setObject:mapViewConstructed forKey:@"mapView"];

  return mapViewConstructed;
}

#pragma mark - Lifecycle
- (void)viewWillAppear:(BOOL)animated {
  [super viewWillAppear:animated];
  if (self.loaded) {
    [self renderMapItem:self.mapItem style:self.mapView.style];
    self.loaded = YES;
  }
}

- (void)viewWillDisappear:(BOOL)animated {
  [super viewWillDisappear:animated];
  [self hidePopup];
}

- (void)viewDidDisappear:(BOOL)animated {
  [super viewDidDisappear:animated];
  if (self.movingFromParentViewController) {
    [self.mapView removeGestureRecognizer:self.singleTap];
    [self.mapView removeFromSuperview];
  }  
}

- (void)mapView:(MGLMapView *)mapView didFinishLoadingStyle:(MGLStyle *)style {
  [self renderMapItem:self.mapItem style:style];
}

- (void)onMapItemsUpdate:(NSArray<MapItem *> *)mapItems {
  NSLog(@"Map items: %@", mapItems);
  MapItem *mapItemNew =
  [[mapItems filteredArrayUsingPredicate:[NSPredicate
                                           predicateWithFormat:@"uuid = %@",
                                           self.mapItem.uuid]] firstObject];
  if (mapItemNew) {
    __weak typeof(self) weakSelf = self;
    dispatch_async(dispatch_get_main_queue(), ^{
      [weakSelf renderMapItem:mapItemNew style:weakSelf.mapView.style];
    });
  }
}

- (void)renderMapItem:(MapItem *)mapItem
                style:(MGLStyle *)style {
  [self.mapView removeAnnotations:self.mapView.annotations];
  MGLPointFeature *point = [[MGLPointFeature alloc] init];
  point.coordinate = mapItem.coords;
  point.title = mapItem.title;
  point.attributes = @{
    @"icon": mapItem.correspondingPlaceItem.category.icon,
    @"title": mapItem.title,
    @"uuid": mapItem.correspondingPlaceItem.uuid,
    @"bookmarked":[NSNumber numberWithBool:mapItem.correspondingPlaceItem.bookmarked],
  };
#pragma mark - Remove sources
  MGLShapeSource *sourcePoint = (MGLShapeSource *)[style sourceWithIdentifier:kSourceIdPoint];
  MGLShapeSource *sourcePath = (MGLShapeSource *)[style sourceWithIdentifier:kSourceIdPath];
  MGLShapeSource *sourcePolygon = (MGLShapeSource *)[style sourceWithIdentifier:kSourceIdPolygon];
  if ([style layerWithIdentifier:kPolygonLayerId] != nil) {
    [style removeLayer:[style layerWithIdentifier:kPolygonLayerId]];
  }
  if ([style layerWithIdentifier:kPathLayerId] != nil) {
    [style removeLayer:[style layerWithIdentifier:kPathLayerId]];
  }
  if ([style layerWithIdentifier:kPointLayerId] != nil) {
    [style removeLayer:[style layerWithIdentifier:kPointLayerId]];
  }

  if ([style sourceWithIdentifier:kSourceIdPoint] != nil) {
    [style removeSource:[style sourceWithIdentifier:kSourceIdPoint]];
  }
  if ([style sourceWithIdentifier:kSourceIdPath] != nil) {
    [style removeSource:[style sourceWithIdentifier:kSourceIdPath]];
  }
  if ([style sourceWithIdentifier:kSourceIdPolygon] != nil) {
    [style removeSource:[style sourceWithIdentifier:kSourceIdPolygon]];
  }
#pragma mark - Sources
  sourcePoint = [[MGLShapeSource alloc] initWithIdentifier:kSourceIdPoint
                                                  features:@[point]
                                                   options:nil];

  NSArray<NSArray<CLLocation *> *> *areaParts = mapItem.correspondingPlaceItem.details.area;
  NSMutableArray<id<MGLAnnotation>> *vertices = [[NSMutableArray alloc] init];
  NSMutableArray<MGLPolygon *> *polygonParts = [[NSMutableArray alloc] init];
  if ([areaParts count]) {
    [areaParts enumerateObjectsUsingBlock:^(NSArray<CLLocation *> * _Nonnull partCoordinates, NSUInteger idx, BOOL * _Nonnull stop) {
      CLLocationCoordinate2D *coordinates = malloc(sizeof(CLLocationCoordinate2D) * [partCoordinates count]);
      [partCoordinates enumerateObjectsUsingBlock:^(CLLocation * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        coordinates[idx] = CLLocationCoordinate2DMake(obj.coordinate.latitude, obj.coordinate.longitude);
      }];
      MGLPolygon *polygonPart = [MGLPolygon polygonWithCoordinates:coordinates count:[partCoordinates count]];
      [polygonParts addObject:polygonPart];
      free(coordinates);
    }];
    MGLMultiPolygonFeature *polygon = [MGLMultiPolygonFeature multiPolygonWithPolygons:polygonParts];
    [vertices addObject:polygon];
    sourcePolygon = [[MGLShapeSource alloc] initWithIdentifier:kSourceIdPolygon
                                                      features:@[polygon] options:nil];
  }

  NSArray<CLLocation *> *path = mapItem.correspondingPlaceItem.details.path;
  if ([path count]) {
    CLLocationCoordinate2D *coordinates = malloc(sizeof(CLLocationCoordinate2D) * [path count]);
    [path enumerateObjectsUsingBlock:^(CLLocation * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
      coordinates[idx] = CLLocationCoordinate2DMake(obj.coordinate.latitude, obj.coordinate.longitude);
    }];

    MGLPolylineFeature *polyline = [MGLPolylineFeature polylineWithCoordinates:coordinates count:[path count]];
    [vertices addObject:polyline];

    sourcePath = [[MGLShapeSource alloc] initWithIdentifier:kSourceIdPolygon
                                                   features:@[polyline] options:nil];
    free(coordinates);
  }

  if (sourcePath) {
    [style addSource:sourcePath];

    MGLLineStyleLayer *pathLayer = [[MGLLineStyleLayer alloc] initWithIdentifier:kPathLayerId source:sourcePath];
    pathLayer.lineColor = [NSExpression expressionForConstantValue:[Colors get].persimmon];
    pathLayer.lineOpacity = [NSExpression expressionForConstantValue:@1];
    pathLayer.lineCap = [NSExpression expressionForConstantValue:@"round"];
    pathLayer.lineWidth =
    [NSExpression expressionForConstantValue:@4.0];

    [style addLayer:pathLayer];
  };
  if (sourcePolygon) {
    [style addSource:sourcePolygon];

    MGLFillStyleLayer *polygonLayer = [[MGLFillStyleLayer alloc] initWithIdentifier:kPolygonLayerId source:sourcePolygon];
    polygonLayer.fillColor = [NSExpression expressionForConstantValue:[Colors get].persimmon];
    polygonLayer.fillOpacity = [NSExpression expressionForConstantValue:@0.5];
    polygonLayer.fillOutlineColor = [NSExpression expressionForConstantValue:[Colors get].persimmon];

    [style addLayer:polygonLayer];
  }
  if (sourcePoint) {
    [style addSource:sourcePoint];

    MGLSymbolStyleLayer *pointLayer = [[MGLSymbolStyleLayer alloc] initWithIdentifier:kPointLayerId source:sourcePoint];
    pointLayer.iconImageName = [NSExpression expressionForConstantValue:@"mappin"];
    [style setImage:[UIImage imageNamed:@"map-pin"] forName:@"mappin"];

    [style addLayer:pointLayer];
  };
#pragma mark - Layers




#pragma mark - Show point, path or polygon
  if ([vertices count]) {
    [self.mapView showAnnotations:vertices animated:YES];
  } else {
    [self.mapView setCenterCoordinate:point.coordinate zoomLevel:8.0 animated:YES];
  }
}

- (IBAction)handleMapTap:(UITapGestureRecognizer *)tap {
  MGLSource *source = [self.mapView.style sourceWithIdentifier:kSourceIdPoint];
  if (![source isKindOfClass:[MGLShapeSource class]]) {
    return;
  }
  if (tap.state != UIGestureRecognizerStateEnded) {
    return;
  }

  CGPoint point = [tap locationInView:tap.view];
  CGFloat width = kIconSize.width;
  CGRect rect = CGRectMake(point.x - width / 2, point.y - width / 2, width, width);

  NSArray<id<MGLFeature>> *features = [self.mapView visibleFeaturesInRect:rect inStyleLayersWithIdentifiers:[NSSet setWithObjects:kPointLayerId, kPathLayerId, kPolygonLayerId, nil]];

  // Pick the first feature (which may be a port or a cluster), ideally selecting
  // the one nearest nearest one to the touch point.
  id<MGLFeature> feature = features.firstObject;
  if (feature && ([feature isKindOfClass:[MGLPointFeature class]] ||
                  [feature isKindOfClass:[MGLMultiPolygonFeature class]] ||
                  [feature isKindOfClass:[MGLPolygonFeature class]] ||
                  [feature isKindOfClass:[MGLPolylineFeature class]])) {
    [self.mapView showAnnotations:@[feature] animated:YES];
    [self showPopupWithItem:self.mapItem.correspondingPlaceItem];
    return;
  }
  [self hidePopup];
}

- (void)showPopupWithItem:(PlaceItem *)item {
  __weak typeof(self) weakSelf = self;
  [self.bottomSheet show:item buttonLabel:kBottomSheetButtonLabel onNavigatePress:^{
    NSURL *geoURL = [NSURL URLWithString:@"geo:53.9006,27.5590"];
    [[UIApplication sharedApplication] openURL:geoURL options:@{} completionHandler:^(BOOL success) {}];
  } onBookmarkPress:^(BOOL bookmarked) {
    [weakSelf.indexModel bookmarkItem:item bookmark:!bookmarked];
  }];
}

@end
