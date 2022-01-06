import { configureStore } from '@reduxjs/toolkit';
import slidesReducer from './slidesReducer/slidesReducer';
import userReducer from './usersReducer/userReducer';

const store = configureStore({
  reducer: {
    users: userReducer,
    slides: slidesReducer,
  },
});

export default store;
