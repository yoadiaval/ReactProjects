# Ejemplo contador incremento decremento al que se le puede añadir un número entrado por formulario 

```javascript
import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    //parseInt para que reconozca que es un numero, parseInt(event.target.value) || 0 asigna cero en caso de que se intente poner string esto evita bugs porque el valor que se entre tiene que procesarlo y si no lo reconoce trae problemas 
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value)
  };
  const handleSubmit = (event) =>{
    event.preventDefault(0);
    setCount(count+valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Counter is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border bprder-gray-300"
        />

        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;

```