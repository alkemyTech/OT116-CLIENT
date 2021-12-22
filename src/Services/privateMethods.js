export default function getHeaderAuthorization() {
  const isTokenSaved = JSON.parse(window.localStorage.getItem('token')) || null;

  return {
    Authorization: `Bearer ${isTokenSaved}`,
  };
}
