import React from 'react'
import { NavLink as Link } from 'react-router-dom'

import classes from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={classes.Navbar}>
            <div>
                <Link to='/' className={classes.NavItem}>Projects</Link>
                <Link to='/about' className={classes.NavItem}>About</Link>
                <Link to='/resume' className={classes.NavItem}>Resume</Link>
            </div>

        </nav>
    )
}
