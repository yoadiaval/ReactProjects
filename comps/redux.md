# 13. **useReducer**
     Optimiza el *useState* porque relaciona los estados que tienen que ver entre si:
     -Ejemplo de uso `ver CounterPage`

      Descripción de la Aplicación: 
          -consta de dos states [count, setCount] ,  [valueToAdd, set ValueToAdd] 
          -Dado que el Count se ve modificado por el valueToAdd ambos se pueen integrar con la funcion reducer. 

    `import { useReduce } from React` 

    se definen variables con strings para identificar las modificaciones que quiero hacer a los states. Puedo asignar los strigs directamente a los dispatch pero de esta forma evito errores de spelling.
    ```javascript
      const INCREMENT_COUNT = "increment"; 
      const SET_VALUE_TO_ADD = "change-value-to-add";
      const DECREMENT_COUNT = "decrement";
      const ADD_VALUE_TO_COUNT = "add_value_to_count";
    ```
    
    Funcion reducer, con switch identifico las variables anteriores y dentro de cada una retorno la operacion que modifica los estados.
    ```javascript
    const reducer = (state, action) => {
      switch (action.type) {
        case INCREMENT_COUNT:
          return {
            ...state,
            count: state.count + 1,
          };
        case SET_VALUE_TO_ADD:
          return {
            ...state,
            valueToAdd: action.payload,
          };
        case DECREMENT_COUNT:
          return {
            ...state,
            count: state.count - 1,
          };
          case ADD_VALUE_TO_COUNT:
            return{
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0 

            }
        default:
          return state;
      }
    };

    ```

    Accedo a la funcion **reduce()** mediante el *dispatch* pasándole un object action 
    ```javascript
       dispatch({
          type: ADD_VALUE_TO_COUNT,
          payload: value
        })
  
    ```
        

    En este caso en payload paso el valor el valor que quiero adicionar. El dispatch incremento no necesitaria este valor porque solo se trata de incrementar el numero de la variable del *state* 

    El *dispatch* es el que llama al *reducer* y le pasa lo necesario para modificar el state en cuestion 

    ejemplo de uso dentro de react:

  ```javascript

      const handleSubmit = (event) => {
          event.preventDefault(0);
          //setCount(count + valueToAdd);
          //setValueToAdd(0);
          dispatch({
            type: ADD_VALUE_TO_COUNT,
          });
        };
  ```


# Redux

    Es una libreria para manejar states utilizando la misma tecnica de useReducer.
    A diferencia de reduce no solo se manejarán los states semejantes sino todos los states.
    Uno de los beneficios de implementar Redux es la posibilidad de tener un punto central para manejar los cambios de estados

    # conceptos importantes 

    **Redux store**: Objeto que contiene todos los *states*

    debugging actions: es una seccion de codigo para controlar y poder testear que state fue llamado
      
      
    `store.getState()` devuelve que estado existe en store

    Pasos:
    1. Crear carpeta store dentro de src.
    2. Dentro crea archivo index.js que llevará todo el código redux, se debe llamar igual que el fichero raiz de mi proyecto.

    ```javascript
    import { configureStore, createSlice } from "@reduxjs/toolkit";

       //Aqui se definen los estados iniciales y los microreducers que luego formarán el reducer.
       const songsSlice = createSlice({
         name: "song",
         initialState: [],
         reducers: {
           addSong(state, action) {
            //code...
           },
           removeSongs(state, action) {
            //code...
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
 1. 
    import { Provider } from "react-redux";
    import { store } from "./store";

    - Envolver <App /> en el <Provider> y pasarle store como parametro
  
    ``` javascript
       root.render(
         <Provider store={store}>
           <App />
         </Provider>
       );
    ```

 # En el componente en cuestion   
    `import {useDispatch} from 'react-redux';`
    `import { addSong } from '../store'; `

    Primera linea dentro de la función de mi componente
    const dispatch = useDispatch();

    Dentro de la funcion que maneja el cambio de state 
    dispatch(addSong(song))
    Se le pasa song como parámetro pues en este caso lo requiere.


  