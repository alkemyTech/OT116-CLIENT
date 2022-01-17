import React from 'react';
import Slider from '../Slider/Slider';
import configSlider from '../../constants/configSliders';
import { getAllSlides } from '../../Services/slidesServices';

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
        <Slider arraySlides={getAllSlides} config={configSlider} />
      </section>
    </>
  );
};

export default Home;
