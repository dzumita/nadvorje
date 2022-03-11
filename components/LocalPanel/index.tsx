import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import translations from '../../translations';
import SquareButton from '../SquareButton';
import sizes from '../../constans/sizes';

import { LocalePanelType } from './types';

const LocalePanel = ({ changeLocale, currentLocale }: LocalePanelType) => {
  return (
    <View style={styles.container}>
      {Object.keys(translations).map((locale) => (
        <Fragment key={locale}>
          <SquareButton
            title={locale}
            onPress={() => changeLocale(locale)}
            disabled={currentLocale.slice(0, 2) === locale}
          />
          <View style={styles.gap} />
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  gap: {
    width: sizes.gap,
  },
});

export default LocalePanel;
