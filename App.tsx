/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {STRAVA_API_URL} from '@env';
import {Login} from './src/pages/Login/Login';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {Home} from './src/pages/Home/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const idFromEnv = STRAVA_API_URL || 'failed';

  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
