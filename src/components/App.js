import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './Navbar/Navbar';
// import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

import './App.css';
import Title from './Title/Title';
import Projects from './Projects/Projects';
import About from './About/About';
import Resume from './Resume/Resume';
import Menu from './UI/Menu/Menu';
import SideBar from './Sidebar/SideBar';

// import Output from './Output/Output';


function App() {

  const [sidebar, setSidebar] = useState(false)

  return (
    <section className='App'>
      <Navbar sidebar={sidebar} />
      <SideBar toggle={setSidebar} sidebar={sidebar} />
      <Menu sidebar={sidebar} toggle={setSidebar} />
      <div className="Landing">
        
        {/* <div className='Socials'>
          <div className='SocialsInnerWrapper'>
            <a target='_blank' rel="noreferrer" href="https://github.com/de-marauder" ><BsGithub className='SocialIcons' style={{ margin: '0 0 20px 0' }} /></a>
            <a target='_blank' rel="noreferrer" href="https://github.com/de-marauder" ><BsLinkedin className='SocialIcons' style={{ margin: '0 0 20px 0' }} /></a>
            <a target='_blank' rel="noreferrer" href="https://github.com/de-marauder" ><BsTwitter className='SocialIcons' style={{ margin: '0 0 20px 0' }} /></a>
          </div>

        </div> */}
        
        {/* <div className='Outlet'>
            <div className='OutletInnerWrapper'> */}
                <Routes>
                    <Route path='/' index element={<Title />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/resume' element={<Resume />} />
                </Routes>
                {/* <Outlet /> */}
            {/* </div>
        </div> */}
      </div>
    </section>
  );
}

export default App;
