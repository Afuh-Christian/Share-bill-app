module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel', 
      'react-native-reanimated/plugin'] // eslint-disable-line global-require,
  };
};