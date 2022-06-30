import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import usersSlice from "./slices/UsersSlice";
import commentsSlice from "./slices/CommentsSlice";
import thunk from "redux-thunk";

export const store = configureStore(
  {
    reducer: {
      users: usersSlice,
      comments: commentsSlice,
    },
  },
  applyMiddleware(thunk)
);
