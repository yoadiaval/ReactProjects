import CardForm from "./components/CardForm";
import CardList from "./components/CarList";
import CardSearch from "./components/CardSearch";
import CarValue from "./components/CardValue";

function App() {
  return (
    <div className="container is-fluid">
      <CardForm />
      <CardSearch />
      <CardList />
      <CarValue />
    </div>
  );
}

export default App;
