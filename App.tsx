import React from 'react';
import 'react-native-gesture-handler';
import { Text } from 'react-native';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import i18n from 'i18n-js';

import { NadvorjePage, SettingsPage } from './pages';
import { useTheme, useLocale } from './hooks';
import { ThemeColors } from './theme/types';

const { Screen, Navigator } = createDrawerNavigator();

const App = () => {
  const [theme, setTheme] = useTheme();
  const [locale, setLocale] = useLocale();

  const optionsStyles = getOptionsStyles(theme);

  return (
    <NavigationContainer theme={theme as unknown as Theme | undefined}>
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
              currentLocale={locale}
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

const getOptionsStyles = ({ colors }: { colors: ThemeColors }) => {
  return {
    drawerActiveTintColor: colors.fontPrimary,
    drawerActiveBackgroundColor: colors.bgSecondary,
    drawerInactiveTintColor: colors.fontSecondary,
    drawerInactiveBackgroundColor: 'transparent',
    drawerStyle: {
      backgroundColor: colors.bgPrimary,
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
