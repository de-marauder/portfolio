import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'

import spicy1 from '../../../assets/images/spicy soups 1.png'
import wordle from '../../../assets/images/wordle 1.png'
import decaden from '../../../assets/images/decaden 1.png'
import calculator from '../../../assets/images/calculator.png'
import classes from "./ProjectCards.module.css"

export default function ProjectCards() {
  return (
    <div className={classes.ProjectCards}>
      <ProjectCard 
      name="Spicy Foods"
      img={spicy1} 
      desc="An Online Restaurant for Ordering Local Cuisine."
      tech={['React', 'Redux', 'Tailwindcss', 'React-router-dom', 'stripe API']}
      links={["https://spicy-soup.vercel.app/", "https://github.com/de-marauder/spicy_soups"]} />
      
      <ProjectCard 
      name="Wordle clone"
      img={wordle} 
      desc="A game where the player tries to guess a word in 6 tries. Can you guess the word?"
      tech={['React', 'CSS3', 'JavaScript', 'HTML5']}
      links={["https://de-marauder.github.io/wordle/", "https://github.com/de-marauder/wordle"]} />
      
      <ProjectCard 
      name="Decaden"
      img={decaden} 
      desc="A landing page offered to a client to boost their online presence"
      tech={['React', 'CSS3', 'React-router-dom', 'HTML5']}
      links={["https://decaden.tk", "https://github.com/de-marauder/decaden"]} />
      
      <ProjectCard 
      name="Simple Calculator" 
      img={calculator}
      desc="A simple calculator. performs basic arithmetic operations."
      tech={['React', 'CSS3', 'HTML5']}
      links={["https://de-marauder.github.io/Calculator/", "https://github.com/de-marauder/calculator"]} />
      
      <div style={{height: '20px', width: '100%'}}></div>
    </div>
  )
}
