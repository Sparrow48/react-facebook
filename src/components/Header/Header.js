import React from "react";
import {
  FaSearch,
  FaHome,
  FaTv,
  FaStore,
  FaUsers,
  FaPlus,
  FaFacebookMessenger,
} from "react-icons/fa";
import { MdNotificationsNone, MdArrowDropDown } from "react-icons/md";
import { GiAbstract092 } from "react-icons/gi";
import profilePic from "../../assets/nasib.png";
import Logo from "../../assets/logo.png";

import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.navbar}>
      {/*  ------------------------Navbar left part----------------- */}
      <div className={classes.firstPart}>
        <a href='/'>
          <img src={Logo} alt='Facebook_Logo' />
        </a>
        <div className={classes.searchOption}>
          <FaSearch className={classes.icon} />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>

      {/*  ------------------------Navbar Middle part----------------- */}
      <div className={classes.middlePart}>
        <a href='/'>
          <FaHome className={classes.iconMiddle} />
        </a>
        <a href='/'>
          <FaTv className={classes.iconMiddle} />
        </a>
        <a href='/dd'>
          <FaStore className={classes.iconMiddle} />
        </a>
        <a href='/'>
          <FaUsers className={classes.iconMiddle} />
        </a>
        <a href='/'>
          <GiAbstract092 className={classes.iconMiddle} />
        </a>
      </div>

      {/*  ------------------------Navbar right part----------------- */}
      <div className={classes.lastPart}>
        <a href='/' className={classes.profileDetails}>
          <img src={profilePic} alt='Profile_picture' />
          <p>
            <span>
              <strong>Nasib</strong>
            </span>
          </p>
        </a>

        <a href='/'>
          <FaPlus className={classes.iconLast} />
        </a>
        <a href='/'>
          <FaFacebookMessenger className={classes.iconLast} />
        </a>
        <a href='/'>
          <MdNotificationsNone className={classes.iconLast} />
        </a>

        <a href='/'>
          <MdArrowDropDown className={classes.iconLast} />
        </a>
      </div>
    </div>
  );
}

export default Header;
