    "@react-navigation/drawer": "^6.6.2",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "react-native-gesture-handler": "^2.9.0",
    "react-native-reanimated": "^3.3.0",
    "react-native-safe-area-context": "^4.5.0",
    "react-native-screens": "^3.20.0",




# babel.config.js
    module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel', 
#      'react-native-reanimated/plugin'] // eslint-disable-line global-require,
  };
};