import axios from 'axios';

export default function getHeaderAuthorization() {
  const isTokenSaved = window.localStorage.getItem('token');

  if (!isTokenSaved) return {};
  return {
    Authorization: `Bearer ${isTokenSaved}`,
  };
}

const baseUrl = 'http://ongapi.alkemy.org/api/';
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

export async function patchPrivateById(url, id, body) {
  const targetURL = `${url}/${id}`;
  const request = await axios.patch(targetURL, body, headers);
  return request.data.data;
}

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

export async function putPrivateEndPoint(path, id, data) {
  const request = await axios.put(`${baseUrl + path}/${id}`, data, {
    headers,
  });
  return request.data; // return request or request.data.....
}
