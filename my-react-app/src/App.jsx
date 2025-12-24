import React from 'react'
import { HashRouter,Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavigationMenu/Navbar'
import Home from './Pages/Home/Home'
import FindCare from './Pages/FindCare/FindCare'
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'

export default function App(){
  return (
<HashRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/find-care" element={<FindCare />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</HashRouter>

  )
}
