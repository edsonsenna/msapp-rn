import React, {Text, View} from 'react-native';
import {Link, useDeepLinking, useSearchParams} from 'react-router-native';

const Home = () => {
  useDeepLinking();

  const [searchParams] = useSearchParams();

  return (
    <View style={{paddingTop: 60, paddingLeft: 20}}>
      <Text>Home page</Text>
      <Text>{`Logged in: code ${searchParams?.get('code') || '-'}`}</Text>
      <Link to="/login">
        <Text>Go to login page</Text>
      </Link>
    </View>
  );
};

export {Home};
