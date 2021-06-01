import React from "react";
import classes from "./PostBottom.module.css";

import { BiLike, BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

function FeedBottom(props) {
  return (
    <div className={classes.postBottom}>
      <div className={classes.postBottomReaction}>
        <Link to='/#'>
          <BiLike />
        </Link>
        <p>Like</p>
      </div>
      <div className={classes.postBottomReaction}>
        <Link to='/#'>
          <BiComment />
        </Link>

        <p>Comment</p>
      </div>
      <div className={classes.postBottomReaction}>
        <Link to='/#'>
          <RiShareForwardLine />
        </Link>

        <p>Share</p>
      </div>
      <div className={classes.profileInformation}>
        <img src={props.img} alt='Profile_Image' />
        <Link to='/#'>
          <MdArrowDropDown />
        </Link>
      </div>
    </div>
  );
}

export default FeedBottom;
