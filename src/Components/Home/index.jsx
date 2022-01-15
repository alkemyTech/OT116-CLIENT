import React from 'react';
import Slider from '../Slider/Slider';
import arraySlides, { arraySlidesEscolar } from '../../constants/arraySliders';
import configSlider, { configSliderEscolar } from '../../constants/configSliders';
import Nav from '../Nav/Nav';

const Home = function () {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>{welcomeText} </h1> */}
      <section
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <Nav />
        <Slider arraySlides={arraySlides} config={configSlider} />
        <Slider arraySlides={arraySlidesEscolar} config={configSliderEscolar} />
      </section>
    </>
  );
};

export default Home;
