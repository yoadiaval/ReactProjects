import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";


// custom Hook
export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        // algoritmo para detectar que el dispatch concluyó
        .unwrap() //le devuelve al dispatch la funcion normal de un Promise. (de no especificar elsto el .then() responde tanto si la request funcionó como si no)
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false)); //se ejecuta ya sea que haya funcionado la quequest o no
    },
    [dispatch, thunk]
  );
  return [runThunk, isLoading, error];
}
