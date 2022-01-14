import React from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import Home from '../Home';
import Login from '../Users/Login';
import PublicRoute from './PublicRoute';

const PublicRouter = function () {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
    >
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/login" component={Login} />
    </AnimatedSwitch>
  );
};

export default PublicRouter;
