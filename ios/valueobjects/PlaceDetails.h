//
//  PlaceDetails.h
//  GreenTravel
//
//  Created by Alex K on 8/27/20.
//  Copyright © 2020 Alex K. All rights reserved.
//

#import <Foundation/Foundation.h>

@class CategoryUUIDToRelatedItemUUIDs;

NS_ASSUME_NONNULL_BEGIN

@interface PlaceDetails : NSObject

@property (strong, nonatomic) NSString *uuid;
@property (strong, nonatomic) NSArray<NSString *> *images;
@property (strong, nonatomic) NSString *address;
@property (strong, nonatomic) NSString *descriptionHTML;
- (BOOL)isEqual:(id)object;
@property (readonly) NSUInteger hash;
@property (strong, nonatomic) NSArray<CategoryUUIDToRelatedItemUUIDs *> *categoryIdToItems;

@end 

NS_ASSUME_NONNULL_END
