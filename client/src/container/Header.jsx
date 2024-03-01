/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { SocialMedia, NavigationDots, SocialMediaSmall } from "../components";
import styles from "../../styles/Header.module.css";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="home" className={`app__container ${styles.home}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <div className={`${styles.app__header} app__flex`}>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className={styles.app__header_info}
          >
            <div className={styles.app__header_badge}>
              <div className={`${styles.badge_cmp} app__flex`}>
                <span>👋</span>
                <div style={{ marginLeft: 20 }}>
                  <p className="p-text">
                    Hello, I&apos;m{" "}
                    <span className={styles.head__text}>Daniel</span>
                  </p>
                </div>
              </div>
              <div className={`${styles.tag_cmp} app__flex`}>
                <p className="p-text">Web Developer</p>
                <p className="p-text">Freelancer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className={styles.app__header_img}
          >
            <img src="images/Avatar.png" alt="" />
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={styles.overlay_circle}
              src="images/circle.svg"
              alt="profile_circle"
            />
          </motion.div>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className={styles.app__header_circles}
          >
            {["images/react.png", "images/node.png", "images/flutter.png"].map(
              (circle, index) => {
                return (
                  <div className="circle_cmp app__flex" key={`circle-${index}`}>
                    <img src={circle} alt="circle"></img>
                  </div>
                );
              }
            )}
          </motion.div>
        </div>
        <div className="copyright">
          <p className="p-text">@2023 SUPERDEVDAN</p>
          <p className="p-text">All Rights Reserved</p>
        </div>
      </div>
      <NavigationDots active="home" />
    </div>
  );
};

export default Header;
