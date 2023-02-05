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

import {Login} from './src/pages/Login/Login';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {Home} from './src/pages/Home/Home';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
