import { useState, useContext } from "react";
import BooksContext from "../context/Books";

function SideBar() {
  const { genre, FilterGenre, FilterByPage, FilterBySelection, clear } =
    useContext(BooksContext);
  const renderedGenre = genre.map((genre) => {
    return (
      <li onClick={() => FilterGenre(genre)}>
        <div>{genre}</div>
      </li>
    );
  });
  const [numPages, setNumPages] = useState(1200);
  const [valueSelection, setValueSelection] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Nothing selected");

  const HandleNumPages = (event) => {
    setNumPages(event.target.value);
    FilterByPage(numPages);
  };

  const handleSelection = (event) => {
    const newPlaceHolder = event.target.value;
    setPlaceHolder(newPlaceHolder);
  };

  const HandlChange = (event) => {
    setValueSelection(event.target.value);
    FilterBySelection(event.target.value, placeHolder);
  };
  const handleClear = () => {
    setValueSelection("");
    setPlaceHolder("");
    setNumPages(1200);
    clear();
  };
  return (
    <div className="mt-5">
      <div>
        <div className="mb-5 ">
          <select
            onChange={handleSelection}
            className="font-bold border rounded bg-slate-200"
          >
            <option value="Nothing selected">Search a book By</option>
            <option value="title">Title</option>
            <option value="year">Year</option>
            <option value="ISBN">ISBN</option>
            <option value="author">Author</option>
          </select>
          <input
            onChange={HandlChange}
            placeholder={`Enter: ${placeHolder}`}
            value={valueSelection}
            className="mt-2 border rounded"
          />
        </div>
        <div className="mb-5">
          <h3 className="font-bold">Filter by Page</h3>
          <input
            type="range"
            min="0"
            max="1200"
            value={numPages}
            onChange={HandleNumPages}
          />
          <p>Valor actual: {numPages}</p>
        </div>
      </div>
      <div className="mb-5">
        <h2 className="font-bold">Filter By Genre</h2>
        <ul className="text-slate-500">{renderedGenre}</ul>
      </div>
      <button
        onClick={handleClear}
        className="bg-red-600 text-white rounded mt-5 py-1 px-2"
      >
        Clear All Filters
      </button>
    </div>
  );
}

export default SideBar;
