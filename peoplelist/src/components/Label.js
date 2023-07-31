import className from "classnames";

function Label({ children, ...rest }) {

    const classes = className(rest.className, "font-bold block");

  return <label className={classes}>{children}</label>;
}

export default Label;
