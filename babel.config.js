module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@pages': './pages',
            '@components': './components',
            '@hooks': './hooks',
            '@theme': './theme',
            '@translations': './translations',
            '@constants': './constants',
            '@helpers': './helpers',
          },
        },
      ],
    ],
  };
};
