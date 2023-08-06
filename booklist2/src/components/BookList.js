
import BookCard from "./BookCard";
import { PiListBold } from "react-icons/pi";
import { GrApps } from "react-icons/gr";

function BookList({value}) {
  const totalBooks = value.length;
  const renderedList = value.map((book,index)=>{
    return <BookCard key={index} value={book}/>
  })
  return (
    <div>
      <div className="ml-3 flex items-center">
        <GrApps className="m-2 text-2xl p-1 border" />
        <PiListBold className="text-2xl px-1  m-2 border" />
        <div className="ml-7 text-sm">{totalBooks} Books Shown</div>
        <hr className="w-96 ml-2 mr-2 " />
        <div className="text-sm">Sort By</div>
        <select className="ml-2">
          <option>Title(A-Z)</option>
          <option>Title(Z-A)</option>
        </select>
      </div>
      <div className="flex flex-wrap h-full">{renderedList}</div>;
    </div>
  );
}

export default BookList;
