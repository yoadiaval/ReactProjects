import ListMovie from "./components/ListMovie";
import ListSong from "./components/ListSong";


function App() {
  return (
    <div>
      <button>Reset Both Playlists</button>
      <hr />
      <ListMovie />
      <hr />
      <ListSong />
    </div>
  );
}

export default App;
