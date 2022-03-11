import React, { Fragment } from 'react';
import { View } from 'react-native';

import SquareButton from '@components/SquareButton';
import { ThemeNames } from '@theme/types';

import useThemePanelStyles from './styles';
import { ThemePanelProps } from './types';

const themes = {
  dark: '🌕',
  light: '☀️',
};

const ThemePanel = ({ currentTheme, changeTheme }: ThemePanelProps) => {
  const styles = useThemePanelStyles();

  return (
    <View style={styles.container}>
      {Object.keys(themes).map((theme) => (
        <Fragment key={theme}>
          <SquareButton
            title={themes[theme as keyof typeof themes]}
            onPress={() => changeTheme(theme as ThemeNames)}
            disabled={currentTheme === theme}
          />
          <View style={styles.gap} />
        </Fragment>
      ))}
    </View>
  );
};
export default ThemePanel;
