import React, {Text, View} from 'react-native';
import {Link} from 'react-router-native';

const Login = () => {
  return (
    <View style={{paddingTop: 60, paddingLeft: 20}}>
      <Text>Workxxs!</Text>
      <Link to="/home">
        <Text>Home</Text>
      </Link>
    </View>
  );
};

export {Login};
