export default function getHeaderAuthorization() {
  const isTokenSaved = window.localStorage.getItem('token');

  return {
    Authorization: `Bearer ${isTokenSaved}`,
  };
}
