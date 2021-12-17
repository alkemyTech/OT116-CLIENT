import React from 'react';

const Slide = function ({ slide, config }) {
  return (
    <div className={`slide-container ${config.customClasses.slideContainer}`}>
      <a href={slide.targetUrl}>
        <img className={`slider-image ${config.customClasses.slideImage}`} src={slide.url} alt={slide.name} />
      </a>
      <div className="slider-text-container">
        <p className={`slider-text ${config.customClasses.slideText}`}>{slide.text}</p>
      </div>
    </div>
  );
};

export default Slide;
