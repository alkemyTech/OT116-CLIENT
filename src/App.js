import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import "./App.css";
import store from "./app/store";
import PublicRouter from "./Components/PublicWeb/PublicRouter";
import { GlobalTheme } from "./Styles/Theme";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={GlobalTheme}>
          <BrowserRouter>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 1 }}
              atActive={{ opacity: 1 }}
            >
              <PublicRouter />
            </AnimatedSwitch>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
