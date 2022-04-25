import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineDownload } from 'react-icons/ai'
import {saveAs} from 'file-saver'

import ResumeImg from '../../assets/images/resume.png'
import classes from '../Projects/Projects.module.css'
import classes1 from '../About/About.module.css'
import classes2 from './Resume.module.css'
import resume from '../../assets/resume.pdf'


export default function Resume() {

  const saveFile = () => {
    saveAs(
      resume,
      "resume.pdf"
    );
  };

  // const download = async () => {
  //   console.log("initiating download...")
  //   // const res = await fetch('../../assets/resume.pdf')
  //   // const response = await res.json()
  //   // console.log(response)
  // }

  return (
    <motion.div className={classes.Projects} style={{ minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, animation: { delay: 1 } }}
    >
      <h1 className={classes.Title}>Resume</h1>
      <div className={classes2.ResumeWrapper}>
        <img className={classes2.ResumeImg} src={ResumeImg} alt="resume" />
        <div onClick={saveFile} className={classes2.Download}>
          <AiOutlineDownload />
          <p className={classes1.P}>Download</p>
        </div>
      </div>
    </motion.div>
  )
}
