const fetchLocationId = async (city: string) => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${city}`,
    { mode: 'no-cors' }
  );
  const locations = await response.json();

  return locations[0].woeid;
};

const fetchWeather = async (woeid: string) => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/${woeid}/`,
    { mode: 'no-cors' }
  );
  const { title, consolidated_weather } = await response.json();
  const { the_temp, weather_state_abbr } = consolidated_weather[0];

  return {
    location: title,
    temperature: the_temp,
    weatherAbbr: weather_state_abbr
  };
};

export { fetchLocationId, fetchWeather }