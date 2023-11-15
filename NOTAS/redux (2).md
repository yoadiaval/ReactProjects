# **useReducer**

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

1.  `npm i @reduxjs/toolkit`, `npm i react-redux`, `npm i redux` (verificar si este ultimo es imprescindible)
2.  Crear carpeta store y dentro main.jsx (se llama igual que el archivo raiz). Ver en detalle más adelante
3.  Conectar React a Redux
    -import 'store' del fichero main.jsx
    -import {store} y Provider en main.jsx
    ```javascript
    import { Provider } from "react-redux";
    import { store } from "./store/main.jsx";
    ```
    -envolver App en el provider
    ```javascript
    <Provider store={store}>
      <App />
    </Provider>
    ```

## Contenido del fichero de Redux main.jsx

(código comentado en proyecto manageListRedux)

```javascript
import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },

    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

store.dispatch(songsSlice.actions.addSong("Some song"));

export { store };
export const { addSong } = songsSlice.actions;
```

    # conceptos importantes

    **Redux store**: Objeto que contiene todos los *states*

## En el componente en el que se va a usar

```javascript
import { useDispatch, useSelector } from "react-redux"; //ponerlo encima del todo
```

# Cronograma de trabajo para modificar los estados a traves de Redux

1. Add del reducer que se encarga de modificar el state dentro del Slice (en el ejemplo addSong, removeSong)
2. Exportar el creador del action (en el ejemplo addSong y removeSong --se llaman igual que lo reducer)
3. Dentro del componente donde lo voy a utilizar importar:
   -useDispatch, useSelector
   -actioncreator
4. Llamar al useDispatch hook para tener acceso a la funcion dispatch.
   Ponerlo en la primera línea dentro del componente.
   `const dispatch = useDispatch();`
5. Utilizar el dispatch para modificar el state. Ejemplo:

```javascript
const handleMovieRemove = (movie) => {
  dispatch(removeSong(movie));
};
```

6. Recuperar el conteniso de la variable del state con el hook _useSelector_

```javascript
const moviePlayList = useSelector((state) => {
  return state.movie;
});
```

## Aspectos a tener en cuenta

-Teoria sobre como proceder de forma eficiente para modificar varios estados a la vez: UDEMY (Modern React with Redux ) 314 y 315 .

-Estructura de las carpetas (functional, or por features). Udemy 319 (Modern React with Redux )
\*recomendado hacerlo por functional aunque Redux recomiende por "features" porque Redux Toolkit da problema a veces con esta organización.
\*\*\*NO RECOMENDABLE importar los reducers directamente en ell componente (ver video)
