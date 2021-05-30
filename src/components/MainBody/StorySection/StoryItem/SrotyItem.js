import classes from "./StoryItem.module.css";
import React from "react";

function SrotyItem(props) {
  return (
    <div className={classes.storyItem}>
      <img src={props.story} className={classes.story} alt='Story' />
      <div className={classes.profileInformation}>
        <img src={props.img} alt='Profile' />
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}

export default SrotyItem;
