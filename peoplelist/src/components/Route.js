import { useContext } from "react";
import NavigationContext from "../context/navegation";

//route retorna el hijo si coincide con el path que está recogiendo de lo contrario no retorna nada.
function Route({children, path}){
   const { currentPath } = useContext(NavigationContext);
    if(path===currentPath){
        return children; 
    }
   
    return null
}

export default Route;