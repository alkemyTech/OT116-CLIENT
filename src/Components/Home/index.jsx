import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import configSlider from '../../constants/configSliders';
import { getAllSlides } from '../../Services/slidesServices';
import SubpageHero from '../Layout/SubpageHero/SubpageHero';
import Slide from '../Slide/Slide';

const Home = function () {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    getAllSlides().then((res) => setSlides(res));
  }, []);

  return (
    <section
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <Slider arraySlides={slides} config={configSlider} Component={Slide} />
      <h1 style={{ textAlign: 'center', padding: '1rem', fontSize: '2rem' }}>Bienvenido a Somos Más</h1>
      <SubpageHero path="testimonials" title="Testimonios" />
    </section>
  );
};

export default Home;
