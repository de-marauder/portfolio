import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'

import classes from "./ProjectCards.module.css"

export default function ProjectCards() {
  return (
    <div className={classes.ProjectCards}>
      <ProjectCard 
      name="Tasty Foods" 
      desc="An Online Restaurant for Ordering Local Cuisine."
      tech={['React', 'Redux', 'Tailwindcss', 'React-router-dom', 'stripe API']}
      links={["https://de-marauder.github.io/spicy_soups/", "https://github.com/de-marauder/spicy_soups"]} />
      
      <ProjectCard 
      name="Tasty Foods" 
      desc="An Online Restaurant for Ordering Local Cuisine."
      tech={['React', 'Redux', 'Tailwindcss', 'React-router-dom', 'stripe API']}
      links={["https://de-marauder.github.io/spicy_soups/", "https://github.com/de-marauder/spicy_soups"]} />
      
      <ProjectCard 
      name="Tasty Foods" 
      desc="An Online Restaurant for Ordering Local Cuisine."
      tech={['React', 'Redux', 'Tailwindcss', 'React-router-dom', 'stripe API']}
      links={["https://de-marauder.github.io/spicy_soups/", "https://github.com/de-marauder/spicy_soups"]} />
      
      <div style={{height: '20px', width: '100%'}}></div>
    </div>
  )
}
