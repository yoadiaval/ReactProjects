import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();
function NavigationProvider({ children }) {
 
 // el único objetivo de este State es controlar el back y el forward
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

 useEffect(()=>{
   const handler = () => {
     setCurrentPath(window.location.pathname);
   };
   // Detecta el cambio de un path a otro, cada vez que se detecta se llama a la funcion handler para que configure el current path con el nuevo path. Esto permite Controlar el fordward and back de la navegacion
   window.addEventListener("popstate", handler);
   return () => {
     window.removeEventListener("popstate", handler);
   };
 },[])

 //Actualiza la direccion evitando el refresh de la pagina 
const navigate = (to) =>{
  window.history.pushState({}, '', to);
  setCurrentPath(to);
};


  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  );
} 

export {NavigationProvider}
export default NavigationContext;