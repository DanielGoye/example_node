import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMediaSmall = () => {
  return (
    <div className="app__social app__social_small">
      <a href="https://github.com/DanielGoye" target="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-goye-7418b5198/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href="https://instagram.com/superdev_dan?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMediaSmall;
