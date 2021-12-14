import React from 'react';
import { Redirect,Route } from 'react-router-dom';

const PrivateRoute = ({...rest}) => {

  const isLogged=localStorage.getItem('token')

  if(isLogged!==null){
    return(
      <Route
        {...rest}
      />
    )
  }else{
    return(
      <Redirect to="/login"/>
    )
  }
}

export default PrivateRoute;
