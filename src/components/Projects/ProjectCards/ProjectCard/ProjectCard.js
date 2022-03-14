import React from 'react'

import ProjectImg from '../../../../assets/images/Tasty foods screenshot.png';
import classes from "./ProjectCard.module.css"


export default function ProjectCard() {

  return (
    <div className={classes.ProjectCard}>
        <img className={classes.ProjectImg} src={ProjectImg} alt='project' />
        <div className={classes.Title}>
            <h3>Tasty Foods</h3>
            <hr style={{border: '1px solid darkorange', margin: "10px 0"}} /> 
            <p>An Online Restaurant for Ordering Local Cuisine.</p>
        </div>
        <ul className={classes.Tags}>
            <li className={classes.Tag}>React</li>
            <li className={classes.Tag}>Redux</li>
            <li className={classes.Tag}>Tailwindcss</li>
            <li className={classes.Tag}>React-router-dom</li>
            <li className={classes.Tag}>stripe API</li>
        </ul>
        <div className={classes.Links}>
            <a href="https://de-marauder.github.io/spicy_soups/">Open Site</a>
            <a href="https://github.com/de-marauder/spicy_soups">View Code</a>
        </div>
    </div>
  )
}
