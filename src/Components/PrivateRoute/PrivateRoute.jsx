import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = function ({ ...rest }) {
  const isLogged = localStorage.getItem('token');

  if (isLogged !== null) {
    return (
      <Route
        {...rest}
      />
    );
  }
  return (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
