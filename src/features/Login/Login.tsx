import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Link} from 'react-router-native';
import {STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET} from '@env';
import {authorize, AuthorizeResult} from 'react-native-app-auth';

const config = {
  clientId: STRAVA_CLIENT_ID,
  clientSecret: STRAVA_CLIENT_SECRET,
  redirectUrl: 'com.msapprn://oauthredirect',
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.strava.com/oauth/mobile/authorize',
    tokenEndpoint: `https://www.strava.com/oauth/token?client_id=${STRAVA_CLIENT_ID}&client_secret=${STRAVA_CLIENT_SECRET}`,
  },
  scopes: ['activity:read_all'],
};

const Login = () => {
  const [authState, setAuthState] = useState<AuthorizeResult>();
  const handleOnLoginPress = async () => {
    // TODO: Debug authorize of null problem.
    try {
      console.log({config});
      console.log({authorize: authorize(config)});
      const authStateReturn = await authorize(config);
      setAuthState(authStateReturn);
    } catch (err) {
      console.error({errorMsg: err});
    }
  };
  return (
    <View>
      <Link to="/">
        <Text>Link to home</Text>
      </Link>

      <Text>Login</Text>
      <Text>Auth state: {JSON.stringify(authState)}</Text>
      <Button onPress={handleOnLoginPress} title="Login with Strava" />
    </View>
  );
};

export {Login};
