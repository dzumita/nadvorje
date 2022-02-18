import React, { ReactElement, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
  ActivityIndicator,
} from 'react-native';

import SearchInput from './components/SearchInput';
import { fetchLocationId, fetchWeather } from './utils/api';
import getWeatherFromAbbr from './utils/getWeatherFromAbbr'

const App = () => {
  const [location, setLocation] = useState('Enter a city');
  const [weather, setWeather] = useState('❔ Unknown ❔');
  const [temperature, setTemperature] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUpdateLocation = async (city: string) => {
    if (!city) return;

    setLoading(true);
    try {
      const locationId = await fetchLocationId(city);
      const { location, temperature, weatherAbbr } = await fetchWeather(locationId);

      setLocation(location);
      setWeather(getWeatherFromAbbr(weatherAbbr));
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
              Could not load weather, please try a different city.
            </Text>
          )}

          {!error && (
            <View>
              <Text style={[styles.largeText, styles.textStyle]}>
                {location}
              </Text>
              <Text style={[styles.smallText, styles.textStyle]}>
                {weather}
              </Text>
              <Text style={[styles.largeText, styles.textStyle]}>
                {`${Math.round(temperature)}°`}
              </Text>
            </View>
          )}
          <SearchInput
            placeholder="Search any city"
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

export default App;
