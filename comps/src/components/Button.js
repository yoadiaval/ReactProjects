import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest //es un objeto que agrupa todo el resto de propiedades que le pueda pasar al componente button especialmente para poder manejar los eventos de una forma eficiente
}) {

  //personaliza los estilos segun el tipo de button.
  //1er argumento: propiedades base
  //2do argumento: objeto condicional, solo se ejecutará key cuya prop (primary, secondary, success, warning o danger) sea true. No es necesario poner ej: primary===true pues para react no hace falta especificarlo
  //rest.className lo incluyo para poder agregar otros className al button sin que se sobrescriban las propiedades a causa del className que se genera con el return de este componente, de esta forma si quiero agregar alguna caracter'istica especial al componente en APP ej className="mb-5" esta no se sobreescribirá.
  const classes = className(rest.className, "flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-400 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-white text-neutral-800": outline,

    //no me funciona revisar por qué
    /*
    "text-blue-500": outline && primary,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-400": outline && warning,
    "text-red-500": outline && danger,*/
  });
  return <button {...rest} className={classes}>{children}</button>;
}

//Prop-types Validacion de propiedades que son pasadas al componentes para detectar cuando hay un conflicto
Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }) => {
    //Number(!!prop) devuelve por definicion 0, si la suma de todas esas expresiones da mayor que uno es que a mas de una se le dio el valor de true.
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
