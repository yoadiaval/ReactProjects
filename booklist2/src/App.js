import BookList from "./components/BookList";
import SideBar from "./components/SideBar";
import Header from "./components/header";
import { library } from "./data";
import { useState } from "react";
const allGenre = ["all", ...new Set(library.map((item) => item.book.genre))];
const numberPages = [...new Set(library.map((item) => item.book.pages))];

function App() {
  const [booklist, setBookList] = useState(library);
  const [genre, setGenre] = useState(allGenre);

  const FilterGenre = (genre) => {
    if (genre === "all") {
      setBookList(library);
      return;
    }
    const newBookList = library.filter((book) => {
      return book.book.genre === genre;
    });
    setBookList(newBookList);
  };

  const FilterTitle = (value, placeHolder) => {
    
    const newBookList = library.filter((book) => {
      return book.book[placeHolder].toString().toUpperCase() === value.toUpperCase();
    });
    setBookList(newBookList);
  };

  const FilterPage = (numberOfPage) => {
    const newBookList = library.filter((book) => {
      return book.book.pages <= numberOfPage;
    });
    setBookList(newBookList);
  };

  const organize = (criteriaSort) => {
    const newBookList = [...library];
    if (criteriaSort === "az") {
      newBookList.sort((a, b) => a.book.title.localeCompare(b.book.title));
    } else if (criteriaSort === "za") {
      newBookList.sort((a, b) => b.book.title.localeCompare(a.book.title));
    }
    setBookList(newBookList);
  };

  const clear=()=>{
     setGenre(allGenre);
     setBookList(library)
  }

  return (
    <div className="grid grid-cols-4 gap-y-5 w-4/5 m-auto">
      <div className="col-span-4">
        <Header />
      </div>
      <div className="col-span-1">
        <SideBar
          genre={genre}
          onSubmit={FilterTitle}
          onChange={FilterGenre}
          onChangeNumPages={FilterPage}
          clear={clear}
        />
      </div>
      <div className="col-span-3">
        <BookList value={booklist} organize={organize} />
      </div>
    </div>
  );
}
export default App;
