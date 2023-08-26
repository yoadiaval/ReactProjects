import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetMovie(state, action) {
      return [];
    },
  },
});

export const { addMovie, removeMovie, resetMovie } = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;
