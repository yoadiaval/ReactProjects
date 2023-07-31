function BookShow({ value, id, onChange }) {
  const handleClick = () => {
    onChange(id);
  };
  return (
    <div>
      <div>{value.book.title}</div>
      <div>{value.book.author.name}</div>
      <div>{value.book.genre}</div>
      <div>{value.book.pages}</div>
      <div>{value.book.years}</div>
      <div>{value.book.synopsis}</div>
      <button
        className="ml-4 p-2 bg-slate-500 text-gray-50"
        onClick={handleClick}
      >
        Select
      </button>
    </div>
  );
}

export default BookShow;
