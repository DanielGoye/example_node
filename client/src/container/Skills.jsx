/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import styles from "../../styles/Skills.module.css";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const getSkills = async () => {
    const skillsData = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/skills`
    );
    const experiencesData = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/experiences`
    );
    setSkills(skillsData.data.data);
    setExperiences(experiencesData.data.data);
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      <h2 className="head-text">
        Skills{experiences.length > 0 && " & Experience"}
      </h2>
      <div className={styles.app__skills_container}>
        <motion.div className={styles.app__skills_list}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`${styles.app__skills_item} app__flex`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {experiences.length > 0 && (
          <motion.div className={styles.app__skills_exp}>
            {experiences.map((experience, index) => (
              <motion.div key={index} className={styles.app__skills_exp_item}>
                <div className={styles.app__skills_exp_year}>
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className={styles.app__skills_exp_works}>
                  {experience.works.map((work) => (
                    <div key={work.name}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className={`${styles.app__skills_exp_work} app__flex`}
                        data-tip
                        data-for={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, styles.app__skills),
  "skills",
  "app__whitebg"
);
