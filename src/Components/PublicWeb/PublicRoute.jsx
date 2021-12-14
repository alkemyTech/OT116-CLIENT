/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

const PublicRoute = function ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default PublicRoute;
