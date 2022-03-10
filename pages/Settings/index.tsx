import React from 'react';
import { View, Text } from 'react-native';
import i18n from 'i18n-js';

import LocalePanel from '../../components/LocalPanel';
import ThemePanel from '../../components/ThemePanel';

import useStyles from './styles';

const SettingsPage = ({
  currentLocale,
  changeLocale,
  currentTheme,
  changeTheme,
}: any) => {
  const styles = useStyles();

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
