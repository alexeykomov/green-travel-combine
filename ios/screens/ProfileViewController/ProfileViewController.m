//
//  ProfileViewController.m
//  greenTravel
//
//  Created by Alex K on 19.05.22.
//

#import "ProfileViewController.h"
#import "Colors.h"
#import "StyleUtils.h"
#import "SignUpFormView.h"
#import "SignInFormView.h"
#import "Colors.h"
#import "UserController.h"
#import "UserModel.h"
#import "UserState.h"
#import "CodeConfirmationViewController.h"

@interface ProfileViewController ()

@property (strong, nonatomic) SignUpFormView *signUpView;
@property (strong, nonatomic) SignInFormView *signInView;
@property (strong, nonatomic) UIScrollView *scrollView;
@property (strong, nonatomic) UIView *contentView;
@property (strong, nonatomic) UserController *userController;
@property (strong, nonatomic) UserModel *userModel;
@property (strong, nonatomic) UISegmentedControl *procedureChoiceView;
@property (strong, nonatomic) UIActivityIndicatorView *loadingView;

@end

static const CGFloat kMinContentInset = 23.5;
static const CGFloat kMaxContentWidth = 328.0;
static const CGFloat kTopOffset = 90.0;

@implementation ProfileViewController

- (instancetype)initWithController:(UserController *)controller model:(UserModel *)model {
  self = [super init];
  if (self) {
    _userController = controller;
    _userModel = model;
  }
  return self;
}

- (void)viewDidLoad {
  [super viewDidLoad];
  UINavigationBar *navigationBar = self.navigationController.navigationBar;
  configureNavigationBar(navigationBar);
  [self registerForKeyboardNotifications];
  [self.userModel addUserModelObserver:self];
  
  UITapGestureRecognizer *tap =
  [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(dismissKeyboard:)];
  [self.view addGestureRecognizer:tap];
  
  self.scrollView = [[UIScrollView alloc] init];
  self.scrollView.translatesAutoresizingMaskIntoConstraints = NO;
  self.scrollView.alwaysBounceVertical = YES;
  [self.view addSubview:self.scrollView];
  [NSLayoutConstraint activateConstraints:@[
    [self.scrollView.topAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.topAnchor],
    [self.scrollView.leadingAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.leadingAnchor],
    [self.scrollView.trailingAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.trailingAnchor],
    [self.scrollView.bottomAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.bottomAnchor]
  ]];
  
  self.contentView = [[UIView alloc] init];
  self.contentView.translatesAutoresizingMaskIntoConstraints = NO;
  [self.scrollView addSubview:self.contentView];
  
  [NSLayoutConstraint activateConstraints:@[
    [self.contentView.topAnchor constraintEqualToAnchor:self.scrollView.topAnchor],
    [self.contentView.leadingAnchor constraintEqualToAnchor:self.scrollView.leadingAnchor],
    [self.contentView.trailingAnchor constraintEqualToAnchor:self.scrollView.trailingAnchor],
    [self.contentView.bottomAnchor constraintEqualToAnchor:self.scrollView.bottomAnchor],
    [self.contentView.widthAnchor constraintEqualToAnchor:self.scrollView.widthAnchor],
    [self.contentView.heightAnchor constraintGreaterThanOrEqualToAnchor:self.scrollView.heightAnchor]
  ]];
  
#pragma mark - Loading indicator
  if (@available(iOS 13.0, *)) {
    self.loadingView =
    [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleLarge];
  } else {
    self.loadingView = [[UIActivityIndicatorView alloc] init];
  }
  self.loadingView.translatesAutoresizingMaskIntoConstraints = NO;
  [self.contentView addSubview:self.loadingView];
  [NSLayoutConstraint activateConstraints:@[
    [self.loadingView.centerXAnchor constraintEqualToAnchor:self.contentView.centerXAnchor],
    [self.loadingView.centerYAnchor constraintEqualToAnchor:self.contentView.centerYAnchor],
  ]];
  
#pragma mark - Segmented control
  NSArray *items = @[NSLocalizedString(@"ProfileScreenChoiceSignIn", @""),
                     NSLocalizedString(@"ProfileScreenChoiceSignUp", @"")];
  
  self.procedureChoiceView = [[UISegmentedControl alloc] initWithItems:items];
  [self.procedureChoiceView addTarget:self action:@selector(onModeChoice:)
                     forControlEvents:UIControlEventValueChanged];
  
  self.procedureChoiceView.translatesAutoresizingMaskIntoConstraints = NO;
  [self.contentView addSubview:self.procedureChoiceView];
  NSLayoutConstraint *leading = [self.procedureChoiceView.leadingAnchor
                                 constraintEqualToAnchor:self.contentView.leadingAnchor
                                 constant:kMinContentInset];
  leading.priority = UILayoutPriorityDefaultHigh;
  NSLayoutConstraint *trailing = [self.procedureChoiceView.trailingAnchor
                                  constraintEqualToAnchor:self.contentView.trailingAnchor
                                  constant:-kMinContentInset];
  trailing.priority = UILayoutPriorityDefaultHigh;
  [NSLayoutConstraint activateConstraints:@[
    [self.procedureChoiceView.centerXAnchor constraintEqualToAnchor:self.contentView.centerXAnchor],
    [self.procedureChoiceView.topAnchor constraintEqualToAnchor:self.contentView.topAnchor constant:19.0],
    leading,
    trailing,
    [self.procedureChoiceView.widthAnchor constraintLessThanOrEqualToConstant:kMaxContentWidth],
  ]];
  
  [self.procedureChoiceView setSelectedSegmentIndex:0];
  [self onModeChoice:self.procedureChoiceView];
  [self onUserStateUpdate:self.userModel.emailSendingState];
}

- (void)viewDidLayoutSubviews {
  [super viewDidLayoutSubviews];
  self.view.backgroundColor = [Colors get].background;
}

- (void)viewWillAppear:(BOOL)animated {
  [super viewWillAppear:animated];
  CodeConfirmationViewController *codeConfirmationViewController =
  [[CodeConfirmationViewController alloc] init];
  [self.navigationController pushViewController:codeConfirmationViewController
                                       animated:YES];
}

- (void)onModeChoice:(UISegmentedControl *)sender {
  if (sender.selectedSegmentIndex == 1) {
    [self addSignUpView];
    return;
  }
  [self addSignInView];
}

- (void)dismissKeyboard:(id)sender {
  [self.view endEditing:YES];
}

-(void)addSignUpView {
  [self.signInView removeFromSuperview];
  
  if (self.signUpView == nil) {
    __weak typeof(self) weakSelf = self;
    self.signUpView =
    [[SignUpFormView alloc] initWithOnSubmit:^(NSString *email,
                                               NSString *username,
                                               NSString *password){
      __strong typeof(weakSelf) strongSelf = weakSelf;
      [strongSelf onSubmit:email username:username password:password];
    }];
  }
  
  self.signUpView.translatesAutoresizingMaskIntoConstraints = NO;
  [self.contentView addSubview:self.signUpView];
  
  NSLayoutConstraint *leading = [self.signUpView.leadingAnchor constraintEqualToAnchor:self.contentView.leadingAnchor constant:kMinContentInset];
  leading.priority = UILayoutPriorityDefaultHigh;
  NSLayoutConstraint *trailing = [self.signUpView.trailingAnchor constraintEqualToAnchor:self.contentView.trailingAnchor constant:-kMinContentInset];
  trailing.priority = UILayoutPriorityDefaultHigh;
  
  [NSLayoutConstraint activateConstraints:@[
    [self.signUpView.centerXAnchor constraintEqualToAnchor:self.contentView.centerXAnchor],
    [self.signUpView.topAnchor constraintEqualToAnchor:self.contentView.topAnchor constant:kTopOffset],
    leading,
    trailing,
    [self.signUpView.widthAnchor constraintLessThanOrEqualToConstant:kMaxContentWidth],
    [self.signUpView.bottomAnchor constraintLessThanOrEqualToAnchor:self.contentView.bottomAnchor],
  ]];
}

-(void)addSignInView {
  [self.signUpView removeFromSuperview];
  
  if (self.signInView == nil) {
    self.signInView = [[SignInFormView alloc] init];
  }
  
  self.signInView.translatesAutoresizingMaskIntoConstraints = NO;
  [self.contentView addSubview:self.signInView];
  [NSLayoutConstraint activateConstraints:@[
    [self.signInView.centerXAnchor constraintEqualToAnchor:self.contentView.centerXAnchor],
    [self.signInView.topAnchor constraintEqualToAnchor:self.contentView.topAnchor constant:kTopOffset],
    [self.signInView.leadingAnchor constraintGreaterThanOrEqualToAnchor:self.contentView.leadingAnchor constant:kMinContentInset],
    [self.signInView.trailingAnchor constraintLessThanOrEqualToAnchor:self.contentView.trailingAnchor constant:-kMinContentInset],
    [self.signInView.widthAnchor constraintGreaterThanOrEqualToConstant:kMaxContentWidth],
    
    [self.signInView.bottomAnchor constraintLessThanOrEqualToAnchor:self.contentView.bottomAnchor],
  ]];
}

- (void)enableLoadingIndicator:(BOOL)enable {
  if (enable) {
    [self.signInView setHidden:enable];
    [self.signInView setHidden:enable];
    [self.procedureChoiceView setHidden:enable];
    
    [self.loadingView setHidden:!enable];
    if (enable) {
      [self.loadingView startAnimating];
      return;
    }
    [self.loadingView stopAnimating];
  }
}

- (void)registerForKeyboardNotifications {
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(keyboardWasShown:)
                                               name:UIKeyboardDidShowNotification object:nil];
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(keyboardWillBeHidden:)
                                               name:UIKeyboardWillHideNotification object:nil];
}



- (void)keyboardWasShown:(NSNotification*)aNotification {
  NSDictionary* info = [aNotification userInfo];
  CGSize kbSize = [[info objectForKey:UIKeyboardFrameEndUserInfoKey] CGRectValue].size;
  UIEdgeInsets contentInsets = UIEdgeInsetsMake(0.0, 0.0, kbSize.height, 0.0);
  self.scrollView.contentInset = contentInsets;
  self.scrollView.scrollIndicatorInsets = contentInsets;
}

- (void)keyboardWillBeHidden:(NSNotification*)aNotification {
  UIEdgeInsets contentInsets = UIEdgeInsetsZero;
  self.scrollView.contentInset = contentInsets;
  self.scrollView.scrollIndicatorInsets = contentInsets;
}

- (void)onSubmit:(NSString *)email
        username:(NSString *)username
        password:(NSString *)password {
  [self.userController initiateSignUp:email username:username password:password];
}

- (void)onUserStateUpdate:(nonnull UserState *)emailSendingState {
  dispatch_async(dispatch_get_global_queue(QOS_CLASS_UTILITY, 0), ^{
    dispatch_async(dispatch_get_main_queue(), ^{
      if (emailSendingState.error) {
        
      }
      if (emailSendingState.inProgress) {
        [self enableLoadingIndicator:YES];
      }
      if (emailSendingState.codeSent) {
        [self enableLoadingIndicator:NO];
        CodeConfirmationViewController *codeConfirmationViewController =
        [[CodeConfirmationViewController alloc] initWithController:self.userController
                                                             model:self.userModel];
        [self.navigationController pushViewController:codeConfirmationViewController
                                             animated:YES];
      }
    });
  });
}

@end
