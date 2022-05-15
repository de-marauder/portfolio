import React from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from "file-saver";

import ResumeImg from "../../assets/images/resume.png";
import classes from "../Projects/Projects.module.css";
import classes1 from "../About/About.module.css";
import classes2 from "./Resume.module.css";
// import resume from "../../assets/resume.pdf";

export default function Resume() {
  // const saveFile = () => {
  //   saveAs("https://drive.google.com/file/d/1MN3ozejC3crc7dsCGYEj7iIq8D10y-db/view?usp=sharing", "resume.pdf");
  // };

  return (
    <motion.div
      className={`${classes.Projects} ${classes2.ResumePage}`}
      style={{ minHeight: "100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, animation: { delay: 1 } }}
    >
      <div className={classes2.Resume}>
        <h1 className={classes.Title}>Resume</h1>
        <div className={classes2.ResumeWrapper}>
          <a href="https://docs.google.com/document/d/1HDpmbY8s7qLaIyYm92ZZ10H8vGfphV391jEx11TtcaA/edit?usp=sharing" target="_blank" className={classes2.Download}>
            <AiOutlineDownload />
            <p className={classes1.P}>Download</p>
          </a>
          <img className={classes2.ResumeImg} src={ResumeImg} alt="resume" />
        </div>
      </div>
      <div className={`${classes.svgContainer} ${classes2.svg}`}></div>
    </motion.div>
  );
}
