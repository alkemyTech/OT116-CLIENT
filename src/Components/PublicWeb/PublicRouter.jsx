import React from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import Home from '../Home';
import PublicRoute from './PublicRoute';

const PublicRouter = function () {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
    >
      <PublicRoute exact path="/" component={Home} />
    </AnimatedSwitch>
  );
};

export default PublicRouter;
