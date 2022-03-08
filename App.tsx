import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { Text } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import translations from './translations';
import NadvorjePage from './pages/Nadvorje';
import SettingsPage from './pages/Settings';
import { LocalePanelType } from './components/LocalePanel';
import colors from './constans/colors';
import useTheme from './hooks/useTheme';
import { ThemeProvider } from './components/ThemeProvider';

const { Screen, Navigator } = createDrawerNavigator();

i18n.translations = translations;
i18n.fallbacks = true;

const App = () => {
  const { theme } = useTheme();
  const [locale, setLocale] = useState(Localization.locale);

  i18n.locale = locale;

  console.log('app: ', theme);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={screenStyles[theme] as DrawerNavigationOptions}
        >
          <Screen
            name="Weather"
            options={{
              title: i18n.t('navigator.weather'),
              drawerIcon: () => <Text>☁️</Text>,
            }}
          >
            {() => <NadvorjePage />}
          </Screen>
          <Screen
            name="Settings"
            options={{
              title: i18n.t('navigator.settings'),
              drawerIcon: () => <Text>⚙️</Text>,
            }}
          >
            {() => (
              <SettingsPage
                currentLocale={locale as LocalePanelType['currentLocale']}
                changeLocale={setLocale}
              />
            )}
          </Screen>
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const screenStyles = {
  dark: {
    drawerItemStyle: {
      color: colors.white,
    },
    drawerActiveTintColor: colors.white,
    drawerActiveBackgroundColor: 'transparent',
    drawerInactiveTintColor: colors.whiteOpacity,
    drawerInactiveBackgroundColor: 'transparent',
    drawerStyle: {
      backgroundColor: colors.lightDark,
    },
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: colors.lightDark,
    },
    headerTitleStyle: {
      color: colors.white,
    },
    headerTintColor: colors.white,
  },

  light: {
    drawerItemStyle: {
      color: colors.dark,
    },
    drawerActiveTintColor: colors.dark,
    drawerActiveBackgroundColor: 'transparent',
    drawerInactiveTintColor: colors.dark,
    drawerInactiveBackgroundColor: 'transparent',
    drawerStyle: {
      backgroundColor: colors.white,
    },
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: colors.white,
    },
    headerTitleStyle: {
      color: colors.dark,
    },
    headerTintColor: colors.dark,
  },
};

export default App;
