import BookShow from "./BookShow";

function BookList({ value, onChange }) {
  const renderedList = value.map((book) => {
    return (
      <div key={book.book.ISBN} className="mb-5">
        <BookShow id={book.book.ISBN} onChange={onChange} value={book} />
      </div>
    );
  });
  return <div>{renderedList}</div>;
}

export default BookList;