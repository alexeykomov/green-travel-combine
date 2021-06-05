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
#import "RoutesSheetController.h"
#import <CoreLocation/CoreLocation.h>
#import "Directions.h"
#import "MapService.h"
#import "AlertUtils.h"
#import "MapViewControllerConstants.h"

@interface ItemDetailsMapViewController ()

@property (assign, nonatomic) BOOL loaded;
@property (strong, nonatomic) NSMutableArray<id<MGLAnnotation>> *annotations;
@property (assign, nonatomic) BOOL intentionToShowRoutesSheet;

@end


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
}

- (void)viewWillDisappear:(BOOL)animated {
  [super viewWillDisappear:animated];
  [self hidePopup];
}

- (void)viewDidDisappear:(BOOL)animated {
  [super viewDidDisappear:animated];
}

- (void)renderMap:(BOOL)initialLoad {
  [self renderMapItem:self.mapItem style:self.mapView.style
          initialLoad:initialLoad];
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
      [weakSelf renderMapItem:mapItemNew style:weakSelf.mapView.style
                  initialLoad:NO];
    });
  }
}

- (void)renderMapItem:(MapItem *)mapItem
                style:(MGLStyle *)style
          initialLoad:(BOOL)initialLoad{
  [self cleanMap];
  [self.mapView removeAnnotations:self.mapView.annotations];
  self.annotations = [[NSMutableArray alloc] init];
  MGLPointFeature *point = [[MGLPointFeature alloc] init];
  point.coordinate = mapItem.coords;
  point.title = mapItem.title;
  point.attributes = @{
    @"icon": mapItem.correspondingPlaceItem.category.icon,
    @"title": mapItem.title,
    @"uuid": mapItem.correspondingPlaceItem.uuid,
    @"bookmarked":[NSNumber numberWithBool:mapItem.correspondingPlaceItem.bookmarked],
  };
  [self.annotations addObject:point];
  
  MGLShapeSource *sourcePoint;
  MGLShapeSource *sourcePath;
  MGLShapeSource *sourcePolygon;
  MGLShapeSource *sourceOutline;
#pragma mark - Sources
  sourcePoint = [[MGLShapeSource alloc] initWithIdentifier:MapViewControllerSourceIdPoint
                                                  features:@[point]
                                                   options:nil];

  NSArray<NSArray<CLLocation *> *> *areaParts = mapItem.correspondingPlaceItem.details.area;
  NSMutableArray<MGLPolygon *> *polygonParts = [[NSMutableArray alloc] init];
  NSMutableArray<MGLPolylineFeature *> *polygonOutlines = [[NSMutableArray alloc] init];
  if ([areaParts count]) {
    [areaParts enumerateObjectsUsingBlock:^(NSArray<CLLocation *> * _Nonnull partCoordinates, NSUInteger idx, BOOL * _Nonnull stop) {
      CLLocationCoordinate2D *coordinates = malloc(sizeof(CLLocationCoordinate2D) * [partCoordinates count]);
      [partCoordinates enumerateObjectsUsingBlock:^(CLLocation * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        coordinates[idx] = CLLocationCoordinate2DMake(obj.coordinate.latitude, obj.coordinate.longitude);
      }];
      MGLPolygon *polygonPart = [MGLPolygon polygonWithCoordinates:coordinates count:[partCoordinates count]];
      [polygonParts addObject:polygonPart];
      free(coordinates);
      [polygonOutlines addObject:[self polylineForPath:partCoordinates]];
    }];
    MGLMultiPolygonFeature *polygon = [MGLMultiPolygonFeature multiPolygonWithPolygons:polygonParts];
    
    [self.annotations addObject:polygon];
    
    sourcePolygon = [[MGLShapeSource alloc] initWithIdentifier:MapViewControllerSourceIdPolygon
                                                      features:@[polygon] options:nil];
    sourceOutline = [[MGLShapeSource alloc] initWithIdentifier:MapViewControllerSourceIdOutline
                                                   features:polygonOutlines options:nil];
  }

  NSArray<CLLocation *> *path = mapItem.correspondingPlaceItem.details.path;
  if ([path count]) {
    CLLocationCoordinate2D *coordinates = malloc(sizeof(CLLocationCoordinate2D) * [path count]);
    [path enumerateObjectsUsingBlock:^(CLLocation * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
      coordinates[idx] = CLLocationCoordinate2DMake(obj.coordinate.latitude, obj.coordinate.longitude);
    }];

    MGLPolylineFeature *polyline = [MGLPolylineFeature polylineWithCoordinates:coordinates count:[path count]];
    [self.annotations addObject:polyline];

    sourcePath = [[MGLShapeSource alloc] initWithIdentifier:MapViewControllerSourceIdPath
                                                   features:@[polyline] options:nil];
    free(coordinates);
  }

  if (sourcePath) {
    [style addSource:sourcePath];

    MGLLineStyleLayer *pathLayer = [[MGLLineStyleLayer alloc] initWithIdentifier:MapViewControllerPathLayerId source:sourcePath];
    pathLayer.lineColor = [NSExpression expressionForConstantValue:[Colors get].persimmon];
    pathLayer.lineOpacity = [NSExpression expressionForConstantValue:@1];
    pathLayer.lineCap = [NSExpression expressionForConstantValue:@"round"];
    pathLayer.lineWidth =
    [NSExpression expressionForConstantValue:@4.0];

    [style addLayer:pathLayer];
  };
  if (sourceOutline) {
    [style addSource:sourceOutline];

    MGLLineStyleLayer *outlineLayer = [[MGLLineStyleLayer alloc] initWithIdentifier:MapViewControllerPathLayerId source:sourceOutline];
    outlineLayer.lineColor = [NSExpression expressionForConstantValue:[Colors get].persimmon];
    outlineLayer.lineOpacity = [NSExpression expressionForConstantValue:@1];
    outlineLayer.lineCap = [NSExpression expressionForConstantValue:@"round"];
    outlineLayer.lineWidth =
    [NSExpression expressionForConstantValue:@2.0];
    outlineLayer.lineDashPattern = [NSExpression expressionForConstantValue:@[@1, @2]];
    
    [style addLayer:outlineLayer];
  };
  if (sourcePolygon) {
    [style addSource:sourcePolygon];

    MGLFillStyleLayer *polygonLayer = [[MGLFillStyleLayer alloc] initWithIdentifier:MapViewControllerPolygonLayerId source:sourcePolygon];
    polygonLayer.fillColor = [NSExpression expressionForConstantValue:[Colors get].persimmon];
    polygonLayer.fillOpacity = [NSExpression expressionForConstantValue:@0.3];
    polygonLayer.fillOutlineColor = [NSExpression expressionForConstantValue:[Colors get].persimmon];

    [style addLayer:polygonLayer];
  }
  if (sourcePoint) {
    [style addSource:sourcePoint];

    MGLSymbolStyleLayer *pointLayer = [[MGLSymbolStyleLayer alloc] initWithIdentifier:MapViewControllerPointLayerId source:sourcePoint];
    pointLayer.iconImageName = [NSExpression expressionForConstantValue:@"mappin"];
    [style setImage:[UIImage imageNamed:@"map-pin"] forName:@"mappin"];

    [style addLayer:pointLayer];
  };
#pragma mark - Layers

#pragma mark - Show point, path or polygon
  BOOL animated = !(initialLoad && !self.mapViewState.saved);
  if ([self.annotations count] > 1) {
    [self.mapView showAnnotations:self.annotations animated:animated];
    return;
  }
  if ([self.annotations count] == 1) {
    [self.mapView setCenterCoordinate:self.annotations.firstObject.coordinate zoomLevel:12.0 animated:animated];
    return;
  }
  [self.mapView setCenterCoordinate:self.locationModel.lastLocation.coordinate zoomLevel:8.0 animated:animated];
}

- (void)addDirectionsLayer:(MGLStyle *)style shape:(MGLShape *)shape {
  if ([style layerWithIdentifier:MapViewControllerDirectionsLayerId] != nil) {
    [style removeLayer:[style layerWithIdentifier:MapViewControllerDirectionsLayerId]];
  }
  if ([style sourceWithIdentifier:MapViewControllerSourceIdDirections] != nil) {
    [style removeSource:[style sourceWithIdentifier:MapViewControllerSourceIdDirections]];
  }
  
  MGLSource *sourceDirections = [[MGLShapeSource alloc] initWithIdentifier:MapViewControllerSourceIdDirections
                                                                     shape:shape options:nil];
  [style addSource:sourceDirections];
  
  MGLLineStyleLayer *dashedLayer = [[MGLLineStyleLayer alloc] initWithIdentifier:MapViewControllerDirectionsLayerId source:sourceDirections];
  dashedLayer.lineJoin = [NSExpression expressionForConstantValue:[NSValue valueWithMGLLineJoin:MGLLineJoinRound]];
  dashedLayer.lineCap = [NSExpression expressionForConstantValue:[NSValue valueWithMGLLineCap:MGLLineCapRound]];
  dashedLayer.lineWidth = [NSExpression expressionForConstantValue:@4];
  dashedLayer.lineColor = [NSExpression expressionForConstantValue:[Colors get].persimmon];
  dashedLayer.lineOpacity = [NSExpression expressionForConstantValue:@1];
  dashedLayer.lineDashPattern = [NSExpression expressionForConstantValue:@[@0, @1.5]];
  
  [style addLayer:dashedLayer];
}


- (MGLPolylineFeature *)polylineForPath:(NSArray<CLLocation *>*)path {
  MGLPolylineFeature *polyline;
  if ([path count]) {
    CLLocationCoordinate2D *coordinates = malloc(sizeof(CLLocationCoordinate2D) * [path count]);
    [path enumerateObjectsUsingBlock:^(CLLocation * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
      coordinates[idx] = CLLocationCoordinate2DMake(obj.coordinate.latitude, obj.coordinate.longitude);
    }];
    polyline = [MGLPolylineFeature polylineWithCoordinates:coordinates count:[path count]];
  }
  return polyline;
}

- (IBAction)handleMapTap:(UITapGestureRecognizer *)tap {
  MGLSource *source = [self.mapView.style sourceWithIdentifier:MapViewControllerSourceIdPoint];
  if (![source isKindOfClass:[MGLShapeSource class]]) {
    return;
  }
  if (tap.state != UIGestureRecognizerStateEnded) {
    return;
  }

  CGPoint point = [tap locationInView:tap.view];
  CGFloat width = kIconSize.width;
  CGRect rect = CGRectMake(point.x - width / 2, point.y - width / 2, width, width);

  NSArray<id<MGLFeature>> *features = [self.mapView visibleFeaturesInRect:rect inStyleLayersWithIdentifiers:[NSSet setWithObjects:MapViewControllerPointLayerId, MapViewControllerPathLayerId, MapViewControllerPolygonLayerId, nil]];

  // Pick the first feature (which may be a port or a cluster), ideally selecting
  // the one nearest nearest one to the touch point.
  id<MGLFeature> feature = features.firstObject;
  if (feature && ([feature isKindOfClass:[MGLPointFeature class]] ||
                  [feature isKindOfClass:[MGLMultiPolygonFeature class]] ||
                  [feature isKindOfClass:[MGLPolygonFeature class]] ||
                  [feature isKindOfClass:[MGLPolylineFeature class]])) {
    [self.mapView showAnnotations:self.annotations animated:YES];
    [self showPopupWithItem:self.mapItem.correspondingPlaceItem];
    return;
  }
  [self hidePopup];
}

- (void)showPopupWithItem:(PlaceItem *)item {
  __weak typeof(self) weakSelf = self;
  [self.bottomSheet show:item buttonLabel:kBottomSheetButtonLabel
         onNavigatePress:^{
    if (weakSelf.locationModel.locationMonitoringStatus == LocationModelLocationStatusDenied) {
      showAlertGoToSettings(self);
      return;
    }
    if (weakSelf.locationModel.locationMonitoringStatus == LocationModelLocationStatusGranted &&
        weakSelf.locationModel.lastLocation &&
        CLLocationCoordinate2DIsValid(weakSelf.locationModel.lastLocation.coordinate)) {
      [weakSelf showRoutesSheet];
      return;
    }
    [weakSelf.locationModel authorize];
    [weakSelf.locationModel startMonitoring];
    weakSelf.intentionToShowRoutesSheet = YES;
  }
         onBookmarkPress:^(BOOL bookmarked) {
    [weakSelf.indexModel bookmarkItem:item bookmark:!bookmarked];
  }];
}

- (void)showRoutesSheet {
  PlaceItem *item = self.mapItem.correspondingPlaceItem;
  Directions *directions = [[Directions alloc] init];
  directions.from = self.locationModel.lastLocation.coordinate;
  directions.to = item.coords;
  directions.title = item.title;
  __weak typeof(self) weakSelf = self;
  [[RoutesSheetController get] show:directions
                          presenter:^(UIAlertController * _Nonnull alert) {
    [weakSelf presentViewController:alert animated:YES completion:^{}];
  }];
}

- (void)onLocationUpdate:(CLLocation *)lastLocation {
  if (self.intentionToShowRoutesSheet) {
    [self showRoutesSheet];
    self.intentionToShowRoutesSheet = NO;
    return;
  }
  if (self.intentionToFocusOnUserLocation) {
    [self showDirections];
    self.intentionToFocusOnUserLocation = NO;
  }
}

#pragma mark - Event listeners

- (void)onLocateMePress:(id)sender {
  self.intentionToFocusOnUserLocation = YES;
  [self.locationModel authorize];
  [self.locationModel startMonitoring];
  
  if (self.locationModel.locationMonitoringStatus == LocationModelLocationStatusGranted &&
      self.locationModel.lastLocation &&
      CLLocationCoordinate2DIsValid(self.locationModel.lastLocation.coordinate)) {
    [self showDirections];
    return;
  }
  if (self.locationModel.locationMonitoringStatus == LocationModelLocationStatusDenied) {
    showAlertGoToSettings(self);
  }
}

- (void)showDirections {
  [self.mapView setShowsUserLocation:YES];
  [self.mapView setShowsHeading:YES];
  
  MGLPointFeature *location = [[MGLPointFeature alloc] init];
  location.coordinate = self.locationModel.lastLocation.coordinate;
  NSArray<id<MGLAnnotation>> *annotations = @[location];
  annotations = [annotations arrayByAddingObjectsFromArray:self.annotations];
  [self.mapView showAnnotations:annotations animated:YES];
  __weak typeof(self) weakSelf = self;
  [self.mapService loadDirectionsWithCompletionFrom:location.coordinate
                                                 to:self.mapItem.coords
                                         completion:^(NSArray<CLLocation *> * _Nonnull locations) {
    dispatch_async(dispatch_get_main_queue(), ^{
      MGLPolyline *polyline = [weakSelf polylineForPath:locations];
      [weakSelf addDirectionsLayer:weakSelf.mapView.style shape:polyline];
    });
  }];
}

@end
