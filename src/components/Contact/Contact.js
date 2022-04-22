import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import classes1 from './Contact.module.css'
import classes from '../Projects/Projects.module.css'

export default function Contact() {
    return (
        <motion.div className={classes.Projects}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, animation: { delay: 1 } }}
        >
            <div className={classes1.TitleWrapper}>
                <h1 className={`${classes.Title} ${classes1.Title}`}>Hit me up </h1>
                <span className={classes1.smilie}>&#128516;</span>
            </div>

            <div className={classes1.contact} >
                <AnimatePresence>
                    <motion.input
                        initial={{ opacity: 0, translateX: '-100%', animation: {delay: 1} }}
                        animate={{ opacity: 1, translateX: 0 }}
                        exit={{ opacity: 0, animation: { delay: 1 } }}
                        type='text' required placeholder='Name' />
                    <motion.input
                        initial={{ opacity: 0, translateX: '-100%', animation: {delay: 1.1} }}
                        animate={{ opacity: 1, translateX: 0 }}
                        exit={{ opacity: 0, animation: { delay: 1 } }}
                        type='email' required placeholder='E-mail' />
                    <motion.input
                        initial={{ opacity: 0, translateX: '-100%', animation: {delay: 1.2}  }}
                        animate={{ opacity: 1, translateX: 0}}
                        exit={{ opacity: 0, animation: { delay: 1 } }}
                        type='text' required placeholder='Subject' />
                    <motion.textarea
                        initial={{ opacity: 0, translateX: '-100%', animation: {delay: 1.3} }}
                        animate={{ opacity: 1, translateX: 0 }}
                        exit={{ opacity: 0, animation: { delay: 1 } }}
                        type='text' required rows={4} placeholder='Message' />
                    <motion.input
                        initial={{ opacity: 0, translateX: '-100%', animation: {delay: 1.4} }}
                        animate={{ opacity: 1, translateX: 0 }}
                        exit={{ opacity: 0, animation: { delay: 1 } }}
                        type='submit' value='SUBMIT' />
                </AnimatePresence>
            </div>
        </motion.div>

    )
}
