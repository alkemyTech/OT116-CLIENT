import React from 'react';
import { useDispatch } from 'react-redux';
import Slider from '../Slider/Slider';
import arraySlides, { arraySlidesEscolar } from '../../constants/arraySliders';
import configSlider, {
  configSliderEscolar,
} from '../../constants/configSliders';
import {
  getActivities,
  getActivity,
  updateActivity,
} from '../../app/activitiesReducer/activitiesActions';

const Home = function () {
  const dispatch = useDispatch();
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>{welcomeText} </h1> */}
      <section
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <button type="button" onClick={() => dispatch(getActivities())}>
          GET ACTIVITIES
        </button>
        <button type="button" onClick={() => dispatch(getActivity(1030))}>
          GET ACTIVITY 1030
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(
              updateActivity({
                id: 991,
                data: {
                  name: '2022',
                },
              }),
            );
          }}
        >
          UPDATE ACTIVITIES 991
        </button>
        <Slider arraySlides={arraySlides} config={configSlider} />
        <Slider arraySlides={arraySlidesEscolar} config={configSliderEscolar} />
      </section>
    </>
  );
};

export default Home;
