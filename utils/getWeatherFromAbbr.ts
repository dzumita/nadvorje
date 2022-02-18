const weatherNameCollection = {
  sn: '🌨️ Snow 🌨️',
  sl: '🌧️ Sleet 🌧️',
  h: '🌧️ Hail 🌧️',
  t: '🌩️ Thunderstorm 🌩️',
  hr: '🌧️ Heavy Rain 🌧️',
  lr: '🌧️ Light Rain 🌧️',
  s: '🌧️ Showers 🌧️',
  hc: '☁️ Heavy Cloud ☁️',
  lc: '🌤️ Light Cloud 🌤️',
  c: '☀️ Clear ☀️',
};

type weatherAbbrType = keyof typeof weatherNameCollection;

const getWeatherFromAbbr = (weatherAbbr: weatherAbbrType) =>
  weatherNameCollection[weatherAbbr];

export default getWeatherFromAbbr;
