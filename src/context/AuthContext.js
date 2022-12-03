import React, {createContext, Provider, useState} from 'react';
import * as Keychain from 'react-native-keychain';
//blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
// TODO: Study about deep links, to redirect back from Auth0

// Alternativly use this https://www.npmjs.com/package/react-native-app-auth
const AuthContext = createContext(null);
const {Provider} = AuthContext;

const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
    authenticated: false,
  });

  const logout = async () => {
    await Keychain.resetGenericPassword();
    setAuthState({
      accessToken: null,
      refreshToken: null,
      authenticated: false,
    });
  };

  const getAccessToken = () => {
    return authState.accessToken;
  };

  return (
    <Provider
      value={{
        authState,
        getAccessToken,
        setAuthState,
        logout,
      }}>
      {children}
    </Provider>
  );
};

export {AuthContext, AuthProvider};
