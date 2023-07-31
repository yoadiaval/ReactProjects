import axios from "axios";
import BookList from "./components/BookList";
import BookSelected from "./components/BookSelected";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const fetchList = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/library");
    setBooks(response.data);
  }, []);                                                                 

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const handleChanges = async (id, index) => {
    const url = "http://localhost:3001/library";
    const response = await axios.get(url);
    const findBook = response.data.find((item) => {
      return item.book.ISBN === id;
    });
    findBook.show = false;
    
    console.log(index)
    console.log(books);
  };

  return (
    <div>
      <h1 className="mb-5 text-2xl">Lista de libros existentes</h1>
      <BookList value={books} onChange={handleChanges} />
      <h1 className="mb-5 text-2xl">Libros seleccionados</h1>
      <BookSelected />
    </div>
  );
}

export default App;
