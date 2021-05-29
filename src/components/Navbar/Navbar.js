import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/home.svg";
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
import NavbarLeftItem from "./NavbarLeftItem/NavbarLeftItem";

import classes from "./Navbar.module.css";

function Header() {
  return (
    <nav className={classes.navbar}>
      {/*  ------------------------Navbar left part----------------- */}
      <div className={classes.firstPart}>
        <Link to='/'>
          <img src={Logo} alt='Facebook_Logo' />
        </Link>
        <div className={classes.searchOption}>
          <FaSearch className={classes.icon} />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>

      {/*  ------------------------Navbar Middle part----------------- */}
      <div className={classes.middlePart}>
        <Link to='/'>
          <FaHome className={classes.iconMiddle} />
        </Link>
        <Link to='/watch'>
          <FaTv className={classes.iconMiddle} />
        </Link>
        <Link to='/marketPlace'>
          <FaStore className={classes.iconMiddle} />
        </Link>
        <Link to='/groups/feed/'>
          <FaUsers className={classes.iconMiddle} />
        </Link>
        <Link to='/gaming'>
          <GiAbstract092 className={classes.iconMiddle} />
        </Link>
      </div>

      {/*  ------------------------Navbar right part----------------- */}
      <div className={classes.lastPart}>
        <Link to='/profile' className={classes.profileDetails}>
          <img src={profilePic} alt='Profile_picture' />
          <p>
            <span>
              <strong>Nasib</strong>
            </span>
          </p>
        </Link>
        <NavbarLeftItem icon={<FaPlus />} />
        <NavbarLeftItem icon={<FaFacebookMessenger />} />
        <NavbarLeftItem icon={<MdNotificationsNone />} />
        <NavbarLeftItem icon={<MdArrowDropDown />} />

        {/* <Link to='/'>
          <FaPlus className={classes.iconLast} />
        </Link>
        <Link to='/'>
          <FaFacebookMessenger className={classes.iconLast} />
        </Link>
        <Link to='/'>
          <MdNotificationsNone className={classes.iconLast} />
        </Link>

        <Link to='/'>
          <MdArrowDropDown className={classes.iconLast} />
        </Link> */}
      </div>
    </nav>
  );
}

export default Header;
