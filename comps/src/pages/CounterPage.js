import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

//Estas variables se utilizan como convencion para prevenir bugs unicamente. Es posible pasar directamente los strings pero si me equivocara el programa no correr'ia y seria dificil ubicar el error, por el contrario si lo coloco dentro de variables al escribir mal la variable  react si lo especifica diciendol=me que la variable no esta definida.
const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change-value-to-add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";


//...state es importante agregarlo para tener en cuenta todas las props de mi state en caso de que no se modifiquen 
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
      case ADD_VALUE_TO_COUNT:
        return{
            ...state,
            count: state.count + state.valueToAdd,
            valueToAdd: 0 

        }
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    //parseInt para que reconozca que es un numero, parseInt(event.target.value) || 0 asigna cero en caso de que se intente poner string esto evita bugs porque el valor que se entre tiene que procesarlo y si no lo reconoce trae problemas
    const value = parseInt(event.target.value) || 0;
    //setValueToAdd(value)

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault(0);
    //setCount(count+valueToAdd);
    //setValueToAdd(0);
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Counter is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
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
