import { configureStore } from '@reduxjs/toolkit';
import slidesReducer from './slidesReducer/slidesReducer';
import userReducer from './usersReducer/userReducer';
import activitiesReducer from './activitiesReducer/activitiesReducer';
import authReducer from './authReducer/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    slides: slidesReducer,
    activities: activitiesReducer,
  },
});

export default store;
