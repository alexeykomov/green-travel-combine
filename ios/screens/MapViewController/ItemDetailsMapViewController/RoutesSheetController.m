//
//  RoutesSheet.m
//  greenTravel
//
//  Created by Alex K on 5/23/21.
//

#import "RoutesSheetController.h"
#import <UIKit/UIKit.h>
#import <CoreLocation/CoreLocation.h>

@interface RoutesSheetController()

@end

static RoutesSheetController *instance;

@implementation RoutesSheetController

NSString const *kPrefixAppleMaps = @"maps://";
NSString const *kPrefixGoogleMaps = @"https://www.google.com/maps/";
NSString const *kPrefixYandexMaps = @"yandexmaps://maps.yandex.ru/";
NSString const *kPrefixYandex = @"yandexnavi://";

NSString const *kGoogleMapsTravelModeCar = @"driving";

typedef NS_ENUM(NSInteger, MapProvider) {
  MapProviderApple,
  MapProviderGoogle,
  MapProviderYandexMaps,
  MapProviderYandex,
};

- (void)show:(BOOL)useSourceDestiny
locationSource:(CLLocationCoordinate2D)locationSource
locationDestination:(CLLocationCoordinate2D)locationDestination
locationTitle:(NSString *)locationTitle
   presenter:(void(^)(UIAlertController *))presenter
{
  NSArray *prefixes = @[kPrefixAppleMaps, kPrefixGoogleMaps, kPrefixYandexMaps, kPrefixYandex];
  NSDictionary *prefixToProvider = @{
    kPrefixAppleMaps: @(MapProviderApple),
    kPrefixGoogleMaps: @(MapProviderGoogle),
    kPrefixYandexMaps: @(MapProviderYandexMaps),
    kPrefixYandex: @(MapProviderYandex),
  };
  NSDictionary *providerToPrefs = @{
    @(MapProviderApple): @{@"title": @"Apple Maps"},
    @(MapProviderGoogle): @{@"title": @"Google Maps"},
    @(MapProviderYandexMaps): @{@"title": @"Yandex Maps"},
    @(MapProviderYandex): @{@"title": @"Yandex Navigator"},
  };
  NSMutableArray<NSString *> *urls = [[NSMutableArray alloc] init];
  NSMutableArray<NSString *> *titles = [[NSMutableArray alloc] init];
  [prefixes enumerateObjectsUsingBlock:^(id  _Nonnull prefix, NSUInteger idx, BOOL * _Nonnull stop) {
    if ([[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:prefix]]) {
      MapProvider provider = [prefixToProvider[prefix] intValue];
      NSString *title = providerToPrefs[@(provider)][@"title"];
      [urls addObject:[self urlForProvider:provider
                             locationSource:locationSource
                        locationDestination:locationDestination
                                      title:locationTitle]];
      [titles addObject:title];
    }
  }];
  if ([urls count]) {
    UIAlertController* alert = [UIAlertController alertControllerWithTitle:@"Навигация"
                                   message:@"Проложить путь к объекту."
                                   preferredStyle:UIAlertControllerStyleActionSheet];
     
    UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"Cancel" style:UIAlertActionStyleCancel
       handler:^(UIAlertAction * action) {
    }];
    [urls enumerateObjectsUsingBlock:^(NSString * _Nonnull url, NSUInteger idx, BOOL * _Nonnull stop) {
      UIAlertAction* action = [UIAlertAction actionWithTitle:titles[idx] style:UIAlertActionStyleDefault
         handler:^(UIAlertAction * action) {
        NSURL *nsURL = [NSURL URLWithString:url];
        [[UIApplication sharedApplication] openURL:nsURL options:@{}
                                 completionHandler:^(BOOL success) {}];
      }];
      [alert addAction:action];
    }];
    [alert addAction:defaultAction];
    presenter(alert);
  }
}

- (NSString *)urlForProvider:(MapProvider)provider
locationSource:(CLLocationCoordinate2D)locationSource
locationDestination:(CLLocationCoordinate2D)locationDestination
title:(NSString *)title {
  NSString *url = [[NSMutableString alloc] init];
  NSString *sourceLatLng = [NSString stringWithFormat:@"%f,%f",
                            locationSource.latitude,
                            locationSource.longitude];
  NSString *destinationLatLng = [NSString stringWithFormat:@"%f,%f",
                                 locationDestination.latitude,
                                 locationDestination.longitude];
  NSString *encodedTitle = [title stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLHostAllowedCharacterSet]];
  switch (provider) {
    case MapProviderApple: {
      NSString *sourceLatLngApple = [[NSString stringWithFormat:@"(%f, %f)",
                                      locationSource.latitude,
                                      locationSource.longitude] stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLHostAllowedCharacterSet]];
      NSString *destionationLatLngApple = [[NSString stringWithFormat:@"(%f, %f)",
                                            locationSource.latitude,
                                            locationSource.longitude] stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLHostAllowedCharacterSet]];
      url = [url stringByAppendingString:[NSString stringWithFormat:@"%@?saddr=%@&daddr=%@&q=%@&address=%@",
                                          kPrefixAppleMaps, sourceLatLngApple, destionationLatLngApple, encodedTitle, encodedTitle]];
      return url;
    }
    case MapProviderGoogle: {
      // Always using universal URL instead of URI scheme since the latter doesn't support all parameters (#155)
      NSString *googleURL = @"https://www.google.com/maps/dir/?api=1";
      url = [url stringByAppendingString:[NSString stringWithFormat:@"%@&origin=%@&destination=%@",
                                          googleURL, sourceLatLng, destinationLatLng]];
      return url;
    }
    case MapProviderYandexMaps:
      url = [url stringByAppendingString:[NSString stringWithFormat:@"%@?pt=%f,%f",
                                          kPrefixYandexMaps, locationDestination.longitude, locationDestination.latitude]];
      return url;
    case MapProviderYandex:
      url = [url stringByAppendingString:[NSString stringWithFormat:@"%@build_route_on_map?lat_to=%f&lon_to=%f&lat_from=%f&lon_from=%f",
                                          kPrefixYandexMaps,
                                          locationDestination.latitude,
                                          locationDestination.longitude,
                                          locationSource.latitude,
                                          locationSource.longitude]];
      return url;
  }
}


+ (instancetype)get {
    if (instance) {
        return instance;
    }
    instance = [[RoutesSheetController alloc] init]; 
    return instance;
}

@end
