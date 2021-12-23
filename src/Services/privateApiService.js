import axios from 'axios';

export function getHeaderAuthorization() {
  const isTokenSaved = window.localStorage.getItem('token');

  return {
    Authorization: `Bearer ${isTokenSaved}`,
  };
}

export async function getPrivate(url, id) {
  const targetURL = `${url}/${id}`;
  const request = await axios.get(targetURL, {
    headers: getHeaderAuthorization(),
  });
  return request.data;
}
