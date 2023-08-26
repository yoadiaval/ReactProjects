import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../../data";
import { addSong, removeSong } from "../store/main";

function ListSong() {
  const dispatch = useDispatch();

  const moviePlayList = useSelector((state) => {
    return state.songs;
  });
  const handleSongAdd = (song) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };
  const renderedListOfSongs = moviePlayList.map((song) => {
    return (
      <li key={Math.floor(1000*Math.random())}>
        {song}
        <button onClick={()=>handleSongRemove(song)}>x</button>
      </li>
    );
  });

  return (
    <div>
      <h1 className="font-xl">Song Playlist</h1>
      <button
        onClick={() => handleSongAdd(createRandomSong())}
        className="bg-blue-600"
      >
        {" "}
        + Add Song to Playlist
      </button>
      {renderedListOfSongs}
    </div>
  );
}

export default ListSong;
