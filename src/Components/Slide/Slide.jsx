import React from 'react';

const Slide = function ({ slide, config }) {
  return (
    <>
      <a href={slide.targetUrl}>
        <img className={`slider-image ${config.customClasses.slideImage}`} src={slide.url} alt={slide.name} />
      </a>
      <div className="slider-text-container">
        <p className={`slider-text ${config.customClasses.slideImage}`}>{slide.text}</p>
      </div>
    </>
  );
};

export default Slide;
