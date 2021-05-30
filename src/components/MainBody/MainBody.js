import classes from "./MainBody.module.css";
import React from "react";
import Story from "./StorySection/Story";

function MainBody() {
  return (
    <div className={classes.mainBody}>
      <Story />
    </div>
  );
}

export default MainBody;
