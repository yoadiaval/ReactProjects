import Review from "./Review";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { useState } from "react";
import data from "./data";

function App() {
  const [changeData, setChangeData] = useState(data[0]);
  const [count, setCount] = useState(0);

  const handleClickLeft = () => {
    if (count === 0) {
      return setCount(data.length - 1);
    }
    setCount(count - 1);
    setChangeData(data[count]);
  };

  const handleClickRight = () => {
    if (count === data.length - 1) {
      return setCount(0);
    }
    setCount(count + 1);
    setChangeData(data[count]);
  };
  const randomReview = () => {
    setChangeData(data[Math.floor(Math.random() * data.length)]);
  };

  return (
    <div className="bg-white rounded drop-shadow-lg w-128 h-96 p-5 text-center mx-auto mt-20 hover:drop-shadow-xl">
      <Review value={changeData} />

      <div className="mt-5 flex justify-center">
        <div className="text-fuchsia-900 text-2xl" onClick={handleClickLeft}>
          <GoChevronLeft />
        </div>
        <div className="text-fuchsia-900 text-2xl">
          <GoChevronRight onClick={handleClickRight} />
        </div>
      </div>
      <button
        className="text-xs text-indigo-500 bg-indigo-300 rounded px-2 py-1 mt-5 hover:bg-fuchsia-900 hover:text-white hover:drop-shadow-lg"
        onClick={randomReview}
      >
        Surprise Me
      </button>
    </div>
  );
}

export default App;
