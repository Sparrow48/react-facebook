import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import classes from "./RightSidebar.module.css";

import { FaSearch } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import ProfilePicture from "../../assets/nasib.png";

function RightSidebar() {
  return (
    <div className={classes.rightSidebar}>
      <div className={classes.rightSidebarTitle}>
        <h3>Contacts</h3>
        <div className={classes.RightSidebarIcons}>
          <Link to='/#'>
            <BiVideoPlus />
          </Link>
          <Link to='/#'>
            <FaSearch />
          </Link>
          <Link to='/#'>
            <BsThreeDots />
          </Link>
        </div>
      </div>
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />

      {/*---------------------------------------------------*/}
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture} title='Nasib Sarkar' />
      <Sidebar img={ProfilePicture} title='Nayeem M. Muzahid' />
    </div>
  );
}

export default RightSidebar;
