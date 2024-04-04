import React from "react";
import "../styles/Navbar.css";
import LogoNetflix from "../assets/LogoNetflix.png";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLinks } from "../helpers/NavLinks.js";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left-side">
        <div
          className="logo"
          style={{ backgroundImage: `url(${LogoNetflix})` }}></div>
        <ul className="nav-list">
          {" "}
          {NavLinks.map((x, key) => {
            return (
              <li className="nav-links" key={key}>
                {x}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-right-side">
        <IoSearch className="search-button" />
        <IoMdNotificationsOutline />
        <FaRegUser />
        <IoMdArrowDropdown className="arrow-dropdown" />
      </div>
    </div>
  );
}

export default Navbar;
