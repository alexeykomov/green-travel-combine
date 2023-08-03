import React from 'react';
import {Text, View} from 'react-native';
import {GeneralListItem} from 'molecules';
import {Icon, SettingsSectionTitle, SnackBar} from 'atoms';
import {useProfile} from './hooks';
import {useTranslation} from 'react-i18next';
import {useThemeStyles} from 'core/hooks';
import {themeStyles} from './styles';
import {getAppVersion} from 'core/helpers';

export const Profile = () => {
  const {t} = useTranslation('profile');
  const {t: tCommon} = useTranslation('common');

  const {appVersionWithBuildNumber} = getAppVersion();

  const styles = useThemeStyles(themeStyles);
  const {
    isAuthorized,
    language,
    theme,
    onAuthorisationItemPress,
    navigateToProfileSettingsLanguage,
    navigateToProfileSettingsTheme,
    loading,
    onClearCachePress,
    snackBarProps,
    navigateToPrivacyPolicy,
    navigateToTermsAndConditions,
  } = useProfile();

  return (
    <View style={styles.container}>
      <View style={styles.authItemContainer}>
        <GeneralListItem
          size="M"
          onPress={onAuthorisationItemPress}
          title={
            isAuthorized ? t('authorized.title') : t('notAuthorrized.title')
          }
          subtitle={
            isAuthorized
              ? t('authorized.subtitle')
              : t('notAuthorrized.subtitle')
          }
          withChevron
          loading={loading}
        />
      </View>

      <View style={styles.settingsItemContainer}>
        <SettingsSectionTitle text={t('settings')} />
        <GeneralListItem
          position="top"
          onPress={navigateToProfileSettingsLanguage}
          title={t('language')}
          renderLeftElement={
            <Icon style={styles.icon} name="language" size={30} />
          }
          renderRightElement={<Text style={styles.rightText}>{language}</Text>}
          withChevron
        />
        <GeneralListItem
          position="middle"
          onPress={navigateToProfileSettingsTheme}
          title={t('theme')}
          renderLeftElement={
            <Icon style={styles.icon} name="theme" size={30} />
          }
          renderRightElement={<Text style={styles.rightText}>{theme}</Text>}
          withChevron
        />
        <GeneralListItem
          position="bottom"
          onPress={onClearCachePress}
          title={t('clearCache')}
          renderLeftElement={
            <Icon style={styles.icon} name="clearCache" size={30} />
          }
        />
      </View>

      <SettingsSectionTitle text={t('info')} />
      <GeneralListItem
        position="top"
        onPress={navigateToPrivacyPolicy}
        title={tCommon('privacyPolicy')}
        withChevron
      />
      <GeneralListItem
        position="bottom"
        onPress={navigateToTermsAndConditions}
        title={tCommon('termsAndConditions')}
        withChevron
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{tCommon('appVersion')}</Text>
        <View style={styles.withBorder}>
          <Text style={styles.text}>{appVersionWithBuildNumber}</Text>
        </View>
      </View>

      <SnackBar {...snackBarProps} />
    </View>
  );
};
