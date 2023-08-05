import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
function Card({value}) {
    const [content, setContent] = useState(value.info)
    const [show, setShow] = useState(false)

    
    const handleClick=()=>{
        setShow(!show)
    }
    let showContent = content;
    let icon = <IoIosRemoveCircle onClick={handleClick} />;
  if (show === false) {
    showContent = [];
    icon = <IoIosAddCircle onClick={handleClick} />;
  }
  
  
    return (
      <div className="m-5 border p-5 shadow-lg">
        <div className="flex place-items-center justify-between">
          <div className="font-bold">{value.title}</div>
          <div>{icon}</div>
        </div>
        <div className="mt-2">{showContent}</div>
      </div>
    );
   
}

export default Card;
