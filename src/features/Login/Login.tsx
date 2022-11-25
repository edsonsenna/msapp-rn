import {Text, View} from 'react-native';
import React from 'react';
import {Link} from 'react-router-native';

const Login = () => {
  return (
    <View>
      <Link to="/">
        <Text>Link to home</Text>
      </Link>

      <Text>Login</Text>
    </View>
  );
};

export {Login};
