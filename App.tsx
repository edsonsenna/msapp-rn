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
import {StyleSheet, View} from 'react-native';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {Home} from './src/features/Home/Home';
import {Login} from './src/features/Login/Login';

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 64,
  },
});

export default App;
