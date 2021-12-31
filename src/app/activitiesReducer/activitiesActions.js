import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllActivities, updateActivityById } from '../../Services/activitiesService';

const getActivities = createAsyncThunk('activities/getActivities', getAllActivities);

const updateActivity = createAsyncThunk('activities/updateActivity', async ({ id, updActivity }) => {
  const req = await updateActivityById(id, updActivity);
  return req;
});

export { getActivities, updateActivity };
