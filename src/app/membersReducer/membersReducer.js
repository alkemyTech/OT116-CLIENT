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

const success = 'Success';

const membersSlice = createSlice({
  name: 'membersReducer',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMembers.fulfilled, (state, action) => ({
        ...state,
        status: { success },
        error: null,
        members: action.payload,
      }))
      .addCase(getMemberbyId.fulfilled, (state, action) => ({
        ...state, status: { success }, error: null, member: action.payload,
      }))
      .addCase(updateMember.fulfilled, (state, action) => {
        const updatedmembers = state.members.map((member) => (
          member.id === action.payload.id
            ? action.payload
            : member
        ));
        return {
          ...state,
          status: { success },
          members: updatedmembers,
          error: null,
        };
      })
      .addCase(createMember.fulfilled, (state, action) => ({
        ...state,
        status: { success },
        members: state.members.concat(action.payload),
        error: null,
      }))
      .addCase(deleteMember.fulfilled, (state) => ({
        ...state,
        status: { success },
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
