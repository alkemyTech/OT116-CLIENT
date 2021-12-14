import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import { getOrganizationInformation } from "../../Services/OrganizationInformation";
import Header from '../Layout/Header/Header'
import CardsSection from './CardsSection';
import * as newsService from '../../Services/newsServices'
import * as testimonialService from '../../Services/testimonialService'

const Home = () => {
  const [welcomeText, setWelcomeText] = useState("");
  useEffect(() => {
    getOrganizationInformation().then(res => setWelcomeText(res.data.welcome_text))
  }, [])
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>{welcomeText}</h1> */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Carousel />
        <CardsSection title="Últimas novedades" clickeable={{to:'/novedades'}} getInformation={newsService.getAll} slices={3} button={{text:'Ver todas', to:'/novedades'}}/>
        <CardsSection title="Testimonios" getInformation={testimonialService.getAllTestimonial} slices={3}/>
      </section>
    </>
  );
};

export default Home;
