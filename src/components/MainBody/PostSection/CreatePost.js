import React from "react";
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
        <input type='text' placeholder='Whats on your mind, Nasib?' />
      </div>
      <div className={classes.devider}></div>
      <div className={classes.createPostBottom}>
        <div>
          <Link className={classes.createPostBottomItem}>
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
  );
}

export default CreatePost;
