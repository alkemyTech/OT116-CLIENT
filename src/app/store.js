import { configureStore } from '@reduxjs/toolkit';
import userReducer from './usersReducer/userReducer';
import activitiesReducer from './activitiesReducer/activitiesReducer';

const store = configureStore({
  reducer: {
    users: userReducer,
    activities: activitiesReducer,
  },
});

export default store;
