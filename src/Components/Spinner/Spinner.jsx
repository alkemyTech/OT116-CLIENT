import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = function () {
  return (
    <div className="justify-content-center align-items-center">
      <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Spinner;
