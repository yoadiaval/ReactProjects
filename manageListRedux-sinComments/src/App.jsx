import { useDispatch } from "react-redux";
import ListMovie from "./components/ListMovie";
import ListSong from "./components/ListSong";
import { resetMovie } from "./store/main";
import { resetSong } from "./store/main";


function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(resetSong());
    dispatch(resetMovie());
  };
  return (
    <div>
      <button onClick={() => handleResetClick()}>Reset Both Playlists</button>
      <hr />
      <ListMovie />
      <hr />
      <ListSong />
    </div>
  );
}

export default App;
