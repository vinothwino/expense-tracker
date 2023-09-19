/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from './src/constants/colors';
import {API_URL, API_TOKEN} from '@env';

function App(): JSX.Element {
  const barStyle =
    useColorScheme() === 'dark' ? 'dark-content' : 'light-content';

  const MyTheme = {
    dark: false,
    colors: COLORS,
  };
  console.log(process.env, API_URL, 'env');
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle={barStyle} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
