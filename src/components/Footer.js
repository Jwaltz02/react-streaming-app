import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsInstagram className="social-icons" />
        <BsFacebook className="social-icons" />
        <BsTwitter className="social-icons" />
        <BsLinkedin className="social-icons" />
      </div>
      <p
        style={{
          fontFamily: "Monospace",
          color: "white",
          paddingBottom: "10px",
        }}>
        {" "}
        &copy; 2024 Netflix, inc.
      </p>
    </div>
  );
}

export default Footer;
