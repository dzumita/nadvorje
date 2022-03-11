import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import SquareButton from '../SquareButton';
import sizes from '../../constans/sizes';

const themes = {
  dark: '🌕',
  light: '☀️',
};

const ThemePanel = ({ currentTheme, changeTheme }: any) => (
  <View style={styles.container}>
    {Object.keys(themes).map((theme) => (
      <Fragment key={theme}>
        <SquareButton
          title={themes[theme as keyof typeof themes]}
          onPress={() => changeTheme(theme)}
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
