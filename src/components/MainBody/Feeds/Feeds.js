import React, { Fragment } from "react";
import classes from "./Feeds.module.css";
import FeedTop from "./PostTop/PostTop";
import Reaction from "./UserReaction/UserReaction";
import FeedBottom from "./PostBottom/PostBottom";

import ProfilePicture0 from "../../../assets/nasib3.png";
import ProfilePicture1 from "../../../assets/hridoy.png";
import ProfilePicture2 from "../../../assets/mim.png";
import Minion from "../../../assets/minion.png";

function Feeds() {
  return (
    <Fragment>
      <div className={classes.feed}>
        <FeedTop img={ProfilePicture0} name='Abir Talukdar' time='1h' />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Reaction />
        <div className={classes.devider}></div>
        <FeedBottom img={ProfilePicture0} />
      </div>
      <div className={classes.feed}>
        <FeedTop img={ProfilePicture1} name='Md. Hridoy' time='1h' />
        <p>
          This movie was truly a timeless classic, one to be remembered for
          sure. it is a thought provoking cinematic masterpiece film, filled
          with suspense and incredible character development.{" "}
        </p>
        <img src={Minion} alt='Posted_Image' />
        <Reaction />
        <div className={classes.devider}></div>
        <FeedBottom img={ProfilePicture1} />
      </div>
      <div className={classes.feed}>
        <FeedTop img={ProfilePicture2} name='Mansura Mim' time='1h' />
        <img src={ProfilePicture2} alt='Posted_Image' />
        <Reaction />
        <div className={classes.devider}></div>
        <FeedBottom img={ProfilePicture2} />
      </div>
    </Fragment>
  );
}

export default Feeds;
