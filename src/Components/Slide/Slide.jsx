import React from 'react';

const Slide = function ({ data, config }) {
  return (
    <div className={`slide-container ${config.customClasses.slideContainer}`}>
      <img className={`slider-image ${config.customClasses.slideImage}`} src={data.image} alt={data.name} />
      <div className="slider-text-container">
        <p className={`slider-text ${config.customClasses.slideText}`}>{(data.description.replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, ''))}</p>
      </div>
    </div>
  );
};

export default Slide;
