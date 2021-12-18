const configSlider = {
  spaceBetween: 0, // espaciado entre slides
  slidesPerView: 1, // cantidad de slides por renderizado
  pagination: {
    active: true, // muestra la paginacion
    clickable: true, // se puede clickear para ir al slider correspondiente
    type: 'bullets', // Tipo de paginación bullets | fraction | progressbar | custom
  },
  navigation: true, // muestra las flechas para moverse entre los slides
  loop: true, // activa el slider en forma infinita.
  autoplay: {
    active: true, // activa el autoplay
    delay: 5000, // configura cada cuanto se desplazan
    disableOnInteraction: false, // configura que no se deshabilite al interactuar
    pauseOnMouseEnter: true, // configura que al ingresar al slide no corra más el slider
  },
  keyboard: true, // activa el movimiento de slides con las flechas del teclado.
  customClasses: {
    slideContainer: '', // custom class a incorporar al slideContainer
    slideImage: '', // custom class a incorporar al slideImage
    slideText: '', // custom class a incorporar al slideText
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

export const configSliderEscolar = {
  spaceBetween: 0, // espaciado entre slides
  slidesPerView: 1, // cantidad de slides por renderizado
  pagination: {
    active: true, // muestra la paginacion
    clickable: true, // se puede clickear para ir al slider correspondiente
    type: 'bullets', // Tipo de paginación bullets | fraction | progressbar | custom
  },
  navigation: true, // muestra las flechas para moverse entre los slides
  loop: true, // activa el slider en forma infinita.
  autoplay: {
    active: true, // activa el autoplay
    delay: 5000, // configura cada cuanto se desplazan
    disableOnInteraction: false, // configura que no se deshabilite al interactuar
    pauseOnMouseEnter: true, // configura que al ingresar al slide no corra más el slider
  },
  keyboard: true, // activa el movimiento de slides con las flechas del teclado.
  customClasses: {
    slideContainer: '', // custom class a incorporar al slideContainer
    slideImage: '', // custom class a incorporar al slideImage
    slideText: '', // custom class a incorporar al slideText
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

export default configSlider;
