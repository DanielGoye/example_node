/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import axios from "axios";
import styles from "../../styles/Work.module.css";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(
          works.filter((work) => work.tags.some((tag) => tag.tag === item))
        );
      }
    }, 500);
  };

  const getWorks = async () => {
    const worksData = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/works`);
    setWorks(worksData.data.data);
    setFilterWork(worksData.data.data);
  };
  useEffect(() => {
    getWorks();
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span>
      </h2>
      <div className={styles.app__work_filter}>
        {["Web App", "React Js", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`${styles.app__work_filter_item} app__flex p-text ${
              activeFilter === item ? styles.item_active : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.app__work_portfolio}
      >
        {filterWork.map((work, index) => (
          <div key={index} className={`${styles.app__work_item} app__flex`}>
            <div className={`${styles.app__work_img} app__flex`}>
              <img src={work.imgURL} alt=""></img>
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeIn",
                  staggerChildren: 0.5,
                }}
                className={`${styles.app__work_hover} app__flex`}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                {!work.private && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>
            <div className={`${styles.app__work_content} app__flex`}>
              <h4 className="bold_text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className={`${styles.app__work_tag} app__flex`}>
                <p className="p-text">{work.tags[0].tag}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, styles.app__works),
  "work",
  "app__primarybg"
);
