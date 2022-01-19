import React, { useEffect, useState } from 'react';
import { configCardsSlider } from '../../../constants/configSliders';
import CardComponent from '../../Cards/CardComponent';
import { getEndpoint } from '../../Services/publicApiServices';
import Slider from '../../Slider/Slider';

const SubpageHero = ({ path, title }) => {
  const [cards, setCards] = useState([{
    id: '',
    name: '',
    image: '',
    description: '',
    content: '',
  }]);

  const getData = () => {
    getEndpoint(path)
      .then((res) => {
        setCards(res);
      })
      .catch((err) => new Error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <h2 style={{ textAlign: 'center', padding: '2rem' }}>{title}</h2>
      <Slider
        style={{ padding: '2rem' }}
        arraySlides={cards}
        config={configCardsSlider}
        Component={CardComponent}
      />
    </section>
  );
};

export default SubpageHero;
