import {STRAVA_API_URL} from '@env';
import axios from 'axios';
//blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/

const stravaAxiosInstance = axios.create({baseURL: STRAVA_API_URL});

export {stravaAxiosInstance};
