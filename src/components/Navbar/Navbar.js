import React from 'react'
import {
    BsGithub,
    BsLinkedin,
    BsTwitter
} from 'react-icons/bs'
import { NavLink as Link } from 'react-router-dom'
import HomeImg from '../../assets/images/user.png'
import classes from './Navbar.module.css'

export default function Navbar(props) {
    return (
        <nav style={props.sidebar?{display: 'none'}:null} className={classes.Navbar}>
            <Link to='/' className={classes.HomeIcon}><img style={{ width: '2.5em'}} src={HomeImg} alt='home' /></Link>
            <div className={classes.Links}>
                <div className={classes.Socials}>
                    <div className={classes.SocialsInnerWrapper}>
                        <a target='_blank' rel="noreferrer" href="https://github.com/de-marauder" ><BsGithub className={classes.SocialIcons} /></a>
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/obiajulu-ezike" ><BsLinkedin className={classes.SocialIcons} /></a>
                        <a target='_blank' rel="noreferrer" href="https://twitter.com/De_marauder" ><BsTwitter className={classes.SocialIcons} /></a>
                    </div>
                </div>
                <div className={classes.Routes}>
                    <Link to='/projects' className={classes.NavItem}>Projects</Link>
                    <Link to='/about' className={classes.NavItem}>About</Link>
                    <Link to='/resume' className={classes.NavItem}>Resume</Link>
                    <Link to='/contact' className={classes.NavItem}>Contact</Link>
                </div>
            </div>
            
        </nav>
    )
}
