const localServer = true;
const BASE_URL = localServer ? 'http://localhost:7000' : 'https://express-srver-jwt.herokuapp.com/';

export const LOGIN_URL = `${BASE_URL}/login`;
export const SIGNUP_URL = `${BASE_URL}/signup`;