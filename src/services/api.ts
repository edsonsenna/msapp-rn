import {STRAVA_API_URL} from '@env';
import axios from 'axios';

const stravaAxiosInstance = axios.create({baseURL: STRAVA_API_URL});

export {stravaAxiosInstance};
