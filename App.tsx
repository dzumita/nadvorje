import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import i18n from 'i18n-js';

import NadvorjePage from './pages/Nadvorje';
import SettingsPage from './pages/Settings';
import { LocalePanelType } from './components/LocalPanel/types';
import useTheme from './hooks/useTheme';
import useLocale from './hooks/useLocale';

const { Screen, Navigator } = createDrawerNavigator();

const App = () => {
  const [theme, setTheme] = useTheme();
  const [locale, setLocale] = useLocale();

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
              changeLocale={setLocale}
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
