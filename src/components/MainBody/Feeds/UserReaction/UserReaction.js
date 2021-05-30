import React from "react";
import classes from "./UserReaction.module.css";

import { BiLike } from "react-icons/bi";

function UserReaction() {
  return (
    <div className={classes.reactionSection}>
      <div className={classes.countLike}>
        <BiLike className={classes.likeIcon} />
        <p>110</p>
      </div>
      <p>150 Comments</p>
      <p>50 Shares</p>
    </div>
  );
}

export default UserReaction;
