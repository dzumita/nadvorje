import { useState } from 'react';
import { useColorScheme } from 'react-native';

import theme from '../theme';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(useColorScheme());

  return [theme[currentTheme], setCurrentTheme];
};

export default useTheme;
