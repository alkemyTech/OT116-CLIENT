import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Detail from "../Activities/Detail/Detail";
import NewsDetailLayout from "../News/Detail/NewsDetailLayout";
import ActivitiesList from "../Activities/ActivitiesList";
import Home from "../Home";
import AboutUs from "../About/AboutUs";
import ListSlides from "../Slides/ListSlides/ListSlides";
import ContactForm from "../Contact/ContactForm";
import NewsList from "../News/NewList/NewsList";
import Donation from "../Donations/Donation";
import Thanks from "../Donations/Thanks";
import SchoolCampaign from "../../Campaigns/School/SchoolCampaign";
import ToysCampaign from "../../Campaigns/Toys/ToysCampaign";
import PublicRoute from "./PublicRoute";
import { AnimatedSwitch } from "react-router-transition";
import Contacto from "../Contact/Contact";

const PublicRouter = () => {
  return (
    <>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Route path="/school-campaign" component={SchoolCampaign} />
        <Route path="/toys-campaign" component={ToysCampaign} />
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute path="/novedades/:id" component={NewsDetailLayout} />
        <PublicRoute path="/novedades" component={NewsList} />
        <PublicRoute path="/activity-detail/:id" component={Detail} />
        <PublicRoute path="/activities" component={ActivitiesList} />
        <PublicRoute path="/nosotros" component={AboutUs} />
        <PublicRoute path="/create-contact-message" component={ContactForm} />
        <PublicRoute path="/donate" component={Donation} />
        <PublicRoute path="/thanks" component={Thanks} />
        <PublicRoute path="/list-slides" component={ListSlides} />
        <PublicRoute path="/contacto" component={Contacto} />
      </AnimatedSwitch>
    </>
  );
};

export default PublicRouter;
