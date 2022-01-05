import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import './App.css';
import store from './app/store';
import PublicRouter from './Components/PublicWeb/PublicRouter';
import GlobalTheme from './Styles/Theme';

// import {  Route } from 'react-router-dom';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 1 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <PublicRouter />
          {/*  <Route exact path="/" component={} />
          <Route path="/about/" component={} />
          <Route path="/etc/" component={} /> */}
        </AnimatedSwitch>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
