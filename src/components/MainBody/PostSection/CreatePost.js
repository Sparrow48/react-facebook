import React from "react";

import BottomForMobile from "./ForMobileView/BottomForMobile";
import classes from "./CreatePost.module.css";

import { RiLiveLine } from "react-icons/ri";
import { IoMdPhotos, IoMdHappy } from "react-icons/io";
import ProfilePic from ".././../../assets/nasib.png";
import { Link } from "react-router-dom";

function CreatePost() {
  return (
    <div className={classes.createPost}>
      <div className={classes.createPostTop}>
        <img src={ProfilePic} alt='profile_pic' />
        <input type='text' placeholder="What's on your mind, Nasib?" />
      </div>
      <div className={classes.devider}></div>
      <div className={classes.forDesktop}>
        <div className={classes.createPostBottom}>
          <div>
            <Link to='/#' className={classes.createPostBottomItem}>
              <RiLiveLine className={classes.createPostBottomItemIconLive} />
              <p>Live Video</p>
            </Link>
          </div>
          <div className={classes.createPostBottomItem}>
            <IoMdPhotos className={classes.createPostBottomItemIconPhoto} />
            <p>photo/Video</p>
          </div>
          <div className={classes.createPostBottomItem}>
            <IoMdHappy className={classes.createPostBottomItemIconHappy} />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>

      <div className={classes.forMobile}>
        <BottomForMobile />
      </div>
    </div>
  );
}

export default CreatePost;
