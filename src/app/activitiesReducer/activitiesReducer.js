import { createSlice } from '@reduxjs/toolkit';
import { getActivities, getActivity, updateActivity } from './activitiesActions';

const initialState = {
  status: null,
  activities: [],
  activity: {},
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
        status: 'Success',
        activities: action.payload,
      }))
      .addCase(getActivities.rejected, (state, action) => ({
        ...state,
        status: 'Failed',
        error: action?.error.message,
      }))
      // getActivity Actions
      .addCase(getActivity.pending, (state) => ({ ...state, status: 'Loading' }))
      .addCase(getActivity.fulfilled, (state, action) => ({ ...state, status: 'Success', activity: action.payload }))
      .addCase(getActivity.rejected, (state, action) => ({ ...state, status: 'Failed', error: action?.error.message }))
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
          status: 'Success',
          activities: updatedActivities,
        };
      })
      .addCase(updateActivity.rejected, (state, action) => ({
        ...state,
        error: action?.error.message,
        status: 'Failed',
      }))
      .addDefaultCase((state) => state);
  },
});

export default activitiesSlice.reducer;
