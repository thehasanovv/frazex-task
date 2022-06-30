import { createSlice } from "@reduxjs/toolkit";
const initialState = { comments: [], pages: null, isLoading: false };

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (state, action) => {
      state.comments = action.payload.filteredData;
      if (action.payload.pageLength) {
        state.pages = action.payload.pageLength;
      }
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getComments, isLoading } = commentsSlice.actions;

export default commentsSlice.reducer;
