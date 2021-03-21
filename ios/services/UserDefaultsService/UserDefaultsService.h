//
//  UserDefaultsService.h
//  GreenTravel
//
//  Created by Alex K on 1/24/21.
//  Copyright © 2021 Alex K. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface UserDefaultsService : NSObject

- (void)saveETag:(NSString *)eTag;
- (NSString *)loadETag;

@end

NS_ASSUME_NONNULL_END
