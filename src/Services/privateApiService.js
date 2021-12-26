import axios from 'axios';

export default function getHeaderAuthorization() {
  const isTokenSaved = window.localStorage.getItem('token');

  if (!isTokenSaved) return {};
  return {
    Authorization: `Bearer ${isTokenSaved}`,
  };
}

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'access-control-allow-methods': 'GET, PUT, PATCH, POST, DELETE, OPTIONS',
  ...getHeaderAuthorization(),
};

export async function getPrivateById(url, id) {
  const targetURL = `${url}/${id}`;
  const request = await axios.get(targetURL, headers);
  return request.data.data;
}
