import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import heart from "../../assets/heart.png"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import calories from "../../assets/calories.png"
import {motion} from "framer-motion"
import NumberCounter from "number-counter"

const Hero = () => {
  const transition = {type : "spring", duration : 3}
  const mobile = window.innerWidth<=768 ? true : false
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial = {{left : mobile ? "145px" : "187px"}}
            whileInView = {{left : "8px"}}
            transition={{...transition, type : "tween"}}
          ></motion.div>
          <span>The best gym in whole town.</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter start={100} end={144} delay="4" preFix="+"/> </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span><NumberCounter start={100} end={970} delay="4" preFix="+"/> </span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter start={1} end={50} delay="4" preFix="+"/> </span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn more</button>
        </div>
      </div>

      {/* ------------ */}
      <div className="right-h">
        <button className="btn">Join now</button>
        <motion.div initial={{right : "-1rem"}} whileInView={{right : "4rem"}} transition={transition} className="heart-rate">
            <img src={heart} alt="error loading"/>
            <span>Heart Rate</span>
            <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="error loding" className="hero-image"/>
        <motion.img initial={{right : "11rem"}} whileInView={{right : "20rem"}} transition={transition} src={hero_image_back} alt="error loding" className="hero-image-back"/>

      {/* calories */}
      <motion.div initial={{right : "37rem"}} whileInView={{right : "28rem"}} transition={transition} className="calories">
        <img src={calories} alt="error loading"/>
        <div>
        <span>calories burned</span>
        <span>220 Kcal</span>
        </div>
      </motion.div>

      </div>
    </div>
  );
};

export default Hero;
