import React from "react";
import { motion } from "framer-motion";
import classes from "../Projects/Projects.module.css";
import classes2 from "./About.module.css";

export default function About() {
  return (
    <motion.div
      className={`${classes.Projects} ${classes2.AboutPage}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, animation: { delay: 1 } }}
    >
      <div className={`${classes.svgContainer} ${classes2.svg}`}></div>
      <div>
        <h1 className={classes.Title}>About</h1>
        <section className={classes2.about}>
          <section className={classes2.about_inner}>
            <div className={classes2.P_wrapper}>
              <motion.p
                className={classes2.P}
                initial={{ opacity: 0, transform: "translate(-50%)" }}
                animate={{ opacity: 1, transform: "translate(0%)" }}
                exit={{ opacity: 0 }}
              >
                Hello, my name is{" "}
                <span className={classes2.Name}>Ezike Obiajulu.</span>&nbsp;
                <span>
                  I'm a passionate <span className={classes2.Name}>software and cloud engineer</span> with a deep fascination for technology and its potential to transform businesses and improve lives. With <span className={classes2.skills}>{+(new Date().getFullYear()) - 2020} years</span> of experience, I have honed my skills in designing and developing scalable software solutions, harnessing the power of cloud platforms to drive innovation.
                </span>
              </motion.p>
              <motion.p
                className={classes2.P}
                initial={{ opacity: 0, transform: "translate(-75%)" }}
                animate={{ opacity: 1, transform: "translate(0%)" }}
                exit={{ opacity: 0 }}
              >
                My expertise lies in crafting robust architectures, building scalable microservices, and optimizing performance across the entire software development lifecycle. I thrive on solving complex problems, leveraging a wide range of technologies such as <span className={classes2.Name}>TypeScript, Python, Bash, NodeJs, React, Terraform, Ansible, Docker, Kubernetes</span>. 
                I am currently interested in networking and distributed systems and their areas of application. 
              </motion.p>
              <motion.p
                className={classes2.P}
                initial={{ opacity: 0, transform: "translate(-100%)" }}
                animate={{ opacity: 1, transform: "translate(0%)" }}
                exit={{ opacity: 0 }}
              >
                In addition to my technical prowess, I am a collaborative team player, adept at working with cross-functional teams to translate requirements into efficient and elegant solutions. I believe in continuous learning and stay up-to-date with the latest industry trends and best practices.
              </motion.p>

              <motion.p
                className={classes2.P}
                initial={{ opacity: 0, transform: "translate(-100%)" }}
                animate={{ opacity: 1, transform: "translate(0%)" }}
                exit={{ opacity: 0 }}
              >
                Beyond the technical realm, I bring strong communication skills, enabling effective collaboration with stakeholders and clients. I believe in building trust, maintaining clear lines of communication, and delivering high-quality results on time.
              </motion.p>
              <motion.p
                className={classes2.P}
                initial={{ opacity: 0, transform: "translate(-100%)" }}
                animate={{ opacity: 1, transform: "translate(0%)" }}
                exit={{ opacity: 0 }}
              >
                Outside of work, you can find me exploring new technologies, attending tech meetups, or contributing to open-source projects. I am driven by a desire to make a positive impact through technology, creating solutions that empower businesses and enhance user experiences.
              </motion.p>
              <motion.p
                className={classes2.P}
                initial={{ opacity: 0, transform: "translate(-100%)" }}
                animate={{ opacity: 1, transform: "translate(0%)" }}
                exit={{ opacity: 0 }}
              >
                I am excited to embark on new challenges and contribute my expertise to cutting-edge projects. If you're looking for a passionate and results-oriented software and cloud engineer, I'd love to connect and discuss how we can collaborate to drive innovation and success. Get in touch, and let's create something amazing together!
              </motion.p>
            </div>
          </section>
        </section>
      </div >
    </motion.div >
  );
}
