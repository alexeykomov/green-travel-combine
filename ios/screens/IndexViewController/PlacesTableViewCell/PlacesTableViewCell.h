//
//  PlacesTableViewCell.h
//  GreenTravel
//
//  Created by Alex K on 8/16/20.
//  Copyright © 2020 Alex K. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@class Category;

@interface PlacesTableViewCell : UITableViewCell<UICollectionViewDelegateFlowLayout, UICollectionViewDataSource>

@property (strong, nonatomic) UICollectionView *collectionView;
- (void)update:(Category *)item; 

@end

NS_ASSUME_NONNULL_END
