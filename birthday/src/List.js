import { data } from "./data";
import { useState } from "react";

function List() {
const [listPeople, setListPeople] = useState([...data])
const [show, setShow] = useState(true)

const renderedData = listPeople.map((person) => {
  return (
    <div key={person.id} className="flex items-center mt-5">
      <figure className="w-20 h-20">
        <img
          className="w-full h-full object-cover rounded-full"
          src={person.image}
          alt="imagen de la persona"
        />
      </figure>
      <div className="ml-5">
        <div className="text-xl font-bold">{person.name}</div>
        <div>{person.age}</div>
      </div>
    </div>
  );
});

let content = renderedData;
let contentButton = "Clear All";
if(show===false){
    content = <div className="text-center">0 items shown</div>; 
    contentButton="show" ;
}

const handleClick = () => {
  setListPeople([]);
  setShow(!show)
};
  return (
    <div>
      {content}
      <button
        onClick={handleClick}
        className=" hover:bg-sky-700 ease-in duration-200 block w-11/12 bg-pink-600 rounded mt-5 mx-auto text-white "
      >
        {contentButton}
      </button>
    </div>
  );
}

export default List;
