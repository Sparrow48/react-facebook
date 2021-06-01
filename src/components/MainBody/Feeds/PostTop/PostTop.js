import React from "react";
import classes from "./PostTop.module.css";

import { BsThreeDots } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

function PostTop(props) {
  return (
    <div className={classes.postTop}>
      <Link to='/profileImage'>
        <img src={props.img} alt='Profile_Image' />
      </Link>

      <div className={classes.postTopDetails}>
        <Link to='/profile'>
          <p className={{ textDecoration: "none", color: "white" }}>
            {props.name}
          </p>
        </Link>
        <div className={classes.postTopDetailsItem}>
          <p>{props.time}</p>
          <BiWorld />
        </div>
      </div>
      <Link to='/#'>
        <BsThreeDots className={classes.postTopIcon} />
      </Link>
    </div>
  );
}

export default PostTop;
