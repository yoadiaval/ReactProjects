import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimals() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  const handleEvent = () => {
    setAnimals([...animals, getRandomAnimals()]); //es equivalente a usar animals.push(getRandomAnimals()) pero se usa asi para no modificar el estado.
  };

  //Genera una lista de componentes segun el tipo de animal.
  const renderedAnimals = animals.map((animals, index) => {
    return <AnimalShow type={animals} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleEvent}> Add Animals </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
