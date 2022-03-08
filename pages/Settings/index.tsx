import React from 'react';
import { View, Text } from 'react-native';
import i18n from 'i18n-js';

import useTheme from '../../hooks/useTheme';
import LocalePanel from '../../components/LocalePanel';
import ThemePanel from '../../components/ThemePanel';

import styles from './styles';

const SettingsPage = ({ currentLocale, changeLocale }: any) => {
  const { theme, setTheme } = useTheme();

  return (
    <View style={styles[theme].container}>
      <View>
        <Text style={styles[theme].titleOption}>
          {i18n.t('settings.language')}
        </Text>
        <LocalePanel
          changeLocale={changeLocale}
          currentLocale={currentLocale}
        />
      </View>
      <View style={styles[theme].gap} />
      <View>
        <Text style={styles[theme].titleOption}>
          {i18n.t('settings.theme')}
        </Text>
        <ThemePanel currentTheme={theme} changeTheme={setTheme} />
      </View>
    </View>
  );
};

export default SettingsPage;
