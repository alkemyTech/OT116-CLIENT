import * as React from 'react';
import './styles.css';

const Loader = function Loader({ fullscreen }) {
  return (
    <div className={`lds-ring ${fullscreen && 'fullscreen'}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  );
};

export default Loader;
