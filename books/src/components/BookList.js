import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-hooks-context";

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;
