import classes from "./MainBody.module.css";
import React from "react";
import Story from "./StorySection/Story";
import CreatePost from "./PostSection/CreatePost";

function MainBody() {
  return (
    <div className={classes.mainBody}>
      <Story />
      <CreatePost />
    </div>
  );
}

export default MainBody;
