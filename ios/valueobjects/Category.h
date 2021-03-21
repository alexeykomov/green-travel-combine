//
//  Category.h
//  GreenTravel
//
//  Created by Alex K on 8/26/20.
//  Copyright © 2020 Alex K. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@class PlaceItem;

@interface Category : NSObject

@property (strong, nonatomic) NSString *uuid;
@property (strong, nonatomic) NSString *title;
@property (strong, nonatomic) NSString *icon;
@property (strong, nonatomic) NSArray<Category *> *categories;
@property (strong, nonatomic) NSArray<PlaceItem *> *items;
@property (strong, nonatomic) NSString *cover;
@property (strong, nonatomic) void (^onAllButtonPress)(void);
@property (strong, nonatomic) void (^onPlaceCellPress)(void);



@end

NS_ASSUME_NONNULL_END
