import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import i18n from 'i18n-js';

import LocalePanel, { LocalePanelType } from '../components/LocalePanel';
import ThemePanel from '../components/ThemePanel';

const SettingsPage = ({
  currentLocale,
  changeLocale,
  currentTheme,
  changeTheme,
}: any) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#212122',
    paddingTop: 30,
    paddingLeft: 30,
  },
  titleOption: {
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  gap: {
    height: 30,
  },
});

export default SettingsPage;
