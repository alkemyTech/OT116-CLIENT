import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllActivities,
  getActivityById,
  updateActivityById,
} from '../../Services/activitiesService';

const getActivities = createAsyncThunk(
  'activities/getActivities',
  getAllActivities,
);

const getActivity = createAsyncThunk('activities/getActivity', getActivityById);

const updateActivity = createAsyncThunk(
  'activities/updateActivity',
  async ({ id, data }) => {
    const req = await updateActivityById(id, data);
    return req;
  },
);

export { getActivities, getActivity, updateActivity };
