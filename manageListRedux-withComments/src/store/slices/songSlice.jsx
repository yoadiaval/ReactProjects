import { createSlice } from "@reduxjs/toolkit";
//import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    //'song' + '/' + 'addSong' = 'song/addSong' => type del dispatch
    addSong(state, action) {
      //STATE NO ALMACENA EL OBJETO STATE EN SU TOTALIDAD, SOLO CONTINE LA PARTE DEL STATE CON LA QUE SE EST'A TRABAJANDO EN ESTE CASO "song"
      state.push(action.payload);
    },
    //'song' + '/' + 'removeSong' = 'song/removeSong' => type del dispatch
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    //indica que tambien tenga en cuenta una entrega de dispatch movie/reset. De esta forma elimino el numero de dispatch que mando en App.
   /* extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      });
    },*/

    resetSong(state, action){
      return []
    }
  },
});

export const {addSong, removeSong, resetSong} =  songsSlice.actions;
export const songsReducer = songsSlice.reducer;