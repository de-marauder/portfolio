import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Projects from '../Projects/Projects';
import About from '../About/About';
import Resume from '../Resume/Resume';

import '../App.css';

export default function Output() {
    return (
        <div className='Outlet'>
            <div className='OutletInnerWrapper'>
                <Routes>
                    <Route path='/' index element={<Projects />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/resume' element={<Resume />} />
                </Routes>
                {/* <Outlet /> */}
            </div>
        </div>
    )
}
