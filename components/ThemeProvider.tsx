import React, { useState } from 'react';
import { Appearance, StatusBar } from 'react-native';

const ThemeContext = React.createContext({
  theme: Appearance.getColorScheme(),
  setTheme: (theme) => {
    return 'ThemeProvider has not been initialized';
  },
});

const ThemeProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
