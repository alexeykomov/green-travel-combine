//
//  IndexModel.h
//  GreenTravel
//
//  Created by Alex K on 8/27/20.
//  Copyright © 2020 Alex K. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CategoriesObservable.h"
#import "CategoriesObserver.h"
#import "BookmarksObservable.h"
#import "BookmarksObserver.h"


NS_ASSUME_NONNULL_BEGIN

@class Category;
@class PlaceItem;
@class PathItem;
@class PlaceDetails;
@class PathDetails;
@class BookmarksModel;
@class ApiService;
@class CoreDataService;
@class UserDefaultsService;

@interface IndexModel : NSObject<CategoriesObservable, BookmarksObservable> 

@property (strong, nonatomic) NSMutableArray<id<CategoriesObserver>> *categoriesObservers;
@property (strong, nonatomic) NSMutableArray<id<BookmarksObserver>> *bookmarksObservers;
@property (strong, nonatomic) NSArray<Category *> *categories;
@property (copy, nonatomic) NSDictionary<NSString *, Category *> *flatCategories;
@property (copy, nonatomic) NSDictionary<NSString *, PlaceItem *> *flatItems;
@property (strong, nonatomic) NSDictionary<NSString *, PathDetails *> *pathsByUUID;
- (instancetype)initWithApiService:(ApiService *)apiService
                   coreDataService:(CoreDataService *)coreDataService
               userDefaultsService:(UserDefaultsService *)userDefaultsService;
- (void)loadCategories;
- (void)loadCategoriesRemote:(BOOL)visible;
- (void)refreshCategories;
- (void)retryCategories;
- (void)bookmarkItem:(PlaceItem *)item bookmark:(BOOL)bookmark;
- (void)updateCategories:(NSArray<Category *> *)categories;

@end

NS_ASSUME_NONNULL_END
