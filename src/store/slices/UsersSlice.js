import { createSlice } from "@reduxjs/toolkit";
const initialState = { users: [], pages: null, isLoading: false };

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload.filteredData;
      if (action.payload.pageLength) {
        state.pages = action.payload.pageLength;
      }
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getUsers, isLoading } = usersSlice.actions;

export default usersSlice.reducer;
