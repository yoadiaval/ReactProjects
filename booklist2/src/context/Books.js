import { createContext, useState } from "react";
import { library } from "../data";
const allGenre = ["all", ...new Set(library.map((item) => item.book.genre))];
//const numberPages = [...new Set(library.map((item) => item.book.pages))];

const BooksContext = createContext();

function Provider({ children }) {
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

  const FilterBySelection = (value, placeHolder) => {
   //Este if evita que salte error cdo no se selecciona nada, optimizarlo para que muestre una validacion de form en lugar de este truco
    if(placeHolder === "Nothing selected"){
    placeHolder = "title"
   }
    const newBookList = library.filter((book) => {
      return book.book[placeHolder]
        .toString()
        .toUpperCase()
        .match(value.toUpperCase());
    });
    setBookList(newBookList);
  };

  const FilterByPage = (numberOfPage) => {
    const newBookList = library.filter((book) => {
      return book.book.pages <= numberOfPage;
    });
    setBookList(newBookList);
  };

  const organize = (criteriaSort, value) => {
    const newBookList = [...value];
    if (criteriaSort === "az") {
      newBookList.sort((a, b) => a.book.title.localeCompare(b.book.title));
    } else if (criteriaSort === "za") {
      newBookList.sort((a, b) => b.book.title.localeCompare(a.book.title));
    }
    setBookList(newBookList);
  };

  const clear = () => {
    setGenre(allGenre);
    setBookList(library);
  };
  const valueToShare = {
    booklist,
    genre,
    FilterGenre,
    FilterBySelection,
    FilterByPage,
    organize,
    clear,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
