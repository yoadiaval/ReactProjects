import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },

    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetSong(state, action) {
      return [];
    },
  },
});

export const { addSong, removeSong, resetSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
