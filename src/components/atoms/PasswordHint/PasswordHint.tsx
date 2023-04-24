import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {themeStyles} from './styles';
import {useThemeStyles, useTranslation} from 'core/hooks';
import {Icon} from '../Icon';
import {
  MIN_PASSWORD_LENGTH,
  LOWER_CASE_REGEX,
  UPPER_CASE_REGEX,
  SPECIAL_CHAR_REGEX,
  NUMBER_REGEX,
  NO_SPACES_REGEX,
} from 'core/validation';

interface IProps {
  passwordValue: string;
}

export const PasswordHint = memo(({passwordValue}: IProps) => {
  const styles = useThemeStyles(themeStyles);
  const {t} = useTranslation('authentification');
  const renderHint = (text: string, isCompleted: boolean) => {
    return (
      <View style={styles.rowContainer}>
        <Icon
          name={isCompleted ? 'check' : 'close'}
          size={15}
          style={isCompleted ? styles.successIcon : styles.icon}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.hintsContainer}>
        {renderHint(
          t('minPasswordChars', {amount: MIN_PASSWORD_LENGTH}),
          passwordValue.length >= MIN_PASSWORD_LENGTH,
        )}
        {renderHint(
          t('oneSpecialSymbol'),
          SPECIAL_CHAR_REGEX.test(passwordValue),
        )}
        {renderHint(t('oneNumber'), NUMBER_REGEX.test(passwordValue))}
        {renderHint(t('oneUpperChar'), UPPER_CASE_REGEX.test(passwordValue))}
        {renderHint(t('oneLowerCase'), LOWER_CASE_REGEX.test(passwordValue))}
        {renderHint(
          t('noSpaces'),
          NO_SPACES_REGEX.test(passwordValue) && Boolean(passwordValue.length),
        )}
      </View>
    </View>
  );
});
