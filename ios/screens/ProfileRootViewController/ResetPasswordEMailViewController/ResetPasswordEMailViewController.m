//
//  ResetPasswordEMailViewController.m
//  greenTravel
//
//  Created by Alex K on 15.06.22.
//

#import "ResetPasswordEMailViewController.h"
#import "CommonTextField.h"
#import "CommonButton.h"
#import "Typography.h"
#import "UserController.h"
#import "UserModel.h"
#import "UserModelConstants.h"
#import "ResetPasswordPassCodeViewController.h"

@interface ResetPasswordEMailViewController ()

@property(strong, nonatomic) UILabel *hintLabel;
@property(strong, nonatomic) UILabel *titleLabel;
@property (strong, nonatomic) CommonTextField *textFieldMail;
@property(strong, nonatomic) CommonButton *buttonSubmit;
@property(assign, nonatomic) BOOL shownKeyboard;
@property(assign, nonatomic) BOOL navigatedToCodeScreen;

@end

@implementation ResetPasswordEMailViewController

- (void)viewDidLayoutSubviews {
  [self.hintLabel setPreferredMaxLayoutWidth:self.view.frame.size.width - 47.0];
}

- (void)viewDidLoad {
  [super viewDidLoad];
  self.title = NSLocalizedString(@"ResetPasswordEMailScreenTitle", @"");
  
  self.titleLabel = [[UILabel alloc] init];
  NSAttributedString *header = [[Typography get] codeConfirmationHeader:NSLocalizedString(@"ResetPasswordEMailScreenHeader", @"")];
  [self.titleLabel setAttributedText:header];
  [self.titleLabel setNumberOfLines:0];
  [self.titleLabel setTextAlignment:NSTextAlignmentCenter];
  [self.contentView addSubview:self.titleLabel];
  self.titleLabel.translatesAutoresizingMaskIntoConstraints = NO;

  [NSLayoutConstraint activateConstraints:@[
    [self.titleLabel.centerXAnchor constraintEqualToAnchor:self.contentView.centerXAnchor],
    [self.titleLabel.leadingAnchor constraintGreaterThanOrEqualToAnchor:self.contentView.leadingAnchor],
    [self.titleLabel.trailingAnchor constraintLessThanOrEqualToAnchor:self.contentView.trailingAnchor],
    [self.titleLabel.topAnchor constraintEqualToAnchor:self.contentView.topAnchor constant:150.0],
  ]];

  self.hintLabel = [[UILabel alloc] init];
  NSAttributedString *hint = [[Typography get] codeConfirmationHint:NSLocalizedString(@"ResetPasswordEMailScreenHint", @"")];
  [self.hintLabel setAttributedText:hint];
  [self.hintLabel setNumberOfLines:0];
  [self.hintLabel setTextAlignment:NSTextAlignmentCenter];
  [self.contentView addSubview:self.hintLabel];
  self.hintLabel.translatesAutoresizingMaskIntoConstraints = NO;

  [NSLayoutConstraint activateConstraints:@[
    [self.hintLabel.centerXAnchor constraintEqualToAnchor:self.contentView.centerXAnchor],
    [self.hintLabel.leadingAnchor constraintGreaterThanOrEqualToAnchor:self.contentView.leadingAnchor],
    [self.hintLabel.trailingAnchor constraintLessThanOrEqualToAnchor:self.contentView.trailingAnchor],
    [self.hintLabel.topAnchor constraintEqualToAnchor:self.titleLabel.bottomAnchor constant:20.0],
  ]];
  
  self.textFieldMail = [[CommonTextField alloc] initWithImageName:@"textfield-mail"
                                                     keyboardType:UIKeyboardTypeEmailAddress
                                                      placeholder:NSLocalizedString(@"ProfileScreenPlaceholderEMail", @"")];
  [self.textFieldMail.textField setTextContentType:UITextContentTypeEmailAddress];
  [self.contentView addSubview:self.textFieldMail];
  self.textFieldMail.translatesAutoresizingMaskIntoConstraints = NO;
  [NSLayoutConstraint activateConstraints:@[
      [self.textFieldMail.topAnchor constraintEqualToAnchor:self.hintLabel.bottomAnchor constant:20.0],
      [self.textFieldMail.leadingAnchor constraintEqualToAnchor:self.contentView.leadingAnchor],
      [self.textFieldMail.trailingAnchor constraintEqualToAnchor:self.contentView.trailingAnchor],
  ]];
  
  self.buttonSubmit = [[CommonButton alloc] initWithTarget:self
                                                    action:@selector(onSubmit:)
                                                     label:NSLocalizedString(@"CodeConfirmationScreenSubmit", @"")];
  self.buttonSubmit.translatesAutoresizingMaskIntoConstraints = NO;
  [self.contentView addSubview:self.buttonSubmit];

  [NSLayoutConstraint activateConstraints:@[
    [self.buttonSubmit.centerXAnchor constraintEqualToAnchor:self.contentView.centerXAnchor],
    [self.buttonSubmit.topAnchor constraintEqualToAnchor:self.textFieldMail.bottomAnchor constant:25.0],
    [self.buttonSubmit.leadingAnchor constraintEqualToAnchor:self.contentView.leadingAnchor],
    [self.buttonSubmit.trailingAnchor constraintEqualToAnchor:self.contentView.trailingAnchor],
    
  ]];
}

- (void)viewDidAppear:(BOOL)animated {
  if (!self.shownKeyboard) {
    self.shownKeyboard = YES;
    [self.textFieldMail becomeFirstResponder];
  }
}

- (void)onUserModelStateTransitionFrom:(UserModelState)prevState toCurrentState:(UserModelState)currentState {
  dispatch_async(dispatch_get_global_queue(QOS_CLASS_UTILITY, 0), ^{
    dispatch_async(dispatch_get_main_queue(), ^{
      if (prevState == UserModelStatePasswordNotReset && currentState == UserModelStatePasswordResetInProgress) {
        [self enableLoadingIndicator:YES];
        return;
      }
      if (prevState == UserModelStatePasswordResetInProgress && currentState == UserModelStatePasswordNotReset) {
        [self enableLoadingIndicator:NO];
        return;
      }
      if (prevState == UserModelStatePasswordResetInProgress && currentState == UserModelStatePasswordResetConfirmCodeNotSet && !self.navigatedToCodeScreen) {
        ResetPasswordPassCodeViewController *resetPasswordPassCodeViewController =
        [[ResetPasswordPassCodeViewController alloc] initWithController:self.userController
                                                                  model:self.userModel];
        [self.navigationController pushViewController:resetPasswordPassCodeViewController
                                             animated:YES];
        self.navigatedToCodeScreen = YES;
      }
    });
  });
}

- (void)onSubmit:(CommonButton *)sender {
  [self.userController initiateResetPassword:self.textFieldMail.textField.text];
  [self.view endEditing:YES];
}

@end
