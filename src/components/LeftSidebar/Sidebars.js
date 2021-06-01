import React from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "./Sidebar/Sidebar";

import ProfileImage from "../../assets/nasib.png";
import Messenger from "../../assets/messanger.png";
import Friends from "../../assets/group1.png";
import MarketPlace from "../../assets/marketPlace1.png";
import Covid from "../../assets/corona.png";
import Watch from "../../assets/watch.png";
import classes from "./Sidebar.module.css";

function Sidebars() {
  return (
    <div className={classes.leftSidebar}>
      <Link to='/profile' className={classes.profileInfo}>
        <img src={ProfileImage} alt='profle' />
        <p>Nasib Sarkar</p>
      </Link>

      <LeftSidebar link='/messenger' img={Messenger} title='Messenger' />
      <LeftSidebar link='/groups' img={Friends} title='Groups' />
      <LeftSidebar link='/marketPlace' img={MarketPlace} title='MarketPlace' />
      <LeftSidebar link='/c19info' img={Covid} title='Covid Information' />
      <LeftSidebar link='/watch' img={Watch} title='Watch' />
      <LeftSidebar link='/messenger' img={Messenger} title='Messenger' />
      <LeftSidebar link='/groups' img={Friends} title='Groups' />
      <LeftSidebar link='/marketPlace' img={MarketPlace} title='MarketPlace' />
      <LeftSidebar link='/c19info' img={Covid} title='Covid Information' />
      <LeftSidebar link='/watch' img={Watch} title='Watch' />
      <LeftSidebar link='/messenger' img={Messenger} title='Messenger' />
      <LeftSidebar link='/groups' img={Friends} title='Groups' />
      <LeftSidebar link='/marketPlace' img={MarketPlace} title='MarketPlace' />
      <LeftSidebar link='/c19info' img={Covid} title='Covid Information' />
      <LeftSidebar link='/watch' img={Watch} title='Watch' />
      <LeftSidebar link='/c19info' img={Covid} title='Covid Information' />
      <LeftSidebar link='/watch' img={Watch} title='Watch' />
      <LeftSidebar link='/messenger' img={Messenger} title='Messenger' />
      <LeftSidebar link='/groups' img={Friends} title='Groups' />
      <LeftSidebar link='/marketPlace' img={MarketPlace} title='MarketPlace' />
      <LeftSidebar link='/c19info' img={Covid} title='Covid Information' />
      <LeftSidebar link='/watch' img={Watch} title='Watch' />
    </div>
  );
}

export default Sidebars;
