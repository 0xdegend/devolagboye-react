import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        delayChildren: 0.2,
        staggerChildren: 0.2,
        duration: 2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: -10 },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="contact-container"
    >
      <div className="contact-details">
        <div className="contact-text">
          <motion.h5 variants={item}>
            Hi there, if you will be looking into connecting with me, we can
            connect and follow each-other on{" "}
            <a
              href="https://twitter.com/devolagboye"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{" "}
            I post about Tech and Frontend and my lifestyle, we can collaborate
            on{" "}
            <a
              href="https://github.com/0xdegend"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            or you can shoot me a{" "}
            <a href="mailto:akingbolaola@gmail.com">Mail</a>
          </motion.h5>
        </div>
        <div className="contact-text">
          <motion.h5 variants={item}>
            I recently got interested in Open Source as well as Web3 if you will
            be looking into us collaborating on a project feel free to reach me
            on any of the platform above.
            <br />
          </motion.h5>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
