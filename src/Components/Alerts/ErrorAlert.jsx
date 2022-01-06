import React, { useEffect } from 'react';
import Debounce from '../Search/Search';
import { getEndpointById } from '../Services/publicApiServices';
import { alertInfo } from './alerts';

const ErrorAlert = () => {
  const getDataFromApi = () => {
    getEndpointById('slides', 100)
      .then((data) => console.log('data', data))
      .catch((err) => alertInfo('Ha ocurrido un error', err.message, 'error'));
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div>
      <Debounce />
    </div>
  );
};

export default ErrorAlert;
