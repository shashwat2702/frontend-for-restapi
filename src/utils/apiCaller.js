import { getApiAccessToken } from './tokenHelper';
import { getRequestHeaders, parseResponse } from './apiCallHelpers';

export const apiCall = async (url, options = {}) => {
  const accessToken = getApiAccessToken();

  const response = await fetch(url, {
    method: options.method || 'GET',
    headers: getRequestHeaders(accessToken),
    credentials: 'include',
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  return await parseResponse(response);
};

export const deleteCall = (url, body) => {
  const options = { method: 'DELETE', body };
  return apiCall(url, options);
};

export const getCall = (url) => {
  return apiCall(url);
};

export const postCall = (url, body) => {
  const options = { method: 'POST', body };
  return apiCall(url, options);
};

export const putCall = (url, body) => {
  const options = { method: 'PUT', body };
  return apiCall(url, options);
};
