import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from '../Home';
import SchoolCampaign from '../SchoolCampaign';
import ToysCampaign from '../ToysCampaign';
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
      <Route exact path="/toys-campaign" component={ToysCampaign} />
      <Route exact path="/school-campaign" component={SchoolCampaign} />
    </AnimatedSwitch>
  );
};

export default PublicRouter;
