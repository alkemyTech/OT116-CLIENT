import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Slider from './Slider';
import arraySlides from '../../constants/arraySliders';
import configSlider from '../../constants/configSliders';

describe('Slider Render', () => {

  let component

  beforeEach(() => {
    component = render(<Slider arraySlides={arraySlides} config={configSlider} />)  
  })

  it('Slide Container', async () =>{
    
    const slidesContainers = await component.findAllByTestId('slide-container')

    // Revisamos que la cantidad de slides sea al menos la cantidad de slides recibida para la prueba.
    expect(slidesContainers.length).toBeGreaterThanOrEqual(arraySlides.length)

  })
  
  it('Slide Images', async () => {

    const slidesImages = await component.findAllByRole('img')
    const slidesByAltText = await component.getAllByAltText(/slide.*?/i)
    
    // Revisamos que la cantidad de imagenes sea al menos la misma cantidad recibida para la prueba.
    expect(slidesImages.length).toBeGreaterThanOrEqual(arraySlides.length)
    // Revisamos que las imagenes renderizadas tengan el Alt Text configurado y que sea el pasado en arraySlides
    expect(slidesByAltText.length).toBeGreaterThanOrEqual(arraySlides.length)  
  })

  it('Slide Texts', async () => {

    const slidesTexts = await component.findAllByText(arraySlides[0].text)
    
    // Revisamos que se esté renderizando el texto al pie en la misma cantidad recibida para la prueba.
    expect(slidesTexts.length).toBeGreaterThanOrEqual(arraySlides.length)  
  })

  it('Slide Links', async () => {
    
    const slidesLinks = await component.findAllByRole('link')
    
    // Revisamos que se esté renderizando los links de cada slide en la misma cantidad recibida para la prueba.
    expect(slidesLinks.length).toBeGreaterThanOrEqual(arraySlides.length)  
  })
  it('Slide Navigation Buttons', async () => {
    
    const navigationRightButton = await component.container.querySelector('.swiper-button-next')
    const navigationLeftButton = await component.container.querySelector('.swiper-button-prev')

    // validamos la existencia de las flechas de navegación
    expect(navigationRightButton).toBeInTheDocument()
    expect(navigationLeftButton).toBeInTheDocument()
  })
  it('Slide Pagination Buttons', async () => {
    
    const pagination = await component.container.querySelector('.swiper-pagination')

    // validamos la existencia del container de paginación
    expect(pagination).toBeInTheDocument()
  })
  
  it('Pagination false', async () => {

    configSlider.pagination.active = false
    component = render(<Slider arraySlides={arraySlides} config={configSlider} />)
    
    const pagination = await component.container.querySelector('.swiper-pagination')

    // validamos la existencia del container de paginación
    expect(pagination).not.toBeInTheDocument()
  })

  it('Autoplay false', async () => {

    configSlider.autoplay.active = false

    const slideChangeHandler = jest.fn()

    component = render(<Slider arraySlides={arraySlides} onSlideChange={slideChangeHandler} config={configSlider} />)
    
    const slidesImages = await component.findAllByRole('img')

    setTimeout(() => {
      fireEvent.change(slidesImages[0])  
    }, 10000);
    expect(slideChangeHandler.mock.calls).toHaveLength(1)
  })
})

describe('Slider click', () => {

  let component
  const slideChangeHandler = jest.fn()

  beforeEach(() => {
    component = render(<Slider arraySlides={arraySlides} onSlideChange={slideChangeHandler} config={configSlider} />)  
  })

  it('Slide click Right pagination', async () =>{

    const navigationRightButton = await component.container.querySelector('.swiper-button-next')
    
    fireEvent.click(navigationRightButton)
  
    expect(slideChangeHandler.mock.calls).toHaveLength(3)
  })

  it('Slide click Left pagination', async () =>{

    const navigationLeftButton = await component.container.querySelector('.swiper-button-prev')
    
    fireEvent.click(navigationLeftButton)
  
    expect(slideChangeHandler.mock.calls).toHaveLength(3)
  })
  
})