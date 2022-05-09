import React from 'react'
import { NavLink as Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import titleImage from '../../assets/images/coder-icon.webp'
// import reactIcon from '../../assets/images/react-icon.svg'
import '../App.css';


export default function Title() {
  return (
    <motion.div className='Title'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, animation: { delay: 1 } }}
    >
      <div className='TitleInnerWrapper'>
        <div className='ImageWrapper'>
          <img src={titleImage} alt="title" />
        </div>
        <h1 >Hi, I'm</h1>
        <h1 className="Name">Obiajulu Ezike</h1>
        <h2 className="Job">
          Software Developer<br />
        </h2>
        <div className='skills'>
          <span className='tech react'>
            {/* <img src={reactIcon} alt='react icon' /> */}
            React
            </span>
          <span className='tech express'>Express</span>
          <span className='tech mongodb'>MongoDB</span>
          <span className='tech js'>JavaScript</span>
          <span className='tech css'>CSS3</span>
          <span className='tech html'>HTML5</span>
        </div>

      </div>
      <Link className='position flat-btn' to='/contact'>Hire me!</Link>
    </motion.div>
  )
}
