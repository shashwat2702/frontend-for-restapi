const API_ACCESS_TOKEN_KEY = 'apiCallAccessToken';

export const getApiAccessToken = () => {
  return localStorage.getItem(API_ACCESS_TOKEN_KEY)
};

export const setApiAccessToken = (accessToken) => {
  localStorage.setItem(API_ACCESS_TOKEN_KEY, accessToken);
}