import React, { useState } from 'react'
import { ArrowRight, Play, Users, Award, TrendingUp } from 'lucide-react'
import ContactForm from './ContactForm'

const Hero = () => {
  const [showContactForm, setShowContactForm] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      setShowContactForm(true)
    }
  }

  const handleTalkToExpert = () => {
    window.location.href = 'tel:+916304576965'
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 via-accent-600 to-primary-900 text-white section-padding overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0VjIyaC0yVjM0aDJ6bTAtMTJIMjJ2LTJoMTR2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 glass-effect px-8 py-3 rounded-full text-sm font-bold mb-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Award className="h-5 w-5 text-yellow-300" />
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">Trusted by 100k+ Students Since 2019</span>
            </span>
          </div>
          
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tight px-2">
              Launch Your
              <br />
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-pulse">
                Tech Career
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                With Industry-Ready Programs
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-primary-100 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-medium px-2">
              <span className="inline-block px-2 sm:px-3 md:px-4 py-1.5 md:py-2 bg-white/10 rounded-lg backdrop-blur-sm mx-0.5 sm:mx-1 text-xs sm:text-sm md:text-base">100+ Programs</span>
              <span className="inline-block px-2 sm:px-3 md:px-4 py-1.5 md:py-2 bg-white/10 rounded-lg backdrop-blur-sm mx-0.5 sm:mx-1 text-xs sm:text-sm md:text-base">2K+ Placed</span>
              <span className="inline-block px-2 sm:px-3 md:px-4 py-1.5 md:py-2 bg-white/10 rounded-lg backdrop-blur-sm mx-0.5 sm:mx-1 text-xs sm:text-sm md:text-base">5+ Years</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 md:mb-12 px-4">
              <button 
                onClick={handleTalkToExpert}
                className="group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                Talk To Expert
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToContact}
                className="group bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                Get Free Demo Class
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-16 md:mt-20 px-2">
            <div className="glass-effect rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-white/30">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">5+</div>
              <div className="text-xs sm:text-sm font-semibold text-primary-100 uppercase tracking-wider leading-tight">Years Experience</div>
            </div>
            <div className="glass-effect rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-white/30">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">100%</div>
              <div className="text-xs sm:text-sm font-semibold text-primary-100 uppercase tracking-wider leading-tight">Placement Rate</div>
            </div>
            <div className="glass-effect rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-white/30">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">2K+</div>
              <div className="text-xs sm:text-sm font-semibold text-primary-100 uppercase tracking-wider leading-tight">Students Placed</div>
            </div>
            <div className="glass-effect rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-white/30">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">100K+</div>
              <div className="text-xs sm:text-sm font-semibold text-primary-100 uppercase tracking-wider leading-tight">Trained Students</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        defaultMessage="Hello! I would like to talk to an expert about your courses."
      />
    </section>
  )
}

export default Hero

