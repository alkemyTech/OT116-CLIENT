import React from "react";
import Home from "../Home";
import PublicRoute from "./PublicRoute";
import { AnimatedSwitch } from "react-router-transition";

const PublicRouter = () => {
  return (
    <>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <PublicRoute exact path="/" component={Home} />
      </AnimatedSwitch>
    </>
  );
};

export default PublicRouter;
