
import { useState, useEffect } from "react";
function useCounter(initialCount) {
  const [counter, setCounter] = useState(initialCount);
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const indrement = () => {
    setCounter(counter + 1);
  };

  return {
    counter,
    indrement,
  };
}
export default useCounter;