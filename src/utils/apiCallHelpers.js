export const getRequestHeaders = token => {
  let headers = {
    Accept: 'application/json',
  'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

export const jsonToQuery = (params = {}) => {
  return Object.keys(params)
    .map(key => {
      if (params[key] || params[key] === false || params[key] == 0) {
        if (typeof params[key] === 'object') {
          return `${key}=${encodeURIComponent(JSON.stringify(params[key]))}`;
        }
        return `${key}=${encodeURIComponent(params[key])}`;
      }
    })
    .filter(val => !!val)
    .join('&');
};

const parseResponseBody = async res => {
  try {
    return await res.json();
  } catch (e) {
    // when response doesn't have a body
    return {
      message: res?.ok ? 'success' : 'error',
    };
  }
};

export const parseResponse = async res => {
  try {
    const parsed = await parseResponseBody(res);
    if (res?.ok) {
      return Promise.resolve(parsed);
    } else {
      return Promise.reject({
        status: res?.status,
        statusText: res?.statusText,
        message: parsed?.message,
      });
    }
  } catch (e) {
    return Promise.reject({
      status: res?.status,
      statusText: res?.statusText,
    });
  }
};
