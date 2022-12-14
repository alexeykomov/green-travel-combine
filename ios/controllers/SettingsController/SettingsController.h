//
//  SettingsController.h
//  greenTravel
//
//  Created by Alex K on 20.12.22.
//

#import <Foundation/Foundation.h>
#import "SettingsModelConstants.h"

NS_ASSUME_NONNULL_BEGIN

@class UIViewController;
@class SettingsEntry;
@class SettingsModel;

@interface SettingsController : NSObject

- (instancetype)initWithModel:(SettingsModel *)settingsModel;

- (void)interactWithSetting:(SettingsEntry *)entry
           onViewController:(UIViewController *)viewController;

@end

NS_ASSUME_NONNULL_END
