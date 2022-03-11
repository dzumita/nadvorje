import React from 'react';
import { View, Text } from 'react-native';
import i18n from 'i18n-js';

import LocalePanel from '@components/LocalPanel';
import ThemePanel from '@components/ThemePanel';

import useSettingsPageStyles from './styles';
import { SettingsPageProps } from './types';

const SettingsPage = ({
  currentLocale,
  changeLocale,
  currentTheme,
  changeTheme,
}: SettingsPageProps) => {
  const styles = useSettingsPageStyles();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleOption}>{i18n.t('settings.language')}</Text>
        <LocalePanel
          changeLocale={changeLocale}
          currentLocale={currentLocale}
        />
      </View>
      <View style={styles.gap} />
      <View>
        <Text style={styles.titleOption}>{i18n.t('settings.theme')}</Text>
        <ThemePanel currentTheme={currentTheme} changeTheme={changeTheme} />
      </View>
    </View>
  );
};

export default SettingsPage;
