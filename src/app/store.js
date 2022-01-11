import { configureStore } from '@reduxjs/toolkit';
import slidesReducer from './slidesReducer/slidesReducer';
import userReducer from './usersReducer/userReducer';
import activitiesReducer from './activitiesReducer/activitiesReducer';
import authReducer from './authReducer/authReducer';
import categoriesReducer from './categoriesReducer/categoriesReducer';
import membersReducer from './membersReducer/membersReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    slides: slidesReducer,
    activities: activitiesReducer,
    categories: categoriesReducer,
    members: membersReducer,
  },
});

export default store;
