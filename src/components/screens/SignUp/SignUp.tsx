import React from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from './styles';
import {useTranslation} from 'core/hooks';
import {AuthForm} from 'atoms';
import {AuthSocial} from 'molecules';

export const SignUp = () => {
  const {t} = useTranslation('authentification');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <View style={styles.tab}>
            <Text style={styles.tabText}>{t('enterTab')}</Text>
          </View>
          <View style={styles.activeTab}>
            <Text style={styles.activeTabText}>{t('signUpTab')}</Text>
          </View>
        </View>

        <View style={styles.authContainer}>
          <Text style={styles.title}>{t('authTitle')}</Text>
          <AuthForm />
          <View style={styles.textContainer}>
            <View style={styles.lineAround} />
            <Text style={styles.text}>{t('enterWith')}</Text>
            <View style={styles.lineAround} />
          </View>
          <AuthSocial size={48} />
          <Text style={styles.warning}>{t('registrationWarning')}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
