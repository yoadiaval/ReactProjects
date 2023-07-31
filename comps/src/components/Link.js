import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    'text-blue-500', 
    className,
    currentPath === to && activeClassName
    
    );
  const handleClick = (event) => {
    event.preventDefault();
    //Este if se utiliza para que al hacer click + ctrol y windos key,  en el link se abra en otra ventana además de esto en el elemento a agrego un href={to}
    if (event.metaKey || event.ctrKey) {
      return;
    }
    
    //Cambia la direccion en la barra de navegación evitando el refresh
    //de esta forma se crea la ilusion de navegación, el "to" contiene el nuevo path.
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
