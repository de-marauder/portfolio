import React from 'react'

import classes1 from './Contact.module.css'
import classes from '../Projects/Projects.module.css'

export default function Contact() {
    return (
        <div className={classes.Projects}>
            <div className={classes1.TitleWrapper}>
                <h1 className={`${classes.Title} ${classes1.Title}`}>Hit me up </h1>
                <span className={classes1.smilie}>&#128516;</span>
            </div>

            <div className={classes1.contact} >
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='E-mail' />
                <input type='text' placeholder='Subject' />
                <textarea type='text' rows={4} placeholder='Message' />
                <input type='submit' value='SUBMIT' />
            </div>
        </div>

    )
}
