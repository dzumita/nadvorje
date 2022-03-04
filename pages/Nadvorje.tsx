import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
  ActivityIndicator,
} from 'react-native';
import i18n from 'i18n-js';

import SearchInput from '../components/SearchInput';
import { fetchLocationId, fetchWeather } from '../utils/api';

const NadvorjePage = () => {
  const [location, setLocation] = useState('Minsk');
  const [weatherAbbr, setWeatherAbbr] = useState('sn');
  const [temperature, setTemperature] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

export default NadvorjePage;
