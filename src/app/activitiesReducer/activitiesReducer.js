import { createSlice } from '@reduxjs/toolkit';
import {
  createActivity,
  deleteActivity,
  getActivities,
  getActivity,
  updateActivity,
} from './activitiesActions';

const initialState = {
  status: null,
  activities: [],
  activity: {},
  error: null,
};

const isPending = (action) => action.type.startsWith('activities/') && action.type.endsWith('/pending');
const isRejected = (action) => action.type.startsWith('activities/') && action.type.endsWith('/rejected');

const activitiesSlice = createSlice({
  name: 'activitiesReducer',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      // getActivities Case
      .addCase(getActivities.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        error: null,
        activities: action.payload,
      }))
      // getActivity Case
      .addCase(getActivity.fulfilled, (state, action) => ({
        ...state, status: 'Success', error: null, activity: action.payload,
      }))
      // updateActivity Case
      .addCase(updateActivity.fulfilled, (state, action) => {
        const updatedActivities = state.activities.map((activity) => (
          activity.id === action.payload.id
            ? action.payload
            : activity
        ));
        return {
          ...state,
          status: 'Success',
          activities: updatedActivities,
          error: null,
        };
      })
      // addActivity Case
      .addCase(createActivity.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        activities: state.activities.concat(action.payload),
        error: null,
      }))
      // deleteActivity Case
      .addCase(deleteActivity.fulfilled, (state) => ({
        ...state,
        status: 'Success',
        error: null,
      }))
      // when a action is rejected or pending:
      .addMatcher(isPending, (state) => ({ ...state, status: 'Loading', error: null }))
      .addMatcher(isRejected, (state, action) => ({
        ...state,
        error: action?.error.message,
        status: 'Failed',
      }))
      .addDefaultCase((state) => state);
  },
});

export default activitiesSlice.reducer;
