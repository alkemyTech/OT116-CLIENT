import React from 'react';
import Slider from '../Slider/Slider';
import arraySlides from '../../constants/initialValues';
import configSliderJuguetes from '../../constants/configSliderJuguetes';

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
        <Slider arraySlides={arraySlides} config={configSliderJuguetes} />
      </section>
    </>
  );
};

export default Home;
