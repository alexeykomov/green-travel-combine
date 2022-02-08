//
//  DetailsViewController.h
//  GreenTravel
//
//  Created by Alex K on 8/19/20.
//  Copyright © 2020 Alex K. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "BookmarksObserver.h"
#import "CategoriesObserver.h"
#import "DetailsObserver.h"
#import "LoadableDataViewController.h"

NS_ASSUME_NONNULL_BEGIN

@class PlaceItem;
@class ApiService;
@class CoreDataService;
@class MapModel;
@class LocationModel;
@class IndexModel;
@class SearchModel;
@class MapService;
@class DetailsModel;

typedef NS_ENUM(NSUInteger, DetailsViewControllerCTAType) {
  DetailsViewControllerCTATypeMap = 0,
  DetailsViewControllerCTATypeWebsite = 1,
};

@interface DetailsViewController : LoadableDataViewController<BookmarksObserver,
    CategoriesObserver, DetailsObserver>

- (instancetype)initWithApiService:(ApiService *)apiService
                   coreDataService:(nonnull CoreDataService *)coreDataService
                   mapService:(nonnull MapService *)mapService
                        indexModel:(IndexModel *)indexModel
                          mapModel:(MapModel *)mapModel
                     locationModel:(LocationModel *)locationModel
                       searchModel:(SearchModel *) searchModel
                       detailsModel:(DetailsModel *)detailsModel;
@property (strong, nonatomic) PlaceItem *item;
@property (strong, nonatomic) UIView *prevLastView;
@property (strong, nonatomic) NSLayoutConstraint *prevLastViewBottomAnchor;
@property (strong, nonatomic) UIButton *sourcesView;

@end

typedef NS_ENUM(NSUInteger, LinkedCategoriesViewType) {
  LinkedCategoriesViewTypeCategories,
  LinkedCategoriesViewTypeBelongsTo,
};

NS_ASSUME_NONNULL_END
