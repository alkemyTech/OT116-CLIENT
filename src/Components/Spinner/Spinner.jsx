/* eslint-disable jsx-quotes */
import React from 'react';
// import {useState, useEffect} from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = function () {
  // const [spinner, setSpinner] = useState(true);
  // useEffect{() => {
  // setLoading(true),
  // setTimeout(()=> {
  // setLoading(false)
  // },8000)
  // },[]}

  // { loading ? (
  // <Loader
  //  type='BallTriangle'
  //  color='#00BFFF'
  //  height={80}
  //  width={80}
  // )
  //  : (
  //  <div className="pagina que quiera cargar"></div>
  // )
  // }
  return (
    <div className="loader">
      <Loader type="BallTriangle" color="#00BFFF" height={120} width={120} />
    </div>
  );
};

export default Spinner;
