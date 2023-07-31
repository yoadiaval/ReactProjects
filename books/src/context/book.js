import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  //utilizar use callback con [] como segundo argumento permite que se se ignore la posicion en memoria de la funcion en el segundo renderizado, de esta forma useEffect no se ejecuta nuevamente pues no detecta un cambio en la funcion 
  //Cada vez que se hace un fetch de datos se actualiza el state(los datos son almacenados en otra posicion y esto se intepreta como un cambio) y esto hace que se ejecute el useEffeectde nuevo porque ve que un elemento en una dependencia de array ha cambiado, precisamente esto lo resuelve el hook useCallback.
  //Se utiliza como sigue y previamente es necesario importarlo. 
  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  },[]);

  const createBook = async (title) => {
    const respons = await axios.post("http://localhost:3001/books", { title });
    const updatedBooks = [...books, respons.data];
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };


const valueToShare = {
  books,
  fetchBooks,
  createBook,
  editBookById,
  deleteBookById,
};


  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}
export { Provider };
export default BooksContext;
