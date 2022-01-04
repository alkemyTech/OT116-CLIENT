import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllActivities,
  getActivityById,
  deleteActivityById,
  addActivity,
  patchActivityById,
} from '../../Services/activitiesService';

const getActivities = createAsyncThunk(
  'activities/getActivities',
  getAllActivities,
);

const getActivity = createAsyncThunk('activities/getActivity', getActivityById);

const updateActivity = createAsyncThunk(
  'activities/updateActivity',
  async ({ id, data }) => {
    const req = await patchActivityById(id, data);
    return req;
  },
);

const createActivity = createAsyncThunk('activities/addNewActivity', addActivity);

const deleteActivity = createAsyncThunk('activities/deleteActivity', deleteActivityById);

export {
  getActivities,
  getActivity,
  updateActivity,
  createActivity,
  deleteActivity,
};
