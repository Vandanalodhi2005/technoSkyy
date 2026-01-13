import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import HelpDeskCenter from './pages/HelpDeskCenter'
import Careers from './pages/Careers'
import Solutions from './pages/Solutions'
import Services from './pages/Services'
import WebDD from './pages/WebDD'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import ITSupport from './pages/ITSupport'
import ExpertTechSupport from './pages/ExpertTechSupport'
import DigitalMarketing from './pages/DigitalMarketing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/helpcenter' element={<HelpDeskCenter />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/solutions' element={<Solutions />} />
      <Route path='/services' element={<Services /> }/>
      <Route path='/services/web-design-development' element={<WebDD />} />
      <Route path='/services/digital-marketing' element={<DigitalMarketing />} />
      <Route path='/services/software-development' element={<SoftwareDevelopment />} />
      <Route path='/services/it-support' element={<ITSupport />} />
      <Route path='/services/expert-tech-support' element={<ExpertTechSupport />} />


    </Routes>
  )
}

export default App