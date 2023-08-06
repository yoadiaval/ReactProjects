import BookList from "./components/BookList";
import SideBar from "./components/SideBar";
import Header from "./components/header";
import { library } from "./data";
import { useState } from "react";

const allGenre = ["all", ...new Set(library.map((item) => item.book.genre))];
const numberPages = [...new Set(library.map((item) => item.book.pages))]

function App(){
  const [booklist, setBookList] = useState(library);
  const [genre, setGenre] = useState(allGenre);

  console.log(numberPages);

  const FilterGenre=(genre)=>{
    if(genre === "all"){
      setBookList(library)
      return;
    }
    const newBookList = library.filter((book)=>{return book.book.genre === genre}) 
    setBookList(newBookList)
  }

  const FilterTitle = (title) => {
    if (title === "all") {
      setBookList(library);
      return;
    }
    const newBookList = library.filter((book) => {
      return book.book.title.toUpperCase() === title.toUpperCase();
    });
    setBookList(newBookList);
  };

  const FilterPage = (numberOfPage) => {
    if (numberOfPage >= 1200) {
      setBookList(library);
      return;
    }
    const newBookList = library.filter((book) => {
      return book.book.pages <= numberOfPage;
    });
    setBookList(newBookList);
  };



    return (
      <div className="grid grid-cols-4 gap-y-5 w-4/5 m-auto">
        <div className="col-span-4">
          <Header />
        </div>
        <div className="col-span-1">
          <SideBar
            value={genre}
            onSubmit={FilterTitle}
            onChange={FilterGenre}
            onChangeNumPages={FilterPage}
          />
        </div>
        <div className="col-span-3">
          <BookList value={booklist} />
        </div>
      </div>
    );
}
export default App;
