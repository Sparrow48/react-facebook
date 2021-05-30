import React from "react";
import classes from "./PostBottom.module.css";

import { BiLike, BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";

function FeedBottom(props) {
  return (
    <div className={classes.postBottom}>
      <div className={classes.postBottomReaction}>
        <BiLike />
        <p>Like</p>
      </div>
      <div className={classes.postBottomReaction}>
        <BiComment />
        <p>Comment</p>
      </div>
      <div className={classes.postBottomReaction}>
        <RiShareForwardLine />
        <p>Share</p>
      </div>
      <div className={classes.profileInformation}>
        <img src={props.img} alt='Profile_Image' />
        <MdArrowDropDown />
      </div>
    </div>
  );
}

export default FeedBottom;
