import {configureStore, createSlice} from "@reduxjs/toolkit"


/*
Funcion del slice:
-define el estado inicial
-combina mini-reducers en un gran reducer
-crea un set de funciones "action creator" (estas funciones son las que dhacen que se retornen type='song/payload', esto esta por detras de escena no sobrepensarlo hace esto y ya esta)
*/

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
      state.splice(index,1);
    },
  },
});

//aqui es donde se difinen los states de mi app, songsSlice.reducer hace referencia al Slice donde se encuentran todos los microreducers.

const store = configureStore({
    reducer:{
        songs: songsSlice.reducer
    }
})


//--------------------------------------------------------------------
console.log(songsSlice.actions.addSong()) // devuelve las funciones "action creator" que genera el slice, esta funcion espera recibir como variable el payload: actio(payload), esto es util porqeu devuelve la configuracion de type que generó el slice y el payload que tiene asignado {type: 'song/addSong', payload: undefined}. en este caso payload esta undefined porque no le pasé ningun valor. se usa como sigue.

/*

store.dispatch(
  songsSlice.actions.addSong("cancion de prueba") // con esta línea evito poner el objeto que sigue, esto me asegura que no cometa errores en el type. 
  
    //type: "song/addSong",
    //payload: "new Song",
}
  
);

*/

/*
const startingState = store.getState();
console.log(JSON.stringify(startingState));

const finalState = store.getState();
console.log(JSON.stringify(finalState)); 
*/

export { store }
export const { addSong, removeSong } = songsSlice.actions;