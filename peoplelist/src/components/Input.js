import className from "classnames";

function Input({ children, type, value, onChange, name, ...rest }) {
  const classes = className(rest.className, "mb-5 block border rounded");
  return <input onChange={onChange} value={value} type={type} name={name} className={classes}/>;
}

export default Input;
