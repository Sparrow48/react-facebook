import React from "react";
import classes from "./ActiveUser.module.css";

import { BiVideoPlus } from "react-icons/bi";
import ProfilePic from "../../../assets/nasib2.png";

function CreateRoom() {
  return (
    <div className={classes.activeUsers}>
      <div className={classes.createRoom}>
        <BiVideoPlus className={classes.createRoomIcon} />
        <p>Create Room</p>
      </div>
      <div className={classes.activeUserList}>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </div>
      </div>
    </div>
  );
}

export default CreateRoom;
