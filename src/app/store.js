import { configureStore } from '@reduxjs/toolkit';
import slidesReducer from './slidesReducer/slidesReducer';
import userReducer from './usersReducer/userReducer';
import activitiesReducer from './activitiesReducer/activitiesReducer';

const store = configureStore({
  reducer: {
    users: userReducer,
    slides: slidesReducer,
    activities: activitiesReducer,
  },
});

export default store;
