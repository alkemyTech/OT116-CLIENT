import axios from 'axios';

export default function getHeaderAuthorization() {
  const isTokenSaved = window.localStorage.getItem('token');

  if (!isTokenSaved) return {};
  return {
    Authorization: `Bearer ${isTokenSaved}`,
  };
}

export async function getPrivate(url, id) {
  const targetURL = id ? `${url}/${id}` : url;
  const request = await axios.get(targetURL, {
    headers: getHeaderAuthorization(),
  });
  return request.data.data;
}
