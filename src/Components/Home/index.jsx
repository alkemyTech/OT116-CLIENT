import React from 'react';
import Slider from '../Slider/Slider';
import arraySlides, { arraySlidesEscolar } from '../../constants/arraySliders';
import configSlider, { configSliderEscolar } from '../../constants/configSliders';
import {
  getAllContacts,
  getContactById,
  addContact,
  deleteContactById,
  updateContactById,
} from '../../Services/contactsService';

const Home = function () {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>{welcomeText} </h1> */}
      <section
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <button onClick={getAllContacts().then((res) => console.log(res))} type="button">GET ALL</button>
        <button
          onClick={
          getContactById(14)
            .then((res) => console.log(res))
            .catch((err) => console.error('error catcheado:', err))
        }
          type="button"
        >
          GET BY ID

        </button>
        <button
          onClick={
            updateContactById(13, { test: 'prop test', name: 'test name' })
              .then((res) => console.log(res))
          }
          type="button"
        >
          UPDATE BY ID

        </button>
        <button
          onClick={
          addContact({ name: 'new contact', des: 'holaaaa' })
            .then((res) => console.log(res))
}
          type="button"
        >
          POST

        </button>
        <button
          onClick={
          deleteContactById(14)
            .then((res) => console.log(res))
          }
          type="button"
        >
          DELETE BY ID

        </button>
        <Slider arraySlides={arraySlides} config={configSlider} />
        <Slider arraySlides={arraySlidesEscolar} config={configSliderEscolar} />
      </section>
    </>
  );
};

export default Home;
