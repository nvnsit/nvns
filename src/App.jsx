import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CourseDetail from './pages/CourseDetail'
import About from './pages/About'
import Blog from './pages/Blog'
import Placements from './pages/Placements'
import CareerGuidance from './pages/CareerGuidance'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:slug" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

