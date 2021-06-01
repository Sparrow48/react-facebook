import React from "react";
import classes from "./ActiveUser.module.css";

import { BiVideoPlus } from "react-icons/bi";
import ProfilePicture0 from "../../../assets/nasib2.png";
import ProfilePicture2 from "../../../assets/nayeem.png";
import ProfilePicture3 from "../../../assets/rahat.png";
import ProfilePicture4 from "../../../assets/nasib3.png";
import ProfilePicture5 from "../../../assets/hridoy.png";
import ProfilePicture6 from "../../../assets/mim.png";

function CreateRoom() {
  return (
    <div className={classes.activeUsers}>
      <div className={classes.createRoom}>
        <BiVideoPlus className={classes.createRoomIcon} />
        <p>Create Room</p>
      </div>
      <div className={classes.activeUserList}>
        <div className={classes.activeUser}>
          <img src={ProfilePicture6} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePicture3} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePicture5} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePicture6} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePicture4} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePicture0} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePicture2} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePicture0} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePicture3} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePicture2} alt='Profile_Image'></img>
        </div>
        <div className={classes.activeUser}>
          <img src={ProfilePicture4} alt='Profile_Image'></img>
        </div>
      </div>
    </div>
  );
}

export default CreateRoom;
