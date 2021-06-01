import React from "react";
import classes from "./ActiveUser.module.css";
import { BiVideoPlus } from "react-icons/bi";
import ProfilePic from "../../../assets/nasib2.png";
import { Link } from "react-router-dom";
function CreateRoom() {
  return (
    <div className={classes.activeUsers}>
      <Link to='/#' className={classes.createRoom}>
        <BiVideoPlus className={classes.createRoomIcon} />
        <p>Create Room</p>
      </Link>
      <div className={classes.activeUserList}>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
        <Link to='/#' className={classes.activeUser}>
          <img src={ProfilePic} alt='Profile_Image'></img>
        </Link>
      </div>
    </div>
  );
}

export default CreateRoom;
