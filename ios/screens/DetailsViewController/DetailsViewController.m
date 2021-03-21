//
//  DetailsViewController.m
//  GreenTravel
//
//  Created by Alex K on 8/19/20.
//  Copyright © 2020 Alex K. All rights reserved.
//

#import "DetailsViewController.h"
#import "Colors.h"
#import "PlaceItem.h"
#import "PlaceDetails.h"
#import "ApiService.h"
#import "DetailsModel.h"
#import "LocationModel.h"
#import "MapModel.h"
#import "IndexModel.h"
#import "MapItem.h"
#import "ImageUtils.h"
#import "TextUtils.h"
#import "MapViewController.h"
#import "LinkedCategoriesView.h"
#import "BannerView.h"
#import "GalleryView.h"
#import "CategoryUtils.h"
#import "Typography.h"
#import "CommonButton.h"
#import "DescriptionView.h"
#import "PlacesViewController.h"

@interface DetailsViewController ()

@property (strong, nonatomic) UIScrollView *scrollView;
@property (strong, nonatomic) BannerView *copiedBannerView;
@property (strong, nonatomic) NSLayoutConstraint *copiedBannerViewTopConstraint;
@property (strong, nonatomic) UIView *contentView;
@property (strong, nonatomic) UILabel *titleLabel;
@property (strong, nonatomic) UILabel *addressLabel;
@property (strong, nonatomic) UIButton *bookmarkButton;
@property (strong, nonatomic) UIButton *locationButton;
@property (strong, nonatomic) GalleryView *imageGalleryView;
@property (strong, nonatomic) UIButton *mapButtonTop;
@property (strong, nonatomic) UIButton *mapButtonBottom;
@property (strong, nonatomic) DescriptionView *descriptionTextView;
@property (strong, nonatomic) UIStackView *descriptionPlaceholderView;
@property (strong, nonatomic) UILabel *interestingLabel;
@property (strong, nonatomic) LinkedCategoriesView *linkedCategoriesView;
@property (strong, nonatomic) NSLayoutConstraint *linkedCategoriesViewHeightConstraint;
@property (strong, nonatomic) UIView *activityIndicatorContainerView;
@property (strong, nonatomic) UIActivityIndicatorView *activityIndicatorView;
@property (strong, nonatomic) ApiService *apiService;
@property (strong, nonatomic) CoreDataService *coreDataService;
@property (strong, nonatomic) NSTimer *bannerHideTimer;
@property (strong, nonatomic) UIViewPropertyAnimator *bannerShowAnimator;
@property (strong, nonatomic) UIViewPropertyAnimator *bannerHideAnimator;

@property (assign, nonatomic) BOOL ready;
@property (strong, nonatomic) LocationModel *locationModel;
@property (strong, nonatomic) MapModel *mapModel;
@property (strong, nonatomic) IndexModel *indexModel;
@property (strong, nonatomic) SearchModel *searchModel;
@property (assign, nonatomic) BOOL resized;
@property (assign, nonatomic) CGSize screenSize;

@end

@implementation DetailsViewController 

- (instancetype)initWithApiService:(ApiService *)apiService
                   coreDataService:(nonnull CoreDataService *)coreDataService
                      indexModel:(IndexModel *)indexModel
                          mapModel:(MapModel *)mapModel
                     locationModel:(LocationModel *)locationModel
                     searchModel:(SearchModel *)searchModel               
{
    self = [super init];
    if (self) {
        _apiService = apiService;
        _coreDataService = coreDataService;
        _indexModel = indexModel;
        _locationModel = locationModel;
        _searchModel = searchModel;
        _mapModel = mapModel;
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.view.backgroundColor = [Colors get].white;
    self.title = self.item.title;
        
    #pragma mark - Scroll view
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
        [self.contentView.widthAnchor constraintEqualToAnchor:self.scrollView.widthAnchor]
    ]];
        
    #pragma mark - Gallery
    self.imageGalleryView = [[GalleryView alloc] initWithFrame:CGRectZero
                                                     imageURLs:self.item.details.images];
    self.imageGalleryView.translatesAutoresizingMaskIntoConstraints = NO;
    self.imageGalleryView.layer.masksToBounds = YES;
    
    [self.contentView addSubview:self.imageGalleryView];
    
    [NSLayoutConstraint activateConstraints:@[
        [self.imageGalleryView.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor],
        [self.imageGalleryView.topAnchor constraintEqualToAnchor:self.contentView.topAnchor constant:0.0],
        [self.imageGalleryView.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor],
    ]];
    
    #pragma mark - Bookmark button
    self.bookmarkButton = [[UIButton alloc] init];
    
    self.bookmarkButton.backgroundColor = [Colors get].white;
    self.bookmarkButton.contentMode = UIViewContentModeScaleAspectFill;
    self.bookmarkButton.layer.cornerRadius = 22.0;
    self.bookmarkButton.layer.borderWidth = 1.0;
    self.bookmarkButton.layer.borderColor = [[Colors get].heavyMetal35 CGColor];
    self.bookmarkButton.layer.masksToBounds = YES;
    UIImage *imageNotSelected = [[UIImage imageNamed:@"bookmark-index"] imageWithRenderingMode:UIImageRenderingModeAlwaysTemplate];
    UIImage *imageSelected = [[UIImage imageNamed:@"bookmark-index-selected"] imageWithRenderingMode:UIImageRenderingModeAlwaysTemplate];
    
    [self.bookmarkButton setImage:imageNotSelected forState:UIControlStateNormal];
    [self.bookmarkButton setImage:imageSelected forState:UIControlStateSelected];
    
    self.bookmarkButton.tintColor = [Colors get].logCabin;
    [self.bookmarkButton setSelected:self.item.bookmarked];
    
    [self.bookmarkButton addTarget:self action:@selector(onBookmarkButtonPress:) forControlEvents:UIControlEventTouchUpInside];

    self.bookmarkButton.translatesAutoresizingMaskIntoConstraints = NO;
    
    [self.contentView addSubview:self.bookmarkButton];
    
    [NSLayoutConstraint activateConstraints:@[
        [self.bookmarkButton.topAnchor constraintEqualToAnchor:self.contentView.topAnchor constant:32.0],
        [self.bookmarkButton.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:-16.0],
        [self.bookmarkButton.widthAnchor constraintEqualToConstant:44.0],
        [self.bookmarkButton.heightAnchor constraintEqualToConstant:44.0],
    ]];
        
    #pragma mark - Title label
    self.titleLabel = [[UILabel alloc] init];
    self.titleLabel.numberOfLines = 4;
    [self.titleLabel setFont:[UIFont fontWithName:@"Montserrat-Semibold" size:20.0]];
    self.titleLabel.translatesAutoresizingMaskIntoConstraints = NO;

    [self.contentView addSubview:self.titleLabel];

    [NSLayoutConstraint activateConstraints:@[
        [self.titleLabel.topAnchor constraintEqualToAnchor:self.imageGalleryView.bottomAnchor],
        [self.titleLabel.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:16.0],
        [self.titleLabel.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:-16.0],

    ]];
    
    #pragma mark - Address label
    self.addressLabel = [[UILabel alloc] init];
    self.addressLabel.numberOfLines = 4;
    [self.addressLabel setFont:[UIFont fontWithName:@"OpenSans-Regular" size:14.0]];
    self.addressLabel.translatesAutoresizingMaskIntoConstraints = NO;

    [self.contentView addSubview:self.addressLabel];

    [NSLayoutConstraint activateConstraints:@[
        [self.addressLabel.topAnchor constraintEqualToAnchor:self.titleLabel.bottomAnchor constant:8.0],
        [self.addressLabel.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:16.0],
        [self.addressLabel.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:-16.0],

    ]];
    
    #pragma mark - Location button
    self.locationButton = [[UIButton alloc] init];
    [self.locationButton.titleLabel setFont:[UIFont fontWithName:@"OpenSans-Regular" size:14.0]];
    
    [self.locationButton addTarget:self action:@selector(onLocationButtonPress:) forControlEvents:UIControlEventTouchUpInside];
    
    self.locationButton.translatesAutoresizingMaskIntoConstraints = NO;

    [self.contentView addSubview:self.locationButton];

    [NSLayoutConstraint activateConstraints:@[
        [self.locationButton.topAnchor constraintEqualToAnchor:self.addressLabel.bottomAnchor constant:3.0],
        [self.locationButton.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:16.0],
        //[self.locationButton.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:-16.0],

    ]];
    
    #pragma mark - Map button top
    self.mapButtonTop = [[CommonButton alloc] initWithTarget:self action:@selector(onMapButtonPress:) label:@"Посмотреть на карте"];
    
    [self.contentView addSubview:self.mapButtonTop];

    NSLayoutConstraint *mapButtonTopLeading = [self.mapButtonTop.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:16.0];
    NSLayoutConstraint *mapButtonTopTrailing = [self.mapButtonTop.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:-16.0];
    mapButtonTopLeading.priority = UILayoutPriorityDefaultHigh - 1;
    mapButtonTopTrailing.priority = UILayoutPriorityDefaultHigh - 1;
    [NSLayoutConstraint activateConstraints:@[
        [self.mapButtonTop.topAnchor constraintEqualToAnchor:self.locationButton.bottomAnchor constant:20.0],
        [self.mapButtonTop.centerXAnchor constraintEqualToAnchor:self.view.centerXAnchor],
        mapButtonTopLeading,
        mapButtonTopTrailing,
    ]];
    
    #pragma mark - Description text
    self.descriptionTextView = [[DescriptionView alloc] init];

    self.descriptionTextView.translatesAutoresizingMaskIntoConstraints = NO;
    [self.contentView addSubview:self.descriptionTextView];

    [NSLayoutConstraint activateConstraints:@[
        [self.descriptionTextView.topAnchor constraintEqualToAnchor:self.mapButtonTop.bottomAnchor constant:26.0],
        [self.descriptionTextView.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor],
        [self.descriptionTextView.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor],
    ]];
    
    #pragma mark - Linked items
    __weak typeof(self) weakSelf = self;
    self.linkedCategoriesView =
    [[LinkedCategoriesView alloc] initWithIndexModel:self.indexModel
                                          apiService:self.apiService
                                            mapModel:self.mapModel
                                       locationModel:self.locationModel
                                onCategoryLinkSelect:^(Category * _Nonnull category, NSOrderedSet<NSString *> * _Nonnull linkedItems) {
        PlacesViewController *placesViewController =
        [[PlacesViewController alloc] initWithIndexModel:weakSelf.indexModel
                                              apiService:weakSelf.apiService
                                         coreDataService:weakSelf.coreDataService
                                                mapModel:weakSelf.mapModel
                                           locationModel:weakSelf.locationModel
                                             searchModel:weakSelf.searchModel
                                              bookmarked:NO
                                        allowedItemUUIDs:linkedItems];
        placesViewController.category = category;
        [weakSelf.navigationController pushViewController:placesViewController animated:YES];
    }];

    self.linkedCategoriesView.translatesAutoresizingMaskIntoConstraints = NO;

    [self.contentView addSubview:self.linkedCategoriesView];
    
    [NSLayoutConstraint activateConstraints:@[
        [self.linkedCategoriesView.topAnchor constraintEqualToAnchor:self.descriptionTextView.bottomAnchor constant:32.0],
        [self.linkedCategoriesView.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:0],
        [self.linkedCategoriesView.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:0],
        [self.linkedCategoriesView.bottomAnchor constraintEqualToAnchor:self.contentView.bottomAnchor constant:-10.5],
    ]];
    
#pragma mark - Activity indicator
    self.activityIndicatorContainerView = [[UIView alloc] init];
    self.activityIndicatorContainerView.translatesAutoresizingMaskIntoConstraints = NO;
    self.activityIndicatorContainerView.backgroundColor = [Colors get].white;
    [self.view addSubview:self.activityIndicatorContainerView];
    [NSLayoutConstraint activateConstraints:@[
        [self.activityIndicatorContainerView.topAnchor constraintEqualToAnchor:self.view.topAnchor],
        [self.activityIndicatorContainerView.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor],
        [self.activityIndicatorContainerView.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor],
        [self.activityIndicatorContainerView.bottomAnchor constraintEqualToAnchor:self.view.bottomAnchor],
    ]];
    
    self.activityIndicatorView = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleGray];
    self.activityIndicatorView.hidesWhenStopped = YES;
    self.activityIndicatorView.translatesAutoresizingMaskIntoConstraints = NO;
    [self.activityIndicatorContainerView addSubview:self.activityIndicatorView];
    [NSLayoutConstraint activateConstraints:@[
        [self.activityIndicatorView.centerXAnchor constraintEqualToAnchor:self.activityIndicatorContainerView.centerXAnchor],
        [self.activityIndicatorView.centerYAnchor constraintEqualToAnchor:self.activityIndicatorContainerView.centerYAnchor]
    ]];
    
#pragma mark - "Copied" banner
    self.copiedBannerView = [[BannerView alloc] init];
    self.copiedBannerView.translatesAutoresizingMaskIntoConstraints = NO;
    [self.view addSubview:self.copiedBannerView];
    
    self.copiedBannerViewTopConstraint = [self.copiedBannerView.topAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.topAnchor constant:-56.0];
    [NSLayoutConstraint activateConstraints:@[
        self.copiedBannerViewTopConstraint,
        [self.copiedBannerView.leadingAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.leadingAnchor],
        [self.copiedBannerView.trailingAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.trailingAnchor],
        [self.copiedBannerView.heightAnchor constraintEqualToConstant:56.0]
    ]];
    
#pragma mark - Add observers
    [self.indexModel addObserver:self];
    [self.indexModel addObserverBookmarks:self];
    
#pragma mark - Load data
    [self updateMainContent:self.item.details];
    if (!self.ready) {
        [self.activityIndicatorView startAnimating];
        [self.activityIndicatorView setHidden:NO];
    }
}

- (void)updateMainContent:(PlaceDetails *)details {
    dispatch_async(dispatch_get_global_queue(QOS_CLASS_UTILITY, 0), ^{
        NSAttributedString *html = getAttributedStringFromHTML(details.descriptionHTML);
        dispatch_async(dispatch_get_main_queue(), ^{
            if (!self.ready) {
                self.ready = YES;
                [self.activityIndicatorContainerView setHidden:YES];
                [self.activityIndicatorView stopAnimating];
            }
            self.titleLabel.attributedText = [[Typography get] makeTitle1Semibold:self.item.title];
            if (details.address) {
                self.addressLabel.attributedText = [[Typography get] makeSubtitle3Regular:self.item.title];
            }
            [self.locationButton setAttributedTitle:
             [[Typography get] makeSubtitle3Regular:[NSString stringWithFormat:@"%f° N, %f° E", self.item.coords.latitude, self.item.coords.longitude] color:[Colors get].royalBlue]
             forState:UIControlStateNormal];
            [self.descriptionTextView update:html showPlaceholder:[details.descriptionHTML length] == 0];
            if (details.categoryIdToItems) {
                [self.linkedCategoriesView update:details.categoryIdToItems];
            } else {
                [self.linkedCategoriesView setHidden:YES];
            }
        });
    });
}

- (void)updateDetails {
    PlaceDetails *details = self.item.details;
    __weak typeof(self) weakSelf = self;
    dispatch_async(dispatch_get_main_queue(), ^{
        [weakSelf.imageGalleryView setUpWithPictureURLs:details.images];
    });
    [self updateMainContent:details];
}

#pragma mark - Observers

- (void)onBookmarkUpdate:(PlaceItem *)item bookmark:(BOOL)bookmark {
    if ([self.item.uuid isEqualToString:item.uuid]) {
        [self.bookmarkButton setSelected:bookmark];
    }
}

- (void)onCategoriesUpdate:(nonnull NSArray<Category *> *)categories {
    NSString *itemUUID = self.item.uuid;
    __weak typeof(self) weakSelf = self;
    traverseCategories(categories, ^(Category *newCategory, PlaceItem *newItem) {
        if ([newItem.uuid isEqualToString:itemUUID]) {
            weakSelf.item = newItem;
        }
    });
    [self updateDetails];
}

- (void)onCategoriesLoading:(BOOL)loading {}

- (void)onCategoriesNewDataAvailable {}

- (void)onMapButtonPress:(id)sender {
    MapItem *mapItem = [[MapItem alloc] init];
    mapItem.title = self.item.title;
    mapItem.uuid = self.item.uuid;
    mapItem.correspondingPlaceItem = self.item;
    mapItem.coords = self.item.coords;
    MapViewController *mapViewController = [[MapViewController alloc] initWithMapModel:self.mapModel locationModel:self.locationModel indexModel:self.indexModel searchModel:self.searchModel apiService:self.apiService coreDataService:self.coreDataService mapItem:mapItem];
    [self.navigationController pushViewController:mapViewController animated:YES]; 
}

- (void)onLocationButtonPress:(id)sender {
    UIPasteboard *pasteboard = [UIPasteboard generalPasteboard];
    pasteboard.string = [NSString stringWithFormat:@"%f,%f", self.item.coords.latitude, self.item.coords.longitude];
    
    [self cancelBanner];
    
    __weak typeof(self) weakSelf = self;
    self.bannerShowAnimator = [[UIViewPropertyAnimator alloc] initWithDuration:0.4 curve:UIViewAnimationCurveEaseIn animations:^{
        weakSelf.copiedBannerViewTopConstraint.constant = 0;
        [weakSelf.view layoutIfNeeded];
    }];
    [self.bannerShowAnimator startAnimation];
    self.bannerHideTimer =
    [NSTimer scheduledTimerWithTimeInterval:5.4
                                     target:self
                                   selector:@selector(onBannerTimerFire:)
                                   userInfo:nil
                                    repeats:NO];
}

- (void)cancelBanner {
    [self.bannerShowAnimator stopAnimation:YES];
    self.bannerShowAnimator = nil;
    //[self.bannerHideAnimator stopAnimation:YES];
    //self.bannerHideAnimator = nil;
    [self.bannerHideTimer invalidate];
    self.bannerHideTimer = nil;
    self.copiedBannerViewTopConstraint.constant = -44.0;
    [self.view layoutIfNeeded];
}

- (void)onBannerTimerFire:(id)sender {
    NSLog(@"Timer fired.");
    [self.bannerHideTimer invalidate];
    self.bannerHideTimer = nil;
    //self.copiedBannerViewTopConstraint.constant = -44.0;
    [self.view layoutIfNeeded];
    
    __weak typeof(self) weakSelf = self;
    self.bannerHideAnimator = [[UIViewPropertyAnimator alloc] initWithDuration:0.4 curve:UIViewAnimationCurveEaseIn animations:^{
        weakSelf.copiedBannerViewTopConstraint.constant = -56.0;
        [weakSelf.view layoutIfNeeded];
    }];
    [self.bannerHideAnimator startAnimation];
}

- (void)onBookmarkButtonPress:(id)sender {
    [self.indexModel bookmarkItem:self.item bookmark:!self.item.bookmarked];
}

#pragma mark - Resize
- (void)viewWillTransitionToSize:(CGSize)size withTransitionCoordinator:(id<UIViewControllerTransitionCoordinator>)coordinator {
    [self.imageGalleryView setNeedsLayout];
    [self.imageGalleryView layoutIfNeeded];
    [self.imageGalleryView.collectionView reloadData];
    CGPoint pointToScrollTo = CGPointMake(self.imageGalleryView.indexOfScrolledItem * size.width, 0);
    [self.imageGalleryView.collectionView setContentOffset:pointToScrollTo animated:YES];
    [self.imageGalleryView toggleSkipAnimation]; 
//    if (!CGSizeEqualToSize(self.screenSize, size)) {
//        self.screenSize = size;
//        self.resized = YES;
//    }
    
}

//- (void)viewDidLayoutSubviews {
//    [super viewDidLayoutSubviews];
//    if (self.resized) {
//        [self.imageGalleryView setNeedsLayout];
//        [self.imageGalleryView layoutIfNeeded];
//        CGPoint pointToScrollTo = CGPointMake(self.imageGalleryView.indexOfScrolledItem * self.screenSize.width, 0);
//        [self.imageGalleryView.collectionView setContentOffset:pointToScrollTo];
//        self.resized = NO;
//    }
//}

@end
