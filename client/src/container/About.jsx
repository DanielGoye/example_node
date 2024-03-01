/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";
import { AppWrap, MotionWrap } from "../wrapper";
import axios from "axios";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  const getAbouts = async () => {
    try {
      const results = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/api/abouts`
      );
      setAbouts(results.data.data);
    } catch (error) {
      console.log(new Error(error).message);
    }
  };

  useEffect(() => {
    getAbouts();
  }, []);

  return (
    <div className={`app__container`}>
      <div id="about" className={styles.app__about}>
        <h2 className="head-text">
          Elevating <span>Ideas</span> through Code:{" "}
          <span>Your Vision, My Expertise</span>
        </h2>
        <div className={styles.app__profiles}>
          {abouts.map((about, index) => {
            const parts = about.imgUrl.split("/");
            const imgId = parts.pop();
            return (
              <motion.div
                key={about.title + index}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className={styles.app__profile_item}
              >
                <img
                  src={`https://res.cloudinary.com/dhb2zvszq/image/upload/q_auto:eco/v1690652757/Porfolio/${imgId}`}
                  alt={about.title}
                />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {about.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {about.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, styles.app__about),
  "about",
  "app__whitebg"
);
