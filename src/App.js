import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import SocialInternship from './pages/social internship/SocialInternship';
import OurWork from './pages/ourwork/OurWork';
import About from './pages/about/About';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ourwork" element={<OurWork/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/socialinternship" element={<SocialInternship/>} />
      </Routes>
    </Router>
  )
}

export default App