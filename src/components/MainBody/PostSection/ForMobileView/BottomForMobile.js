import React from "react";
import classes from "./BottomForMobile.module.css";

import { RiLiveLine } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

function BottomForMobile() {
  return (
    <div>
      <div className={classes.createPostBottom}>
        <div>
          <Link className={classes.createPostBottomItem}>
            <RiLiveLine className={classes.createPostBottomItemIconLive} />
            <p>Live</p>
          </Link>
        </div>
        <div className={classes.createPostBottomItem}>
          <IoMdPhotos className={classes.createPostBottomItemIconPhoto} />
          <p>photo</p>
        </div>
        <div className={classes.createPostBottomItem}>
          <BiVideoPlus className={classes.createPostBottomItemIconHappy} />
          <p>Room</p>
        </div>
      </div>
    </div>
  );
}

export default BottomForMobile;
