import {MSAPP_WEB_URL, STRAVA_AUTH_URL, STRAVA_CLIENT_ID} from '@env';
import React, {Button, Linking, Text, View} from 'react-native';
import {Link} from 'react-router-native';

const Login = () => {
  const handleOnLoginClick = async () => {
    try {
      // TODO: Check installed Strava App behavior
      // const canOpenStravaApp = await Linking.canOpenURL(
      //   'strava://oauth/mobile/authorize',
      // );
      // if (canOpenStravaApp) {
      //   Linking.openURL('strava://oauth/mobile/authorize');
      //   return;
      // }

      return Linking.openURL(
        `${STRAVA_AUTH_URL}?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${MSAPP_WEB_URL}&approval_prompt=force&scope=profile:read_all,activity:read_all`,
      );
    } catch (err) {
      console.log('Error on click', {err});
    }
  };

  return (
    <View style={{paddingTop: 60, paddingLeft: 20}}>
      <Link to="/home">
        <Text>Login Page</Text>
      </Link>
      <Button title="Login with Strava" onPress={handleOnLoginClick} />
    </View>
  );
};

export {Login};
