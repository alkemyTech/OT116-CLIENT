import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../../Styles/Carousel.css";
SwiperCore.use([Parallax, Autoplay, Navigation, Pagination, Scrollbar, A11y]);

const CarouselCampaign = ({ values }) => {
  const sliderContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "450 px",
    backgroundRepeat: "no-repeat",
    boxSizing: "border-box",
  };
  const sliderContainer = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
    "--swiper-pagination-active-color": "#000",
    "--swiper-navigation-size": "80px",
    textShadow: "0 0 0 #000",
    background: "0 0 0 #000",
    height: "450px",
  };
  return (
    <Box
      sx={{
        paddingTop: "20px",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <Swiper
        style={sliderContainer}
        speed={2000}
        parallax={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
        }}
      >
        {values.map((slide, index) => (
          <>
            <SwiperSlide key={index}>
              <div data-swiper-parallax="-23%">
                <SwiperSlide style={sliderContent}>
                  <Box
                    xs={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={slide.img}
                      alt={slide.title}
                      style={{
                        width: "90%",
                      }}
                    />
                  </Box>
                </SwiperSlide>
              </div>
              <Box
                data-swiper-parallax="-100"
                sx={{
                  display: { xs: "none", xl: "flex" },
                  justifyContent: "center",
                  padding: "20px",
                  fontSize: "1.5rem",
                }}
              >
                {slide.title}
              </Box>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </Box>
  );
};

export default CarouselCampaign;
