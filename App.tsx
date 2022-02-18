import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
  ActivityIndicator,
} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import SearchInput from './components/SearchInput';
import LocalePanel from './components/LocalePanel';
import { fetchLocationId, fetchWeather } from './utils/api';
import translations from './translations';

i18n.translations = translations;
i18n.fallbacks = true;

const App = () => {
  const [locale, setLocale] = useState(Localization.locale);
  const [location, setLocation] = useState('Minsk');
  const [weatherAbbr, setWeatherAbbr] = useState('sn');
  const [temperature, setTemperature] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  i18n.locale = locale;

  const changeLocale = (newLocale: string) => setLocale(newLocale);

  const handleUpdateLocation = async (city: string) => {
    if (!city) return;

    setLoading(true);
    try {
      const locationId = await fetchLocationId(city);
      const { location, temperature, weatherAbbr } = await fetchWeather(
        locationId
      );

      setLocation(location);
      setWeatherAbbr(weatherAbbr);
      setTemperature(temperature);

      setError(false);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <StatusBar style="light" />
      <ActivityIndicator animating={loading} color="white" size="large" />
      {!loading && (
        <View>
          {error && (
            <Text style={[styles.smallText, styles.textStyle]}>
              {i18n.t('error')}
            </Text>
          )}

          {!error && (
            <View>
              <Text style={[styles.largeText, styles.textStyle]}>
                {location}
              </Text>
              <Text style={[styles.smallText, styles.textStyle]}>
                {i18n.t(`weather.${weatherAbbr}`)}
              </Text>
              <Text style={[styles.largeText, styles.textStyle]}>
                {`${Math.round(temperature)}°`}
              </Text>
            </View>
          )}
          <SearchInput
            placeholder={i18n.t('searchPlaceholder')}
            onSubmit={handleUpdateLocation}
          />
        </View>
      )}
      <LocalePanel
        changeLocale={changeLocale}
        currentLocale={locale as keyof typeof translations}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212122',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});

export default App;
