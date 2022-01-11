import { configureStore } from '@reduxjs/toolkit';
import slidesReducer from './slidesReducer/slidesReducer';
import userReducer from './usersReducer/userReducer';
import activitiesReducer from './activitiesReducer/activitiesReducer';
import authReducer from './authReducer/authReducer';
import categoriesReducer from './categoriesReducer/categoriesReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    slides: slidesReducer,
    activities: activitiesReducer,
    categories: categoriesReducer,
  },
});

export default store;
