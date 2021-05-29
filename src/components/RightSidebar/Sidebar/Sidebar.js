import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";

function Sidebar(props) {
  return (
    <div className={classes.rightSidebarItem}>
      <Link to='/'>
        <img src={props.img} alt={props.title} />
        <p>{props.title}</p>
      </Link>
    </div>
  );
}

export default Sidebar;
