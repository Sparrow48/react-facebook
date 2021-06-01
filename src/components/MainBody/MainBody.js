import React from "react";
import classes from "./MainBody.module.css";

import Story from "./StorySection/Story";
import CreatePost from "./PostSection/CreatePost";
import ActiveUsers from "./ActiveUsers/ActiveUser";
import Feeds from "./Feeds/Feeds";

function MainBody() {
  return (
    <div className={classes.mainContent}>
      <div className={classes.storyForDesktop}>
        <Story />
      </div>
      <CreatePost />
      <ActiveUsers />
      <div className={classes.storyForMobile}>
        <Story />
      </div>
      <Feeds />
    </div>
  );
}

export default MainBody;
