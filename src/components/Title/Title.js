import React from 'react'

import titleImage from '../../assets/images/coder-icon.webp'
import '../App.css';

export default function Title() {
  return (
    <div className='Title'>
    <div className='TitleInnerWrapper'>
      <div className='ImageWrapper'>
        <img src={titleImage} alt="title" />
      </div>
      <h1>Hi, I'm</h1>
      <h1 className="Name">Obiajulu Ezike</h1>
      <h2 className="Job">
        Software Developer<br/>
        <span className='tech'>React</span>
        <span className='tech'>JavaScript</span>
        <span className='tech'>CSS3</span>
        <span className='tech'>HTML5</span>
      </h2>
    </div>
  </div>
  )
}
