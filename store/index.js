import { configureStore } from "@reduxjs/toolkit";
import blogReducer from './Blog/blog';

export const store = configureStore({
  reducer: {
    blogs: blogReducer
  }
});
