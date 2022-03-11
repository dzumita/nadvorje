import { useState } from 'react';
import { useColorScheme } from 'react-native';

import theme from '../theme';
import { UseThemeFunction } from './types';

const useTheme: UseThemeFunction = () => {
  const [currentTheme, setCurrentTheme] = useState(useColorScheme());

  return [theme[currentTheme ?? 'light'], setCurrentTheme];
};

export default useTheme;
