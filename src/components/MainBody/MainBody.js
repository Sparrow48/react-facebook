import classes from "./MainBody.module.css";
import React from "react";
import Story from "./StorySection/Story";
import CreatePost from "./PostSection/CreatePost";
import ActiveUsers from "./ActiveUsers/ActiveUser";

function MainBody() {
  return (
    <div className={classes.mainBody}>
      <Story />
      <CreatePost />
      <ActiveUsers />
    </div>
  );
}

export default MainBody;
