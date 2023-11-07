import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query';
import {usersReducer} from "./slices/userSlice";
import {albumsApi} from './apis/albumsApi'; 

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer, //debe coincidir con el reducerPath especificado en albumsApi (albums). Para evitar errores pongo [albumsApi.reducerPath]
  },
  middleware: (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(albumsApi.middleware);
  }, //middleware se relaciona con tratamiento de errores, debe ser incluido para que funciones correctamente.
});

setupListeners(store.dispatch); //para evitar repetir codigo o algo así precisar. tiene que ver con createApi.

export * from "./thunk/fetchUsers";
export * from './thunk/addUser';
export * from './thunk/removeUser';
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumsApi"; //paso 8 de createApi exportar los hooks