import { useState } from "react";
function Card({value}) {
    const [content, setContent] = useState(value.info)
    const [show, setShow] = useState(false)


    const handleClick=()=>{
        setShow(!show)
    }
    let showContent = content;
    if(show===false){
        showContent = [];
    }
    
  return (
    <div>
      <button onClick={handleClick}>show</button>  
      <div>{value.title}</div>
      <div>{showContent}</div>
    </div>
  );
   
}

export default Card;
