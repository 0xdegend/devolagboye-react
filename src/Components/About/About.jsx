import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import firstAboutImage from "../../assets/images/devolagboye.jpg";
import myOutingImage from "../../assets/images/myouting-devolagboye.JPG";
import myDevFestImage from "../../assets/images/devolagboye-devfest.JPG";
import einpunkFavIcon from "../../assets/images/Einpunk Logo white.png";
import cocoinFavIcon from "../../assets/images/cocoin fav.png";
import devolagboyeFavIcon from "../../assets/images/profile-pic.JPG";
import devOlagboyeInBlack from "../../assets/images/devolagboye-in-black.jpg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: aboutPhoto, inView: isPhotoInView } = useInView();
  const { ref: aboutText, inView: isTextInView } = useInView();
  const { ref: firstAboutText, inView: isFirstTextInView } = useInView();
  const { ref: secondAboutText, inView: isSecondTextInView } = useInView();
  const { ref: thirdAboutText, inView: isThirdTextInView } = useInView();
  const { ref: lastAboutText, inView: isLastTextInView } = useInView();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        delayChildren: 0.1,
        staggerChildren: 0.1,
        duration: 1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const imagesContainer = {
    nonVisible: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        delayChildren: 0.2,
        staggerChildren: 0.2,
        duration: 2,
      },
    },
  };
  const imagesItems = {
    nonVisible: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="about-container">
      <motion.div
        variants={imagesContainer}
        initial="nonVisible"
        animate="visible"
        className="about-image-container"
        ref={aboutPhoto}
      >
        <div
          className={
            isPhotoInView
              ? "about-first-image animate-photo"
              : "about-first-image animate-photo"
          }
        >
          <motion.img
            variants={imagesItems}
            drag
            src={firstAboutImage}
            alt=""
          />
        </div>
        <div
          className={
            isPhotoInView
              ? "about-second-image animate-photo-2"
              : "about-first-image animate-photo-2"
          }
        >
          <motion.img variants={imagesItems} drag src={myOutingImage} alt="" />
        </div>
        <div
          className={
            isPhotoInView
              ? "about-third-image animate-photo-3"
              : "about-first-image animate-photo-3"
          }
        >
          <motion.img
            variants={imagesItems}
            drag
            src={devOlagboyeInBlack}
            alt="devOlagboye-In-Black"
          />
        </div>
        <div
          className={
            isPhotoInView
              ? "about-fourth-image animate-photo-4"
              : "about-first-image animate-photo-4"
          }
        >
          <motion.img variants={imagesItems} drag src={myDevFestImage} alt="" />
        </div>
      </motion.div>
      <div className="about-me-container">
        <div className="about-me-title">
          <motion.img
            drag
            src={devolagboyeFavIcon}
            alt=""
            className="mobile-profile"
          />
          <h5>About me</h5>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="about-me-details"
        >
          <h5
            variants={item}
            ref={firstAboutText}
            className={
              isFirstTextInView
                ? "about-work animate-first-about-text"
                : "about-work"
            }
          >
            <span>Hi there!</span> I'm Olagboye, a Frontend engineer with
            passion & love for designs and its aesthetics. I am a lover of
            minimal, simple and smooth interfaces.
          </h5>
          <h5
            ref={aboutText}
            variants={item}
            className={
              isTextInView ? "about-work animate-about-text" : "about-work"
            }
          >
            I currently work remotely at{" "}
            <a
              href="https://www.sportrex.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sportrex
            </a>{" "}
            , an all-in-one decentralised GameFi, Play-to-Earn platform built on
            Multichain networks with Metaverse experience.
          </h5>
          <h5
            className={
              isSecondTextInView
                ? "about-work animate-second-about-text"
                : "about-work"
            }
            ref={secondAboutText}
          >
            I am seeking new opportunities to advance my career, my ultimate
            goal is to contribute to innovative solutions that align with my
            passions and emback on a new and exciting journey.
          </h5>
          <h5
            ref={thirdAboutText}
            variants={item}
            className={
              isThirdTextInView
                ? "about-work animate-third-about-text"
                : "about-work"
            }
          >
            I am a lover of good designs, as well as stress-free UX, I love
            working with good UI/UX designers as well as coordinated and united
            team for growth, been opportune to work with some in the team as
            well as from the{" "}
            <a href="https://figma.com/community">Figma Community.</a>
          </h5>
          <h5
            ref={lastAboutText}
            variants={item}
            className={
              isLastTextInView
                ? "animate-last-about-text about-work"
                : "about-work"
            }
          >
            I love action games, football, as well as traveling and adventures,
            when I am outside of work.
          </h5>
        </motion.div>
      </div>
      <div className="connect-container">
        <div className="connect-title">
          <h5>Connect</h5>
        </div>
        <div className="connect-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:akingbolaola@gmail.com"
          >
            Email
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/devolagboye"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/0xdegen"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/olagboye-seyi"
          >
            Linkedin
          </a>
        </div>
      </div>
      <div className="side-projects-container">
        <div className="side-projects-title">
          <h5>Side Projects</h5>
        </div>
        <div className="side-projects">
          <h5>Worked on some other side projects live on Github</h5>
          <div className="list-project-container">
            <a
              href="https://github.com/Einpunk-Protocol/Einpunk-Token-landing-page"
              target="blank"
              className="list-project-link"
            >
              <div className="list-project-logo">
                <img src={einpunkFavIcon} alt="Einpunk Logo" />
              </div>
              <div className="list-project-details">
                <h5 className="list-project-title">Einpunk Token Protocol</h5>
                <p className="list-project-description">
                  Einpunk Token Protocol landing page was built with React and
                  AntUI.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/Akingbola1234/devolagboye-react"
              target="blank"
              className="list-project-link"
            >
              <div className="list-project-logo">
                <img src={devolagboyeFavIcon} alt="Dev Olagboye Profile" />
              </div>
              <div className="list-project-details">
                <h5 className="list-project-title">Dev Olagboye Portfolio</h5>
                <p className="list-project-description">
                  My Portfolio here was built with React and AntUI.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/Akingbola1234/cocoin-dapp-homepage"
              target="blank"
              className="list-project-link"
            >
              <div className="list-project-logo">
                <img src={cocoinFavIcon} alt="Cocoin Fav Icon" />
              </div>
              <div className="list-project-details">
                <h5 className="list-project-title">
                  Cocoin Community Landing Page
                </h5>
                <p className="list-project-description">
                  Cocoin Community Landing Page was build with React and AntUI
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
