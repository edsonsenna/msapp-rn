import React, {Text, View} from 'react-native';
import {Link} from 'react-router-native';

const Home = () => {
  return (
    <View style={{paddingTop: 60, paddingLeft: 20}}>
      <Text>Home</Text>
      <Link to="/home">
        <Text>Login</Text>
      </Link>
    </View>
  );
};

export {Home};
