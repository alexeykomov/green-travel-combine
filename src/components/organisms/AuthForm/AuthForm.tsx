import React, {memo, PropsWithChildren} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {Button} from 'atoms';
import {useThemeStyles} from 'core/hooks';
import {getPlatformsTestID} from 'core/helpers';
import {TestIDs} from 'core/types';

import {themeStyles} from './styles';

interface IProps {
  title: string;
  text?: string;
  isSubmitButtonDisabled: boolean;
  onSubmitPress: () => void;
  submitButtonText: string;
  submitButtonLoading?: boolean;
  onSecondaryButtonPress?: () => void;
  secondaryButtonText?: string;
  secondaryButtonLoading?: boolean;
}

export const AuthForm = memo(
  ({
    title,
    text,
    isSubmitButtonDisabled,
    onSubmitPress,
    submitButtonText,
    onSecondaryButtonPress,
    secondaryButtonText,
    children,
    submitButtonLoading,
    secondaryButtonLoading,
  }: PropsWithChildren<IProps>) => {
    const styles = useThemeStyles(themeStyles);

    return (
      <View
        onStartShouldSetResponder={() => {
          Keyboard.dismiss();
          return false;
        }}
        style={styles.container}>
        <Text style={text ? styles.title : styles.titleSingle}>{title}</Text>
        {text ? <Text style={styles.text}>{text}</Text> : null}
        <View style={styles.formFieldsContainer}>{children}</View>
        <Button
          {...getPlatformsTestID(TestIDs.SendButton)}
          loading={submitButtonLoading}
          disabled={isSubmitButtonDisabled}
          onPress={onSubmitPress}
          text={submitButtonText}
        />
        {secondaryButtonText ? (
          <Button
            {...getPlatformsTestID(TestIDs.SendButton)}
            loading={secondaryButtonLoading}
            disabled={secondaryButtonLoading}
            onPress={onSecondaryButtonPress}
            text={secondaryButtonText}
            style={styles.secondaryButton}
            theme="tertiary"
          />
        ) : null}
      </View>
    );
  },
);
