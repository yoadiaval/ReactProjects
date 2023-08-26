import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../../data";
import { addMovie, removeMovie } from "../store/main";

function ListMovie() {
    const dispatch = useDispatch(); //esto permite el acceso al dispatch dentro del store Redux
    const moviePlayList= useSelector((state)=>{
        return state.movies
    })

  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie))
  };

  const handleMovieAdd = (movie ) => {
     const action = addMovie(movie); //genera el contenido que voy a enviar al dispatch para accceder al redux store y agregar la cancion ***esta accion en sí no agrega la cacion
     dispatch(action) //modifica la cancion accediendo al state
    
  };

  const renderedlist = moviePlayList.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button onClick={()=>handleMovieRemove(movie)}>x</button>
      </li>
    );
  });
  return (
    <div>
      <h1 className="font-xl">Movie Playlist</h1>
      <button
        onClick={() => handleMovieAdd(createRandomMovie())}
        className="bg-blue-600"
      >
        {" "}
        + Add Movie to Playlist
      </button>
      <ul>{renderedlist}</ul>
    </div>
  );
}

export default ListMovie;
