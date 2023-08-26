import { createSlice } from "@reduxjs/toolkit";
//import { reset } from "../actions";

/*
Funcion del slice:
-define el estado inicial
-combina mini-reducers en un gran reducer
-crea un set de funciones "action creator" (estas funciones son las que dhacen que se retornen type='song/payload', esto esta por detras de escena no sobrepensarlo hace esto y ya esta)
*/

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
    //indica que tambien tenga en cuenta una entrega de dispatch movie/reset. De esta forma elimino el numero de dispatch que mando en App.
    /*extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      });
    },*/
    
    resetMovie(state, action) {
      return [];
    },
  },
});

export const {addMovie, removeMovie, resetMovie} = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;