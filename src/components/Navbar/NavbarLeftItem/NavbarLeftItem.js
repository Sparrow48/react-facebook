import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import ProfileImage from "../../../assets/nasib.png";
import classes from "./NavbarLeftItem.module.css";

function NavbarLeftItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <li className={classes.iconList}>
        <a href='/#' className={classes.icons} onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && <Dropdown icon={ProfileImage}>My Profile</Dropdown>}
      </li>
    </div>
  );
}

export default NavbarLeftItem;
