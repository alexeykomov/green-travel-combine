import React, {memo, forwardRef, useMemo} from 'react';
import {View, Text} from 'react-native';

import {themeStyles} from './styles';
import {SnackBarContainer, SnackBarContainerRef} from './SnackBarContainer';

import {useThemeStyles} from 'core/hooks';
import {Button, Icon} from 'atoms';
import {isEqual} from 'lodash';

export interface SnackBarProps {
  isOnTop?: boolean;
  title?: string;
  type?: 'success' | 'error' | 'neutral';
  timeoutMs?: number;
  offset?: number;
  withCloseButton?: boolean;
  hide?: () => void;
}

export const SnackBar = memo(
  forwardRef<SnackBarContainerRef, SnackBarProps>(
    (
      {
        title = '',
        isOnTop = false,
        type = 'error',
        timeoutMs,
        offset,
        withCloseButton = false,
        hide,
      },
      ref,
    ) => {
      const styles = useThemeStyles(themeStyles);

      const typeSpecificStyles = useMemo(() => {
        return {
          container: styles[`${type}Container`],
          text: styles[`${type}Text`],
        };
      }, [styles, type]);

      return (
        <SnackBarContainer
          offset={offset}
          isOnTop={isOnTop}
          ref={ref}
          timeoutMs={timeoutMs}>
          <View style={[styles.container, typeSpecificStyles.container]}>
            <Text
              style={[
                styles.text,
                isEqual(type, 'neutral') && styles.neutralText,
              ]}>
              {title}
            </Text>
            {withCloseButton ? (
              <Button
                style={styles.icon}
                onPress={hide}
                isIconOnlyButton
                icon={() => (
                  <Icon name={'close'} size={24} style={styles.closeIcon} />
                )}
              />
            ) : null}
          </View>
        </SnackBarContainer>
      );
    },
  ),
);
