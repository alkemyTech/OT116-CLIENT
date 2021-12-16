import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './Slider.css';
// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation, Autoplay, Keyboard,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Keyboard, Pagination, Navigation]);

const Slider = function ({ arraySlides }) {
  const renderSlide = (slide) => (
    <SwiperSlide key={slide.name}>
      <img className="slider-image" src={slide.url} alt={slide.name} />
      <div className="slider-text-container">
        <span className="slider-text">{slide.text}</span>
      </div>
    </SwiperSlide>
  );
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination
      navigation
      loop
      autoplay={{
        delay: 9500,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
    >
      {arraySlides.map((slide) => renderSlide(slide))}
    </Swiper>
  );
};

export default Slider;
