import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import translations from '../../translations';
import SquareButton from '../SquareButton';
import sizes from '../../constans/sizes';

import { LocalePanelProps } from './types';
import { LocaleNames } from '../../translations/types';

const LocalePanel = ({ changeLocale, currentLocale }: LocalePanelProps) => {
  return (
    <View style={styles.container}>
      {Object.keys(translations).map((locale) => (
        <Fragment key={locale}>
          <SquareButton
            title={locale}
            onPress={() => changeLocale(locale as LocaleNames)}
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
