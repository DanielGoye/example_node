/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../wrapper";
import axios from "axios";
import styles from "../../styles/Testimonials.module.css";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const getData = async () => {
    const testimonialsData = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/testimonials`
    );
    const brandsData = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/brands`);
    setTestimonials(testimonialsData.data.data);
    setBrands(brandsData.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className={`${styles.app__testimonial_item} app__flex`}>
            <img src={testimonials[currentIndex].imageURL} alt="" />
            <div className={styles.app__testimonial_content}>
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className={`${styles.app__testimonial_btns} app__flex`}>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className={`${styles.app__testimonials_brands} app__flex`}>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, styles.app__testimonials),
  "testimonials",
  "app__primarybg"
);
