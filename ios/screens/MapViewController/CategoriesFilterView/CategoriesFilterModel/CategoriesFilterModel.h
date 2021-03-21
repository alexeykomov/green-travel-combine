//
//  CategoriesFilterModel.h
//  GreenTravel
//
//  Created by Alex K on 2/26/21.
//  Copyright © 2021 Alex K. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CategoriesObserver.h"
#import "CategoriesFilterObservable.h"

@class FilterOption;
@class IndexModel;
@class PlaceItem;

NS_ASSUME_NONNULL_BEGIN

@protocol CategoriesFilterObserver;

@interface CategoriesFilterModel : NSObject<CategoriesObserver, CategoriesFilterObservable>

@property (strong, nonatomic, nonnull) NSMutableArray<CategoriesFilterObserver> *categoriesFilterObservers;
@property (strong, nonatomic, nonnull) NSMutableArray<CategoriesFilterObserver> *categoriesFilterSelectObservers;
@property (strong, nonatomic, nonnull) NSMutableArray<FilterOption *> *filterOptions;
@property (strong, nonatomic, nonnull) NSMutableSet<NSString *> *selectedCategoryUUIDs;
- (instancetype)initWithIndexModel:(IndexModel *)indexModel;
- (void)selectOption:(FilterOption *)option;
- (void)selectOptionForPlaceItem:(PlaceItem *)item;

@end

NS_ASSUME_NONNULL_END
