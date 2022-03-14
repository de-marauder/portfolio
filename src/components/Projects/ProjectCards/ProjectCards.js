import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'

import classes from "./ProjectCards.module.css"

export default function ProjectCards() {
  return (
    <div className={classes.ProjectCards}>
        <ProjectCard />
    </div>
  )
}
