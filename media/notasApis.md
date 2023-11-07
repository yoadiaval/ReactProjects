# REDUX TOOLKIT QUERY 

Se utiliza para crear una API (no está relacionada con el backend) en el lado cliente que provee una interface para fetch data del JSON server.
Al crear una Api tenemos de vuelta slice, algunos thunks, action creators y un set de hooks generados utomáticamente.

Pasos:
1. Identificar un grupo de peticiones relacionadas
   Ejemplo 
   albums: fetch albums, create albums, delete albums.
   son un conjunto de acciones relacionadas entre sí que ejecutaré sobre el objeto *album*
2. Hacer un archivo api para gestionar este grupo de peticiones. Ejemplo *albumApi.js*
   Si es primera vez: se crea carpeta *apis* dentro de *store* y dentro ubico *albumApi.js* y los demás que vaya a añadir.

   estructura general de *albumApi.js*
   ```javascript
      import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

      const albumsApi = createApi({
       
        }),

        endpoints(builder) {
            return{
                
            }
          
      });

      export const { useFetchAlbumsQuery } = albumsApi;
      export { albumsApi };

   ```
   

3. Add reducerPath. Se refiere a definir el nombre del lugar donde estarán almacenados todos los reducers
4. Add baseQuery lugar de den de la hapi realizará el fetch y demás peticiones (remove, add)
5. Add endPoints. Aquí se especifica como realizar las request.

contenido de *albumApi.js* completo
```javascript
   import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

      const albumsApi = createApi({
        reducerPath: "albums", //puedo especificar aquí el nombre que quiera.
        baseQuery: fetchBaseQuery({
          baseUrl: "http://localhost:3005",
        }),

        endpoints(builder) {
          return {
            fetchAlbums: builder.query({
              query: (user) => {
                return {
                  url: "/albums",
                  params: {
                    userId: user.id,
                  },
                  method: "GET",
                };
              },
            }),
          };
        },
      });

     
```

6. Exportar los hooks que se han creado automáticamente.
   
   ```javascript
      export const { useFetchAlbumsQuery } = albumsApi;
      export { albumsApi };

   ```
    
7. Conectar api al store (a traves del index.js dentro de la carpeta store). Especificar Reducer, middlewareand listeners.
  Agregar a store/index.js las lineas señaladas con -->
  
  ```javascript
    -->import {setupListeners} from '@reduxjs/toolkit/query';
    -->import {albumsApi} from './apis/albumsApi'; 
     
     export const store = configureStore({
     reducer: {
       users: usersReducer,
       -->[albumsApi.reducerPath]: albumsApi.reducer, //debe coincidir con el reducerPath especificado en albumsApi (albums). Para evitar errores pongo [albumsApi.reducerPath]
     },
       --> middleware: (getDefaultMiddleware) => {
             return getDefaultMiddleware().concat(albumsApi.middleware);
             }, //middleware se relaciona con tratamiento de errores, debe ser incluido para que funciones correctamente.
   });

    --> setupListeners(store.dispatch); //para evitar repetir codigo o algo así precisar. tiene que ver con createApi.

    export * from "./thunk/fetchUsers";
    export * from './thunk/addUser';
    export * from './thunk/removeUser';

     --> export { useFetchAlbumsQuery } from "./apis/albumsApi"; //paso 8 de createApi exportar los hooks

  ```
   Dentro de 
 
8. Export hooks desde store/index.js
9.  Usar en el componente. 
10. ´´´javascript
11.     const {data, error, isLoading}=useFetchAlbumsQuery(user);
12. ´´´ 

Ejemplo: al crear un api llamado *fetchAlbums* se puede acceder al hook: *useFetchAlbumQuery* que es creado automáticamente