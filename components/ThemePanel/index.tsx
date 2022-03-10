import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../Button';
import sizes from '../../constans/sizes';

import { ThemePanelType } from './types';
import { ThemeType } from '../../theme';

const themes = {
  dark: '🌕',
  light: '☀️',
};

const ThemePanel = ({ currentTheme, changeTheme }: ThemePanelType) => (
  <View style={styles.container}>
    {Object.keys(themes).map((theme) => (
      <Fragment key={theme}>
        <Button
          title={themes[theme as keyof typeof themes]}
          onPress={() => changeTheme(theme as ThemeType)}
          disabled={currentTheme === theme}
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
    width: sizes.gap,
  },
});

export default ThemePanel;
