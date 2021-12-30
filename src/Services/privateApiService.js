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
  ...getHeaderAuthorization(),
}; // import headers from the right place

export async function postPrivateEndPoint(path, data) {
  const request = await axios.post(baseUrl + path, data, {
    headers,
  });
  return request.data; // return request or request.data.....
}

export async function deletePrivateEndPointById(path, id) {
  const request = await axios.delete(`${baseUrl + path}/${id}`, {
    headers,
  });
  return request.data; // return request or request.data.....
}
