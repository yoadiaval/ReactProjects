import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedItem, setExpandedItem] = useState(-1);
  const handleClick = (nextIndex) => {
    if (expandedItem === nextIndex) {
      setExpandedItem(-1);

    } else {setExpandedItem(nextIndex)};
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedItem;
    const icon = (
      <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={item.id}>
        {/*SImre que trabajo con un listado debo agregar la key al componente que engloba mi lista */}
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {/*Es importante declarar onClick de esta forma, las arrow funcion son funciones que se crean al instante de llamarlas a diferencia del otro tipo*/}
          {item.label}
          {icon}
        </div>
        <div>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
        {/* esta condicional retorna el primer valor falso "por convenio". dado qeu React no renderiza valores como true, false, null, undefined el resultado de esto es mostrar index.content segun convenga*/}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
