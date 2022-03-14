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
      <h1 className="Name">Obiajulu Ezike</h1>
      <h2 className="Job">Software Developer</h2>
    </div>
  </div>
  )
}
