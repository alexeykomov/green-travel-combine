//
//  SlideCollectionViewCell.m
//  GreenTravel
//
//  Created by Alex K on 11/21/20.
//  Copyright © 2020 Alex K. All rights reserved.
//

#import "SlideCollectionViewCell.h"
#import "ImageUtils.h"
#import "ColorsLegacy.h"
#import "GalleryImagePlaceholder.h"

@interface SlideCollectionViewCell ()

@property (strong, nonatomic) SDWebImageCombinedOperation *loadImageOperation;
@property (strong, nonatomic) GalleryImagePlaceholder *placeHolderView;
@property (strong, nonatomic) UIActivityIndicatorView *activityIndicatorView;

@end

@implementation SlideCollectionViewCell

- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
    }
    return self;
}

- (void)setUpWithImageURL:(NSString *)imageURL {
    __weak typeof(self) weakSelf = self;
    [self addActivityIndicatorSubview];
    self.loadImageOperation = loadImage(imageURL, ^(UIImage *image, NSError *error) {
        __strong typeof(self) strongSelf = weakSelf;
        if (error || image == nil) {
            [strongSelf.activityIndicatorView removeFromSuperview];
            [strongSelf addPlaceholderSubview];
            return;
        }
        [strongSelf.imageView setImage:image];
        [strongSelf.activityIndicatorView removeFromSuperview];
    });
}

- (void)prepareForReuse {
    [super prepareForReuse];
    [self.loadImageOperation cancel];
    [self.imageView setImage:nil];
    [self addActivityIndicatorSubview];
    [self.placeHolderView removeFromSuperview];
}

- (void)addPlaceholderSubview {
    if (!self.placeHolderView) {
        self.placeHolderView = [[GalleryImagePlaceholder alloc] init];
    }
    if (![self.subviews containsObject:self.placeHolderView] ) {
        [self addSubview:self.placeHolderView];
        self.placeHolderView.translatesAutoresizingMaskIntoConstraints = NO;
        [NSLayoutConstraint activateConstraints:@[
            [self.placeHolderView.topAnchor constraintEqualToAnchor:self.topAnchor],
            [self.placeHolderView.leadingAnchor constraintEqualToAnchor:self.leadingAnchor],
            [self.placeHolderView.trailingAnchor constraintEqualToAnchor:self.trailingAnchor],
            [self.placeHolderView.bottomAnchor constraintEqualToAnchor:self.bottomAnchor],
        ]];
    }
}

- (void)addActivityIndicatorSubview {
    if (!self.activityIndicatorView) {
        self.activityIndicatorView = [[UIActivityIndicatorView alloc] init];
    }
    if (![self.subviews containsObject:self.activityIndicatorView] ) {
        [self addSubview:self.activityIndicatorView];
        self.activityIndicatorView.translatesAutoresizingMaskIntoConstraints = NO;
        [NSLayoutConstraint activateConstraints:@[
            [self.activityIndicatorView.centerXAnchor constraintEqualToAnchor:self.centerXAnchor],
            [self.activityIndicatorView.centerYAnchor constraintEqualToAnchor:self.centerYAnchor],
        ]];
    }
    [self.activityIndicatorView startAnimating];
}

@end
