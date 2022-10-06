import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => (
  <div className="header__socials">
    <a href="https://linkedin.com" target="_blank">
      <BsLinkedin />
    </a>
    <a href="https://github.com" target="_blank">
      <BsGithub />
    </a>
    <a href="https://dribble.com" target="_blank">
      <BsTwitter />
    </a>
  </div>
);

export default HeaderSocials;
