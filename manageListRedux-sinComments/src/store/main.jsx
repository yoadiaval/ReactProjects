import { configureStore} from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong, resetSong } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie, resetMovie } from "./slices/movieSlice";


const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});


export { store };
export { addSong, removeSong, addMovie, removeMovie, resetMovie, resetSong } 

