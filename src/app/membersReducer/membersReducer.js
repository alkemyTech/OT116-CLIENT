import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import {
  getMembers,
  getMemberbyId,
  updateMember,
  createMember,
  deleteMember,

} from './membersActions';

const initialState = {
  status: null,
  members: [],
  member: {},
  error: null,
};

const membersSlice = createSlice({
  name: 'membersReducer',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMembers.fulfilled, (state, action) => ({
        ...state,
        status: 'Successed',
        error: null,
        members: action.payload,
      }))
      .addCase(getMemberbyId.fulfilled, (state, action) => ({
        ...state, status: 'Successed', error: null, member: action.payload,
      }))
      .addCase(updateMember.fulfilled, (state, action) => {
        const updatedmembers = state.members.map((member) => (
          member.id === action.payload.id
            ? action.payload
            : member
        ));
        return {
          ...state,
          status: 'Successed',
          members: updatedmembers,
          error: null,
        };
      })
      .addCase(createMember.fulfilled, (state, action) => ({
        ...state,
        status: 'Successed',
        members: state.members.concat(action.payload),
        error: null,
      }))
      .addCase(deleteMember.fulfilled, (state) => ({
        ...state,
        status: 'Successed',
        error: null,
      }))
      .addMatcher(isPending, (state) => ({ ...state, status: 'Loading', error: null }))
      .addMatcher(isRejected, (state, action) => ({
        ...state,
        error: action?.error.message,
        status: 'Failed',
      }))
      .addDefaultCase((state) => state);
  },
});

export default membersSlice.reducer;
