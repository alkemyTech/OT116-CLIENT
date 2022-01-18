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
        console.log(cards);
      })
      .catch((err) => new Error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <h2>{title}</h2>
      <Slider
        arraySlides={cards}
        config={configCardsSlider}
        Component={CardComponent}
      />
    </section>
  );
};

export default SubpageHero;
