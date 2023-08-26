import { configureStore} from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong, resetSong } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie, resetMovie } from "./slices/movieSlice";

//import { reset } from "./actions";  // recordar agregar reset al export

//aqui es donde se difinen los states de mi app, songsSlice.reducer hace referencia al Slice donde se encuentran todos los microreducers.

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

//--------------------------------------------------------------------
//console.log(songsSlice.actions.addSong()); // devuelve las funciones "action creator" que genera el slice, esta funcion espera recibir como variable el payload: actio(payload), esto es util porqeu devuelve la configuracion de type que generó el slice y el payload que tiene asignado {type: 'song/addSong', payload: undefined}. en este caso payload esta undefined porque no le pasé ningun valor. se usa como sigue.

/*

store.dispatch(
  songsSlice.actions.addSong("cancion de prueba") // con esta línea evito poner el objeto que sigue, esto me asegura que no cometa errores en el type. 
  
    //type: "song/addSong",
    //payload: "new Song",
}
  
);

*/

/*
console.log(JSON.stringify(store.getState())); //permite ver que hay en el state {songs:Array(0), movies:Array(0)} en este caso
*/

export { store };
export { addSong, removeSong, addMovie, removeMovie, resetMovie, resetSong } 

