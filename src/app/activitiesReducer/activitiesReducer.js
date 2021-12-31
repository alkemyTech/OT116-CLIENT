import { createSlice } from '@reduxjs/toolkit';
import { getActivities, updateActivity } from './activitiesActions';

const initialState = {
  status: null,
  activities: [],
  error: null,
};

const activitiesSlice = createSlice({
  name: 'activitiesReducer',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      // getActivities Actions
      .addCase(getActivities.pending, (state) => ({ ...state, status: 'Loading' }))
      .addCase(getActivities.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        activities: state.activities.concat(action.payload),
      }))
      .addCase(getActivities.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action?.error.message,
      }))
      // updateActivity Actions
      .addCase(updateActivity.pending, (state) => ({ ...state, status: 'Loading' }))
      .addCase(updateActivity.fulfilled, (state, action) => {
        const updatedActivities = state.activities.map((activity) => (
          activity.id === action.payload.id
            ? action.payload
            : activity
        ));
        return {
          ...state,
          status: 'success',
          activities: updatedActivities,
        };
      })
      .addCase(updateActivity.rejected, (state, action) => ({
        ...state,
        error: action?.error.message,
        status: 'failed',
      }));
  },
});

export default activitiesSlice.reducer;
