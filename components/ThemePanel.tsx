import React, { Fragment } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const themes = {
  dark: '🌕',
  light: '☀️',
};

const ThemePanel = ({ currentTheme, changeTheme }: any) => (
  <View style={styles.container}>
    {Object.keys(themes).map((theme) => {
      return (
        <Fragment key={theme}>
          <Button
            title={themes[theme as keyof typeof themes]}
            color="#666"
            onPress={() => changeTheme(theme)}
            disabled={currentTheme === theme}
          />
          <View style={styles.gap} />
        </Fragment>
      );
    })}
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

export default ThemePanel;
