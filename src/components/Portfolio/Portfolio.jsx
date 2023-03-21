import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="https://img.freepik.com/free-psd/mexican-traditional-dishes-restaurant-landing-page_23-2148486808.jpg?size=626&ext=jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="https://img.freepik.com/free-psd/american-food-style-stationery_23-2148473308.jpg?size=626&ext=jpg" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
