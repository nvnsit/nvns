import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import TrendingCourses from '../components/TrendingCourses'
import FeaturedCourses from '../components/FeaturedCourses'
import LearningJourney from '../components/LearningJourney'
import Services from '../components/Services'
import Placements from '../components/Placements'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <section id="courses">
        <TrendingCourses />
        <FeaturedCourses />
      </section>
      <LearningJourney />
      <Services />
      <Placements />
      <section id="testimonials">
        <Testimonials />
      </section>
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default Home

