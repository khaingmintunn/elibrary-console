import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  emails: {
    byId: {},
    allIds: []
  },
  labels: [],
  isSidebarOpen: false,
  isComposeOpen: false
};

const slice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    // reducers methods
  }
});

export const { reducer } = slice;

export default slice;
