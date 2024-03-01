/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbar_logo}>
        <img src="images/logo.png" alt="logo" />
      </div>
      <ul className={styles.app__navbar_links}>
        {["home", "about", "work", "skills", "contact"].map((item, index) => {
          return (
            <li key={`link-${item}`} className="app__flex p-text">
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
      <div className={styles.app__navbar_menu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map(
                (item, index) => {
                  return (
                    <li key={item} className="app__flex p-text">
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
