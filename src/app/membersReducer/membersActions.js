import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllMembers,
  getMemberById,
  addMember,
  updateMemberById,
  deleteMemberById,
  modifyMember,
} from '../../Services/membersService';

const getMembers = createAsyncThunk('members/getMembers', getAllMembers);

const getMemberbyId = createAsyncThunk('members/getMember', getMemberById);

const updateMember = createAsyncThunk(
  'members/updateMember',
  async ({ id, data }) => {
    const req = await updateMemberById(id, data);
    return req;
  },
);

const createMember = createAsyncThunk('members/addNewMember', addMember);

const deleteMember = createAsyncThunk('members/deleteMember', deleteMemberById);

const changeMember = createAsyncThunk('members/modifyMember', modifyMember);

export {
  getMembers,
  getMemberbyId,
  updateMember,
  createMember,
  deleteMember,
  changeMember,
};
