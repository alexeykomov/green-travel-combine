//
//  MapService.m
//  greenTravel
//
//  Created by Alex K on 5/27/21.
//

#import "MapService.h"
@import Mapbox;
#import <Keys/GreenTravelKeys.h>

@interface MapService()

@property (strong, nonatomic) NSURLSession *session;

@end

@implementation MapService

- (instancetype) initWithSession:(NSURLSession *)session {
    self = [super init];
    if (self) {
        _session = session; 
    }
    return self;
}

- (void)loadDirectionsWithCompletionFrom:(CLLocationCoordinate2D)from
                                      to:(CLLocationCoordinate2D)to
                              completion:(void (^)(NSArray<CLLocation *> *))completion {
  NSString *sourceLatLng = [NSString stringWithFormat:@"%f,%f",
                            from.latitude, from.longitude];
  NSString *destinationLatLng = [NSString stringWithFormat:@"%f,%f",
                                 to.latitude, to.longitude];
  GreenTravelKeys *keys = [[GreenTravelKeys alloc] init];
  NSString *mapToken = keys.mapAccessToken;
  NSString *url = [NSString stringWithFormat:@"https://api.mapbox.com/directions/v5/mapbox/driving/%@;%@?access_token=%@&geometries=geojson", sourceLatLng, destinationLatLng, mapToken];

  NSURL *nsURL = [NSURL URLWithString:url];
  
  NSURLSessionDataTask *getCategoriesTask =
  [self.session dataTaskWithURL:nsURL
              completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
    if (!data) {
      completion(nil);
      return;
    }
    NSDictionary *body = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:&error];
    NSArray<NSArray<NSNumber *>*> *coordinates = body[@"routes"][0][@"geometry"][@"coordinates"];
    if (coordinates) {
      NSMutableArray *locations = [[NSMutableArray alloc] init];
      [coordinates enumerateObjectsUsingBlock:^(NSArray<NSNumber *> * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        [locations addObject:[[CLLocation alloc] initWithLatitude:[obj[0] doubleValue] longitude:[obj[1] doubleValue]]];
      }];
      NSLog(@"Error: %@", error);
      completion(locations);
    }
    
    
    
  }];
  [getCategoriesTask resume];
}

@end
