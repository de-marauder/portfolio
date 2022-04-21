import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';

import Navbar from './Navbar/Navbar';
// import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

import './App.css';
import Title from './Title/Title';
import Projects from './Projects/Projects';
import About from './About/About';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
// import Menu from './UI/Menu/Menu';
// import SideBar from './Sidebar/SideBar';

// import Output from './Output/Output';


function App() {

  // const [sidebar, setSidebar] = useState(false)

  return (
    <section className='App'>
      {/* <Navbar sidebar={sidebar} /> */}
      <Navbar />
      {/* <SideBar toggle={setSidebar} sidebar={sidebar} /> */}
      {/* <Menu sidebar={sidebar} toggle={setSidebar} /> */}
      <div className="Landing">
        <Routes>
          <Route path='/' index element={<Title />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
