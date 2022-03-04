import React, { Fragment } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import translations from '../translations';

export type LocalePanelType = {
  changeLocale: (locale: string) => void;
  currentLocale: keyof typeof translations;
};

const LocalePanel = ({ changeLocale, currentLocale }: LocalePanelType) => (
  <View style={styles.container}>
    {Object.keys(translations).map((locale) => (
      <Fragment key={locale}>
        <Button
          title={locale}
          color="#666"
          onPress={() => changeLocale(locale)}
          disabled={currentLocale.slice(0, 2) === locale}
        />
        <View style={styles.gap} />
      </Fragment>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  gap: {
    width: 10,
  },
});

export default LocalePanel;
