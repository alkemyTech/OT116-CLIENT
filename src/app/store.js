import { configureStore } from '@reduxjs/toolkit';
import slidesReducer from './slidesReducer/slidesReducer';
import userReducer from './usersReducer/userReducer';
import activitiesReducer from './activitiesReducer/activitiesReducer';
import categoriesReducer from './categoriesReducer/categoriesReducer';
import newsReducer from './newsReducer/newsReducer';

const store = configureStore({
  reducer: {
    users: userReducer,
    slides: slidesReducer,
    activities: activitiesReducer,
    categories: categoriesReducer,
    news: newsReducer,
  },
});

export default store;
