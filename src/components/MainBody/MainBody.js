import React from "react";
import classes from "./MainBody.module.css";

import Story from "./StorySection/Story";
import CreatePost from "./PostSection/CreatePost";
import ActiveUsers from "./ActiveUsers/ActiveUser";
import Feeds from "./Feeds/Feeds";

function MainBody() {
  return (
    <div className={classes.mainBody}>
      <Story />
      <CreatePost />
      <ActiveUsers />
      <Feeds />
      <Feeds />
      <Feeds />
    </div>
  );
}

export default MainBody;
