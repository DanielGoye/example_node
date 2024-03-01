/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../wrapper";
import styles from "../../styles/Footer.module.css";
import axios from "axios";

const Footer = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setformData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (
      formData.name.length <= 0 ||
      formData.email.length <= 0 ||
      formData.message.length <= 0
    ) {
      alert("Please fill in all the fields");
      setLoading(false);
      return;
    }
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/contacts`,
        formData
      );
      setLoading(false);
      setIsFormSubmitted(true);
    } catch (error) {
      const err = new Error(error);
      console.log(err.message);
    }
  };

  return (
    <>
      <h2 className="head__text">
        Let&apos;s turn your vision into reality. Connect with me today.
      </h2>
      <div className={styles.app__footer_cards}>
        <div className={styles.app__footer_card}>
          <img src="images/email.png" alt="email" />
          <a href="mailto:danielgoye92@gmail.com" className="p-text">
            danielgoye92@gmail.com
          </a>
        </div>
        <div className={styles.app__footer_card}>
          <img src="images/mobile.png" alt="mobile" />
          <a href="tel:+254716105417" className="p-text">
            +254716105417
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className={`${styles.app__footer_form} app__flex`}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              value={formData.message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, styles.app__footer),
  "contact",
  "app__primarybg"
);
