# Redux
    Es una libreria para manejar states utilizando la misma tecnica de useReducer.
    A diferencia de reduce no solo se manejarán los states semejantes sino todos los states.
    Uno de los beneficios de implementar Redux es la posibilidad de tener un punto central para manejar los cambios de estados

    # conceptos importantes 

    **Redux store**: Objeto que contiene todos los *states*

    debugging actions:
    `store.getState()` devuelve que estado existe en store

    Pasos:
    1. Crear carpeta store dentro de src.
    2. Dentro crea archivo index.js que llevará todo el código redux, se llamaría igual que el fichero raiz de mi proyecto.

    ```javascript
    import { configureStore, createSlice } from "@reduxjs/toolkit";

       //Aqui se definen los estados iniciales y los microreducers que luego formarán el reducer.
       const songsSlice = createSlice({
         name: "song",
         initialState: [],
         reducers: {
           addSong(state, action) {
           },
           removeSongs(state, action) {
           }
         }
       });

       const store = configureStore({
         reducer: {songs: songsSlice.reducer}
       });

       export {store};
       export const { addSong } = songsSlice.actions;
    ```


    3. En el fichero raiz index.js
    import { Provider } from "react-redux";
    import { store } from "./store";

    - Envolver <App /> en el <Provider> y pasarle store como parametro
    - 
    ``` javascript
       root.render(
         <Provider store={store}>
           <App />
         </Provider>
       );
    ```

    En el componente en cuestion   
    import {useDispatch} from 'react-redux';
    import { addSong } from '../store'; 

    Primera linea dentro de la funcion de mi componente
    const dispatch = useDispatch();

    Dentro de la funcion que maneja el cambio de state 
    dispatch(addSong(song))
    Se le pasa song como parámetro pues en este caso lo requiere.


  