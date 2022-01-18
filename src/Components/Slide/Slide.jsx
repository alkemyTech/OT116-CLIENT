import React from 'react';

const Slide = function ({ slide, config }) {
  return (
    <div className={`slide-container ${config.customClasses.slideContainer}`}>
      <img className={`slider-image ${config.customClasses.slideImage}`} src={slide.image} alt={slide.name} />
      <div className="slider-text-container">
        <p className={`slider-text ${config.customClasses.slideText}`}>{(slide.description.replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, ''))}</p>
      </div>
    </div>
  );
};

export default Slide;
