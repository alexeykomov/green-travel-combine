//
//  NewDataButton.m
//  GreenTravel
//
//  Created by Alex K on 1/27/21.
//  Copyright © 2021 Alex K. All rights reserved.
//

#import "RefreshButton.h"
#import "Typography.h"
#import "Colors.h"

@interface RefreshButton()

@property (weak, nonatomic) UIView *anchorView;
@property (strong, nonatomic) id target;
@property (assign, nonatomic) SEL action;
@property (strong, nonatomic) UIButton *button;

@end

@implementation RefreshButton

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

- (instancetype)initWithTarget:(id)target action:(SEL)action
{
    self = [super init];
    if (self) {
        _target = target;
        _action = action;
        [self setUp];
    }
    return self;
}

- (void)setUp {
    self.backgroundColor = [Colors get].blue;
    self.translatesAutoresizingMaskIntoConstraints = NO;
    [self setAttributedTitle:[[Typography get] makeButtonText:@"Новые данные" color:[Colors get].white] forState:UIControlStateNormal];
    [self addTarget:self.target action:self.action forControlEvents:UIControlEventTouchUpInside];
    
    self.layer.cornerRadius = 20.0;
    self.backgroundColor = [Colors get].apple;
    
    [NSLayoutConstraint activateConstraints:@[
        [self.heightAnchor constraintEqualToConstant:40.0],
        [self.widthAnchor constraintGreaterThanOrEqualToConstant:150.0],
    ]];
}

@end
