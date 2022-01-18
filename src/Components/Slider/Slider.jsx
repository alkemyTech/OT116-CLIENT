import React from 'react';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination, Navigation, Autoplay, Keyboard,
} from 'swiper';
// import swiper CSS
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
// import custom CSS
import './Slider.css';

// install Swiper modules
SwiperCore.use([Autoplay, Keyboard, Pagination, Navigation]);

const Slider = function ({
  arraySlides,
  config,
  onSlideChange,
  Component,
}) {
  const renderSlide = (data) => (
    <SwiperSlide data-testid="slide-container" key={data.id} style={{ width: '100%' }}>
      <Component data={data} config={config} />
    </SwiperSlide>
  );

  return (
    <Swiper
      spaceBetween={config.spaceBetween}
      slidesPerView={config.slidesPerView}
      onSlideChange={() => onSlideChange && onSlideChange()}
      // onSwiper={(swiper) => console.log(swiper)}
      pagination={config.pagination?.active ? {
        clickable: config.pagination.clickable,
        type: config.pagination.type,
      } : false}
      navigation={config.navigation}
      loop={config.loop}
      autoplay={config.autoplay.active ? {
        delay: config.autoplay.delay,
        disableOnInteraction: config.autoplay.disableOnInteraction,
        pauseOnMouseEnter: config.autoplay.pauseOnMouseEnter,
      } : false}
      keyboard={{
        enabled: config.keyboard,
      }}
      breakpoints={config.breakpoints}
    >
      {arraySlides.length !== 0 && arraySlides.map((data) => renderSlide(data))}
    </Swiper>
  );
};

export default Slider;
