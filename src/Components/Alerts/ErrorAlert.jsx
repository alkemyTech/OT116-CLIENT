import React, { useEffect } from 'react';
import Debounce from '../Search/Search';
import { getEndpoint } from '../Services/publicApiServices';
import { alertInfo } from './alerts';

const ErrorAlert = () => {
  const getDataFromApi = () => {
    getEndpoint('slides')
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
