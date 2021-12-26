import axios from 'axios';

export default function getHeaderAuthorization() {
  const isTokenSaved = window.localStorage.getItem('token');

  if (!isTokenSaved) return {};
  return {
    Authorization: `Bearer ${isTokenSaved}`,
  };
}

const baseUrl = 'http://ongapi.alkemy.org/api/'; // import from the right place.
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'access-control-allow-methods': 'GET, PUT, POST, DELETE, OPTIONS',
  Authorization: getHeaderAuthorization(),
}; // import headers from the right palce

export async function postPrivateEndPoint(path, data) {
  const request = await axios.post(baseUrl + path, data, {
    headers,
  });
  return request.data; // return request or request.data.....
}
