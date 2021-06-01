import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import classes from "./RightSidebar.module.css";

import { FaSearch } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import ProfilePicture0 from "../../assets/nasib2.png";
import ProfilePicture1 from "../../assets/hasan.png";
import ProfilePicture2 from "../../assets/nayeem.png";
import ProfilePicture3 from "../../assets/rahat.png";
import ProfilePicture4 from "../../assets/nasib3.png";
import ProfilePicture5 from "../../assets/hridoy.png";
import ProfilePicture6 from "../../assets/mim.png";

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
      <Sidebar img={ProfilePicture0} title='Hasib Sarkar' />
      <Sidebar img={ProfilePicture2} title='Nayeem M. Muzahid' />

      {/*---------------------------------------------------*/}
      <Sidebar img={ProfilePicture1} title='Hasan Mahmud' />
      <Sidebar img={ProfilePicture3} title='Md. Rahat Hasan' />
      <Sidebar img={ProfilePicture4} title='Abir Talukdar' />
      <Sidebar img={ProfilePicture5} title='Md. Rhidoy' />
      <Sidebar img={ProfilePicture6} title='Mansura Mim' />
      <Sidebar img={ProfilePicture1} title='Hasan Mahmud' />
      <Sidebar img={ProfilePicture3} title='Md. Rahat Hasan' />
      <Sidebar img={ProfilePicture0} title='Hasib Sarkar' />
      <Sidebar img={ProfilePicture2} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture4} title='Abir Talukdar' />
      <Sidebar img={ProfilePicture5} title='Md. Rhidoy' />
      <Sidebar img={ProfilePicture6} title='Mansura Mim' />
      <Sidebar img={ProfilePicture1} title='Hasan Mahmud' />
      <Sidebar img={ProfilePicture3} title='Md. Rahat Hasan' />
      <Sidebar img={ProfilePicture0} title='Hasib Sarkar' />
      <Sidebar img={ProfilePicture5} title='Md. Rhidoy' />
      <Sidebar img={ProfilePicture6} title='Mansura Mim' />
      <Sidebar img={ProfilePicture1} title='Hasan Mahmud' />
      <Sidebar img={ProfilePicture3} title='Md. Rahat Hasan' />
      <Sidebar img={ProfilePicture4} title='Abir Talukdar' />
      <Sidebar img={ProfilePicture5} title='Md. Rhidoy' />
      <Sidebar img={ProfilePicture6} title='Mansura Mim' />
      <Sidebar img={ProfilePicture1} title='Hasan Mahmud' />
      <Sidebar img={ProfilePicture3} title='Md. Rahat Hasan' />
      <Sidebar img={ProfilePicture0} title='Hasib Sarkar' />
      <Sidebar img={ProfilePicture2} title='Nayeem M. Muzahid' />
      <Sidebar img={ProfilePicture4} title='Abir Talukdar' />
    </div>
  );
}

export default RightSidebar;
