import { useState } from "react";

function SideBar({ genre, onSubmit, onChange, onChangeNumPages, clear }) {
  const [value, setvalue] = useState("");
  const [placeHolder, setPlaceHolder] = useState("")

  
  const [numPages, setNumPages] = useState(1200);
  const HandleNumPages = (event) => {
    setNumPages(event.target.value);
    onChangeNumPages(numPages);
  };
  

  const HandlChange = (event) => {
    setvalue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value,placeHolder);
  };

  const renderedGenre = genre.map((genre) => {
    return <li onClick={() => onChange(genre)}>{genre}</li>;
  });

const handleSelection=(event)=>{
const newPlaceHolder = event.target.value;
setPlaceHolder(newPlaceHolder);
}

const handleClear=()=>{
  setvalue("")
  setPlaceHolder("")
  setNumPages(1200)
  clear()
}
  return (
    <div className="mt-5">
      <div>
        <div className="mb-5 ">
          <select
            className="font-bold border rounded bg-slate-200"
            onChange={handleSelection}
          >
            <option value="0">Search a book By</option>
            <option value="title">Title</option>
            <option value="year">Year</option>
            <option value="ISBN">ISBN</option>
            <option value="author">Author</option>
          </select>
          <form onSubmit={handleSubmit}>
            <input
              placeholder={`Enter: ${placeHolder}`}
              value={value}
              onChange={HandlChange}
              className="mt-2 border rounded"
            />
          </form>
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
