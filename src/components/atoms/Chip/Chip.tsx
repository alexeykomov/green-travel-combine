import {useThemeStyles} from 'core/hooks';
import React, {memo} from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  View,
  Text,
  Pressable,
} from 'react-native';

import {CHIP_THEMES} from './constants';
import {styles} from './styles';
import {composeTestID} from 'core/helpers';
import {Icon, IconsNames} from '../Icon';
import {crossHitClop} from '../HeaderSearchbar/styles';
type ItemProp<T> = T extends undefined ? {item?: never} : {item: T};

export type Props<T> = {
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  disabled?: boolean;
  checked?: boolean;
  active?: boolean;
  outlined?: boolean;
  leftIcon?: IconsNames;
  testID: string;
  isShowCloseIcon?: boolean;
  onClosePress?: () => void;
} & ItemProp<T> & {
    onPress?: T extends undefined ? () => void : (item: T) => void;
  };

export const ChipComponent = <T extends any = undefined>({
  onPress,
  onClosePress,
  text,
  leftIcon,
  disabled = false,
  checked = false,
  active = false,
  outlined = false,
  textStyle,
  testID,
  style,
  isShowCloseIcon,
  item,
}: Props<T>) => {
  const chipThemeStyles = useThemeStyles(CHIP_THEMES.default);

  const textThemeStyles = [
    chipThemeStyles.text,
    disabled && chipThemeStyles.disabledText,
    active && chipThemeStyles.activeText,
  ];

  const iconThemeStyles = [
    chipThemeStyles.icon,
    disabled && chipThemeStyles.disabledIcon,
    active && chipThemeStyles.activeIcon,
  ];

  const finalTextStyle = [styles.text, textThemeStyles, textStyle];

  const renderContent = () => {
    return (
      <View style={[styles.contentContainer]}>
        {leftIcon ? (
          <Icon
            style={[iconThemeStyles, styles.leftIcon]}
            name={leftIcon}
            testID={composeTestID(testID, 'leftIcon')}
            size={20}
          />
        ) : null}
        <Text testID={composeTestID(testID, 'text')} style={[finalTextStyle]}>
          {text}
        </Text>
        {isShowCloseIcon ? (
          <Pressable
            testID={composeTestID(testID, 'closeButton')}
            hitSlop={crossHitClop}
            style={styles.rightIcon}
            onPress={onClosePress}>
            <Icon
              style={iconThemeStyles}
              name={'clear'}
              testID={composeTestID(testID, 'closeIcon')}
              size={20}
            />
          </Pressable>
        ) : null}
      </View>
    );
  };

  const onPressHandler = () => {
    onPress?.(item);
  };

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      activeOpacity={0.9}
      disabled={!active && disabled}
      accessible={false}
      style={[
        styles.container,
        chipThemeStyles.container,
        disabled && chipThemeStyles.disabled,
        active && chipThemeStyles.active,
        outlined && chipThemeStyles.outlinedBorder,
        style,
      ]}
      testID={testID}
      accessibilityState={{checked, disabled: !active && disabled}}>
      {renderContent()}
    </TouchableOpacity>
  );
};

export const Chip = memo(ChipComponent) as typeof ChipComponent;
