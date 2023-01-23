import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  BlogState,
  IBblog,
  Iuser,
  LoginPayloadAction,
} from "../types/blogState";

const initialState: BlogState = {
  theme: "dark",
  user: null,
  error: null,
  blogs: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<LoginPayloadAction>) => {
      const { credentials } = action.payload;
      state.user = credentials;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload.blogs;
    },

    changeTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { loginUser, logoutUser, setError, changeTheme, setBlogs } =
  blogSlice.actions;

export default blogSlice.reducer;
