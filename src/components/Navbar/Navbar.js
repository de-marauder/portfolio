import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiHomeassistant } from "react-icons/si";
import { NavLink as Link } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <nav
      style={props.sidebar ? { display: "none" } : null}
      className={classes.Navbar}
    >
      <Link to="/" className={({ isActive }) =>
              isActive
                ? `${classes.HomeIcon} ${classes.active}`
                : classes.HomeIcon
            }>
          <SiHomeassistant />
      </Link>
      <div className={classes.Links}>
        <div className={classes.Socials}>
          <div className={classes.SocialsInnerWrapper}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/de-marauder"
            >
              <BsGithub className={classes.SocialIcons} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/obiajulu-ezike"
            >
              <BsLinkedin className={classes.SocialIcons} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/De_marauder"
            >
              <BsTwitter className={classes.SocialIcons} />
            </a>
          </div>
        </div>
        <div className={classes.Routes}>
          <Link
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? `${classes.NavItem} ${classes.active}`
                : classes.NavItem
            }
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${classes.NavItem} ${classes.active}`
                : classes.NavItem
            }
          >
            About
          </Link>
          <Link
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? `${classes.NavItem} ${classes.active}`
                : classes.NavItem
            }
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `${classes.NavItem} ${classes.active}`
                : classes.NavItem
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
