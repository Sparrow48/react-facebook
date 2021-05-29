import classes from "./Dropdown.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Dropdown(props) {
  return (
    <div className={classes.dropdown}>
      <Link href='/#'>
        <img src={props.icon} alt='Profile' />
        <p>{props.children}</p>
      </Link>
      <Link href='/#'>
        <img src={props.icon} alt='Profile' />
        <p>{props.children}</p>
      </Link>
      <Link href='/#'>
        <img src={props.icon} alt='Profile' />
        <p>{props.children}</p>
      </Link>
      <Link href='/#'>
        <img src={props.icon} alt='Profile' />
        <p>{props.children}</p>
      </Link>
    </div>
  );
}

export default Dropdown;
