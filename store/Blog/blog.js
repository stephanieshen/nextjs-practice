import { createSlice } from "@reduxjs/toolkit";

const blogState = {
  blogs: []
}

const blogSlice = createSlice({
  name: 'blog',
  initialState: blogState,
  reducers: {

  }
});

export const blogActions = blogSlice.actions;

export default blogSlice.reducer;
