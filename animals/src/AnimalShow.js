import "./AnimalShow.css";
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

/*Creo un objeto para asignar a variables estas imagenes.
 dentro del objeto, cada linea es equivalente a poner 

 const svgMap = {
    bird : bird,
    cat : cat,
    cow : cow,
    dog : dog,
    gator : gator,
    horse : horse,
};

Cdo la propiedad y el valor es el mismo puedo abreviar el código poniendo solo el nombre.
*/
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setclicks] = useState(0);
  const handleClick = () => {
    setclicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animals" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
