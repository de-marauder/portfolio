import React from 'react';
import ProjectCards from './ProjectCards/ProjectCards';

import classes from './Projects.module.css'

export default function Projects() {
  return (
    <div className={classes.Projects}>
        <h1 className={classes.Title}>My Projects</h1>
        <ProjectCards />
    </div>
  )
}
