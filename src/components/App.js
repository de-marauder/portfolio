import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

import './App.css';
import Title from './Title/Title';
import Projects from './Projects/Projects';
import About from './About/About';
import Resume from './Resume/Resume';


function App() {
  return (
    <>
      <Navbar />
      <div className="Landing">
        <Title />
        <div className='Socials'>
          <div className='SocialsInnerWrapper'>
            <a target='_blank' rel="noreferrer" href="https://github.com/de-marauder" ><BsGithub className='SocialIcons' style={{ margin: '0 0 20px 0' }} /></a>
            <a target='_blank' rel="noreferrer" href="https://github.com/de-marauder" ><BsLinkedin className='SocialIcons' style={{ margin: '0 0 20px 0' }} /></a>
            <a target='_blank' rel="noreferrer" href="https://github.com/de-marauder" ><BsTwitter className='SocialIcons' style={{ margin: '0 0 20px 0' }} /></a>
          </div>

        </div>
        <div className='Outlet'>
          <div className='OutletInnerWrapper'>
            <Routes>
              <Route path='/' index element={<Projects/>} />
              <Route path='/about' element={<About />} />
              <Route path='/resume' element={<Resume />} />
            </Routes>
            {/* <Outlet /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
