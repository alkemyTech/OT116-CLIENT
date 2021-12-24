import axios from 'axios';

export default function getHeaderAuthorization() {
  const isTokenSaved = window.localStorage.getItem('token');

  if (!isTokenSaved) return {};
  return {
    Authorization: `Bearer ${isTokenSaved}`,
  };
}

const headers = {
  ...getHeaderAuthorization(),
};

export async function getPrivateById(url, id) {
  const targetURL = id ? `${url}/${id}` : url;
  const request = await axios.get(targetURL, headers);
  return request.data.data;
}

export async function patchPrivateById(url, id, body) {
  const targetURL = `${url}/${id}`;
  const request = await axios.patch(targetURL, body, headers);
  return request.data.data;
}
