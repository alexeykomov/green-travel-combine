import {useThemeStyles, useTranslation} from 'core/hooks';
import React, {useCallback, memo, useState, useMemo} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {themeStyles} from './styles';
import {FormInput} from 'atoms';
import {IconProps} from 'components/atoms/Icon';

type RightButtonType = 'reset' | 'filter';
interface Props {
  onChange: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  value: string;
  testID: string;
  onRightButtonPress?: (actionType: RightButtonType) => void;
  filterActionTypeEnabled?: boolean;
}

export const SearchField = memo(
  ({
    onChange,
    value,
    testID,
    onRightButtonPress,
    filterActionTypeEnabled = false,
    containerStyle,
  }: Props) => {
    const [isFocused, setIsFocused] = useState(false);
    const styles = useThemeStyles(themeStyles);
    const {t} = useTranslation('filters');

    const rightButtonActiveType: RightButtonType | null = (() => {
      if (filterActionTypeEnabled) {
        if (isFocused) {
          return value ? 'reset' : 'filter';
        }
        return 'filter';
      }

      return value ? 'reset' : null;
    })();

    const onRightButtonPressHandler = useCallback(() => {
      if (rightButtonActiveType) {
        onRightButtonPress?.(rightButtonActiveType);
      }
    }, [onRightButtonPress, rightButtonActiveType]);

    const iconRight = useMemo(() => {
      if (rightButtonActiveType === 'reset') {
        return {name: 'close', style: styles.icon} as Omit<IconProps, 'testID'>;
      }

      if (rightButtonActiveType === 'filter') {
        return {name: 'more', style: styles.icon} as Omit<IconProps, 'testID'>;
      }

      return undefined;
    }, [rightButtonActiveType, styles]);

    return (
      <FormInput
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        iconLeft={{name: 'search'}}
        iconRight={iconRight}
        placeholder={t('settlements.search')}
        value={value}
        onChange={onChange}
        outlineEnabled={false}
        containerStyle={[styles.container, containerStyle]}
        onRightIconPress={onRightButtonPressHandler}
        testID={testID}
      />
    );
  },
);
