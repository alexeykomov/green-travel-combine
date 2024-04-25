import React, {ComponentProps, memo, useState} from 'react';
import {themeStyles} from './styles';
import {useThemeStyles, useTranslation} from 'core/hooks';
import {View} from 'react-native';
import {IconsNames} from 'atoms/Icon';
import {ListItem} from 'molecules';
import {StyleProp, ViewStyle} from 'react-native';

export type Item = {
  title?: string;
  subtitle?: string;
  onSubtitlePress?: () => void;
  testID: string;
  icon: IconsNames;
  titleNumberOfLines?: number;
  withDropdown?: boolean;
  onPress?: () => void;
  contentStylingType?: 'primary' | 'secondary';
  isTitleBold?: boolean;
  boldTitle?: boolean;
  label?: string;
  isAlwaysTrunctated?: boolean;
  onRightLabelPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
};

interface IProps {
  items: Item[];
  priorityPosition?: ComponentProps<typeof ListItem>['position'];
  containerListStyle?: StyleProp<ViewStyle>;
}

export const ObjectInfoSection = memo(
  ({items, priorityPosition, containerListStyle}: IProps) => {
    const styles = useThemeStyles(themeStyles);
    const {t} = useTranslation('objectDetails');
    const [isTitleTrunctated, setIsTitleTruncated] = useState(false);

    const renderSectionItem = (item: Item, index: number) => {
      const {
        title = '',
        subtitle = '',
        onSubtitlePress,
        icon,
        testID,
        titleNumberOfLines,
        withDropdown,
        onPress,
        contentStylingType = 'secondary',
        boldTitle,
        label = t('details'),
        isAlwaysTrunctated,
        onRightLabelPress,
        containerStyle,
        titleContainerStyle,
      } = item;

      const isNeedToTruncate = isTitleTrunctated || isAlwaysTrunctated;

      let position: ComponentProps<typeof ListItem>['position'] = 'single';

      if (items.length - 1 !== 0 && !priorityPosition) {
        if (index === 0) {
          position = 'top';
        } else if (index === items.length - 1) {
          position = 'bottom';
        } else {
          position = 'middle';
        }
      } else if (priorityPosition) {
        if (index === items.length - 1) {
          position = 'bottom';
        } else {
          position = priorityPosition;
        }
      }

      return (
        <ListItem
          containerStyle={[styles.listItemContainer, containerStyle]}
          contentStylingType={contentStylingType}
          title={title}
          subtitle={subtitle}
          onSubtitlePress={onSubtitlePress}
          onRightLabelPress={onRightLabelPress}
          leadIcon={icon}
          position={position}
          leadIconStyle={styles.listItemIcon}
          titleContainerStyle={titleContainerStyle}
          testID={testID}
          titleNumberOfLines={titleNumberOfLines}
          tailIconStyle={withDropdown ? styles.dropdownTextStyle : undefined}
          labelStyle={withDropdown ? styles.dropdownTextStyle : undefined}
          tailIcon={
            withDropdown && isNeedToTruncate ? 'chevronShortDown' : undefined
          }
          label={withDropdown && isNeedToTruncate ? label : undefined}
          onPress={
            withDropdown ? (isNeedToTruncate ? onPress : undefined) : onPress
          }
          boldTitle={boldTitle}
          onTitleTruncate={withDropdown ? setIsTitleTruncated : undefined}
        />
      );
    };

    return (
      <View style={[styles.container, containerListStyle]}>
        {items.map(renderSectionItem)}
      </View>
    );
  },
);
