import axios from 'axios';

export default function getHeaderAuthorization() {
  const isTokenSaved = window.localStorage.getItem('token');

  if (!isTokenSaved) return {};
  return {
    Authorization: `Bearer ${isTokenSaved}`,
  };
}

export async function getPrivateById(url, id) {
  const targetURL = `${url}/${id}`;
  const request = await axios.get(targetURL, {
    headers: getHeaderAuthorization(),
  });
  return request.data.data;
}
