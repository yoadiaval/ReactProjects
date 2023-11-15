import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

//ONLY FOR DEV------//
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
//-----------------------//

const albumsApi = createApi({
  reducerPath: "albums", //puedo especificar aquí el nombre que quiera.
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",

    //GENERA UN RETARDO PARA QUE SE VEA COMO APARECE EL SIMBOLO DE CARGAR AL PRESIONAR ADD ALBUM
    fetchFn: async (...args) => {
      //REMOVE FOR PRODUCTION
      await pause(1000);
      return fetch(...args);
    },
  }),

  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "UsersAlbums", id: user.id }];
        }, //es como ponerle una etiqueta al fetch para luego regresar y actualizar la lista de albums cuando se agrege uno nuevo.
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),

      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          const tags = result.map((album)=>{
            return{ type:'Album', id:album.id};
          });
          tags.push({type:'UsersAlbums', id:user.id});
          return tags;
        }, //Agrega una etiqueta dinámica para identificar las peticiones para luego repetir la peticion cuando se agrege un nuevo album
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

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
