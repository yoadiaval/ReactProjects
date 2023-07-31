import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  /*Use effect para que se cierre el dropdown do hago click fuera de él, la funcion que retorna es un "cleanup" esto borra el evento click porque una vez que se cierre ya no necesito que se est'e escuchando el click*/
  
  useEffect(()=>{
    const handler = (event)=>{
        /*el siguiente if es una buena pr'actica paea en caso de que no haya referencia que asignar se salga y evitar peque;os bugs*/
        if(!divEl.current){
            return;
        }
        if(!divEl.current.contains(event.target)){
            setIsOpen(false);
        }
    };
    document.addEventListener("click", handler, true);
    return()=>{
        document.removeEventListener("click", handler);
    }
  },[]);


  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "select..."}
        <GoChevronDown className="text-lg"/>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
