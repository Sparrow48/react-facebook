import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHome,
  FaTv,
  FaUsers,
  FaFacebookMessenger,
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { GiAbstract092 } from "react-icons/gi";
// import profilePic from "../../../assets/nasib.png";

import classes from "./NavForMobile.module.css";

function NavForMobile() {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 35) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <nav className={classes.navbar} onClick={() => window.scroll()}>
      <div className={classes.navTopPart}>
        <h1>facebook</h1>
        <div className={classes.topIcons}>
          <Link to='/'>
            <FaSearch className={classes.iconTop} />
          </Link>
          <Link to='/watch'>
            <FaFacebookMessenger className={classes.iconTop} />
          </Link>
        </div>
      </div>
      <div className={isSticky ? classes.fixed : classes.navBottomPart}>
        <Link to='/'>
          <FaHome className={classes.iconBottom} />
        </Link>
        <Link to='/groups/feed/'>
          <FaUsers className={classes.iconBottom} />
        </Link>
        <Link to='/watch'>
          <FaTv className={classes.iconBottom} />
        </Link>
        <Link to='/gaming'>
          <GiAbstract092 className={classes.iconBottom} />
        </Link>
        <Link to='/notificatio'>
          <MdNotificationsNone className={classes.iconBottom} />
        </Link>
        <Link to='/details' className={classes.imgBottom}>
          <AiOutlineMenu className={classes.iconBottom} />
          {/* <img src={profilePic} alt='profile' /> */}
        </Link>
      </div>
    </nav>
  );
}

export default NavForMobile;
