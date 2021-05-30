import React from "react";

import StoryItem from "./StoryItem/SrotyItem";
import classes from "./Story.module.css";

import ProilePic1 from "../../../assets/nasib.png";

import Story1 from "../../../assets/story1.png";
import Story2 from "../../../assets/story2.png";
import Story3 from "../../../assets/story3.png";
import { Link } from "react-router-dom";

function Story() {
  return (
    <div>
      <Link className={classes.storySection}>
        <StoryItem story={Story1} name='Nasib Sarkar' img={ProilePic1} />
        <StoryItem story={Story2} name='Nasib Sarkar' img={ProilePic1} />
        <StoryItem story={Story3} name='Nasib Sarkar' img={ProilePic1} />
        <StoryItem story={Story2} name='Nasib Sarkar' img={ProilePic1} />
        <StoryItem story={Story3} name='Nasib Sarkar' img={ProilePic1} />
      </Link>
    </div>
  );
}

export default Story;
