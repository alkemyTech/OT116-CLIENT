import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersReducer/userReducer";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
