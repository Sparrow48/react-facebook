import React from "react";
import classes from "./PostTop.module.css";

import { BsThreeDots } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

function PostTop(props) {
  return (
    <div className={classes.postTop}>
      <img src={props.img} alt='Profile_Image' />
      <div className={classes.postTopDetails}>
        <p>{props.name}</p>
        <div className={classes.postTopDetailsItem}>
          <p>{props.time}</p>
          <BiWorld />
        </div>
      </div>
      <BsThreeDots />
    </div>
  );
}

export default PostTop;
