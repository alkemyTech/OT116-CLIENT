import React from 'react';
import Slider from './Slider';
import Content from './Content';
import Footer from './Footer';
import Header from "../../Components/Layout/Header/Header"

const ToysCampaign = () => {
  return (
    <>
    <Header/>
      <Slider />
      <Content />
      <Footer />
    </>
  );
}

export default ToysCampaign;
