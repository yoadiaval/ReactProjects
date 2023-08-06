import { useState } from "react";

function SideBar({ value, onSubmit, onChange, onChangeNumPages }) {
  const [title, setTitle] = useState("");

  //****NO funciona aun****//
  const [numPages, setNumPages] = useState(1200);
  const HandleNumPages = (event) => {
    setNumPages(event.target.value);
  };
  const handleSubmitNumPages = (event) => {
    event.preventDefault();
    onChangeNumPages(numPages);
  };
  //***********************//

  const HandlChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
  };

  const renderedGenre = value.map((genre) => {
    return <li onClick={() => onChange(genre)}>{genre}</li>;
  });

  return (
    <div>
      <div>
        <div className="mb-5 ">
          <select>
            <option value="0">Search a book By</option>
            <option value="title">Title</option>
            <option value="year">Year</option>
            <option value="isbm">ISBN</option>
            <option value="author">Author</option>
          </select>
          <form onSubmit={handleSubmit}>
            <input
              value={title}
              onChange={HandlChange}
              className="border rounded"
            />
          </form>
        </div>
        <div className="mb-5">
          <h3 className="font-bold">Filter by Page</h3>

          <form onSubmit={handleSubmitNumPages}>
            <input type="range" value={numPages} onChange={HandleNumPages} />
          </form>
        </div>
      </div>
      <div className="mb-5">
        <h2 className="font-bold">Filter By Genre</h2>
        <ul className="text-slate-500">{renderedGenre}</ul>
      </div>
      <button className="bg-red-600 text-white rounded mt-5 py-1 px-2">
        Clear All Filters
      </button>
    </div>
  );
}

export default SideBar;
