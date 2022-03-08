import React, { useContext } from 'react';

import { ThemeContext } from '../components/ThemeProvider';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
