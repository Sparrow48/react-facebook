import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import React from "react";

function Sidebar(props) {
  return (
    <div className={classes.leftSidebarItem}>
      <Link to={props.link}>
        <img src={props.img} alt={props.title} />
        <p>{props.title}</p>
      </Link>
    </div>
  );
}

export default Sidebar;
