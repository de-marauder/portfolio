import React from 'react'
import { motion } from 'framer-motion'
import classes from '../Projects/Projects.module.css'
import classes2 from './About.module.css'

export default function About() {
  return (
    <motion.div className={classes.Projects}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, animation: { delay: 1 } }}
    >
      <h1 className={classes.Title}>About</h1>
      <p className={classes2.P}>
        Hello, my name is Ezike Obiajulu Godson.
        I am a self taught software developer with an academic background in chemical engineering and skills in CSS, JavaScript, React, Express and python and a specific interest in web development.      </p><br/>
      <p className={classes2.P}>
        Researching and implementing nouvelle methods to improve the UI/UX, responsiveness and optimization of websites is something I take pride in. I constantly strive to improve my skills.
      </p><br/>
      <p className={classes2.P}>
        I am open to oppurtunities to collaborate and up for hire.
        I am certain that given the opportunity I will be able to provide your company with valuable and top notch service.
      </p>
    </motion.div>
  )
}
