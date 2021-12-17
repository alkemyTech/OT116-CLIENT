import React, {useState, useEffect} from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import Loader from '../Loader';
import Home from '../Home';
import PublicRoute from './PublicRoute';

const PublicRouter = function () {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
      setTimeout(() =>{
        setShowLoader(false);
      }, 2000);
    }, [])

  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
    >
      {
        showLoader && <Loader fullscreen/>
      }
      <PublicRoute exact path="/" component={Home} />
    </AnimatedSwitch>
  );
};

export default PublicRouter;
