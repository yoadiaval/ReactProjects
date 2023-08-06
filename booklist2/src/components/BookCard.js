
function BookCard({ value }) {
  
  return (
    <div className="w-1/4 p-5 border rounded m-1 ">
      <figure className="w-28">
        <img
          className="object-fill"
          src={value.book.cover}
          alt="cover del libro"
        />
      </figure>
      <div className="font-bold">{value.book.title}</div>
      <div>{value.book.author.name}</div>
      <div className="text-slate-500">{value.book.genre}</div>
    </div>
  );
}

export default BookCard;
