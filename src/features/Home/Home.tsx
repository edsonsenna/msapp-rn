import {Text, View} from 'react-native';
import React from 'react';
import {Link} from 'react-router-native';

const Home = () => {
  return (
    <View>
      <Link to="/login">
        <Text>Link to login</Text>
      </Link>

      <Text>Home</Text>
    </View>
  );
};

export {Home};
