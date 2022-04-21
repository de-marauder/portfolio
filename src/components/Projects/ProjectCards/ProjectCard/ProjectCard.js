import React from 'react'

import ProjectImg from '../../../../assets/images/Tasty foods screenshot.png';
import classes from "./ProjectCard.module.css"


export default function ProjectCard(props) {

  const tech = props.tech.map((el, id)=><li key={id} className={classes.Tag}>{el}</li>)
  const links = props.links.map((el, id)=><a key={id} href={el}>{id===0 ? 'Open Site' : 'View Code'}</a>)

  return (
    <div className={classes.ProjectCard}>
        <img className={classes.ProjectImg} src={ProjectImg} alt='project' />
        <div className={classes.Title}>
            <h3>{props.name}</h3>
            <hr style={{border: '1px solid darkorange', margin: "10px 0"}} /> 
            <p>{props.desc}</p>
        </div>
        <ul className={classes.Tags}>
            {tech}
        </ul>
        <div className={classes.Links}>
            {links}
        </div>
    </div>
  )
}
