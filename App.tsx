import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import translations from './translations';
import NadvorjePage from './pages/Nadvorje';
import SettingsPage from './pages/Settings';
import { LocalePanelType } from './components/LocalePanel';
import useTheme from './hooks/useTheme';

const { Screen, Navigator } = createDrawerNavigator();

i18n.translations = translations;
i18n.fallbacks = true;

const App = () => {
  const [theme, setTheme] = useTheme();
  const [locale, setLocale] = useState(Localization.locale);
  i18n.locale = locale;
  const changeLocale = (newLocale: string) => setLocale(newLocale);

  const optionsStyles = getOptionsStyles(theme);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
      <Navigator screenOptions={optionsStyles as DrawerNavigationOptions}>
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
              changeLocale={changeLocale}
              currentTheme={theme.name}
              changeTheme={setTheme}
            />
          )}
        </Screen>
      </Navigator>
    </NavigationContainer>
  );
};

const getOptionsStyles = ({ colors }: any) => {
  return {
    drawerItemStyle: {
      color: colors.white,
    },
    drawerActiveTintColor: colors.fontPrimary,
    drawerActiveBackgroundColor: 'transparent',
    drawerInactiveTintColor: colors.fontSecondary,
    drawerInactiveBackgroundColor: 'transparent',
    drawerStyle: {
      backgroundColor: colors.bgSecondary,
    },
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: colors.bgSecondary,
    },
    headerTitleStyle: {
      color: colors.fontPrimary,
    },
    headerTintColor: colors.fontPrimary,
  };
};

export default App;
