import React, { Fragment } from 'react';
import { View } from 'react-native';

import translations from '@translations';
import SquareButton from '@components/SquareButton';
import { LocaleNames } from '@translations/types';

import useLocalPanelStyles from './styles';
import { LocalePanelProps } from './types';

const LocalePanel = ({ changeLocale, currentLocale }: LocalePanelProps) => {
  const styles = useLocalPanelStyles()

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

export default LocalePanel;
