import React, { useState } from 'react'
import { Menu, X, ChevronDown, Mail, Phone, Briefcase } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { openWhatsApp } from '../utils/whatsapp'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const coursesMenu = [
    { name: 'Full Stack Python', slug: 'fullstack-python' },
    { name: 'Full Stack Java', slug: 'fullstack-java' },
    { name: 'Data Science', slug: 'data-science' },
    { name: 'Gen AI Development', slug: 'gen-ai-development' },
    { name: 'Cyber Security', slug: 'cyber-security' },
    { name: 'DevOps & Cloud Engineering', slug: 'devops-cloud-engineering' },
    { name: 'AI Testing', slug: 'ai-testing' },
    { name: 'Quantum Computing', slug: 'quantum-computing' },
  ]

  const servicesMenu = [
    { name: 'Classroom Training', href: '#services' },
    { name: 'Online Training', href: '#services' },
    { name: 'Corporate Training', href: '#services' },
    { name: 'Internship Programs', href: '#services' },
    { name: 'Placement Assistance', href: '/placements', isPage: true },
    { name: 'Career Guidance', href: '/career-guidance', isPage: true },
  ]

  const handleCourseClick = (slug) => {
    navigate(`/course/${slug}`)
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      {/* Header Top Bar */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white py-2 md:py-3 text-xs md:text-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center px-4">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Welcome to NVNS Software Solutions - Making careers better</span>
              <span className="sm:hidden">Welcome to NVNS</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="mailto:info@nvnssoftwaresolutions.com" className="flex items-center gap-1 hover:text-primary-200 transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@nvnssoftwaresolutions.com</span>
              </a>
              <a href="tel:+916304576965" className="flex items-center gap-1 hover:text-primary-200 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 63045 76965</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header Upper - Logo and Social */}
      <div className="bg-gradient-to-r from-white to-gray-50 border-b border-gray-200 py-5 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <a 
                href="/" 
                onClick={(e) => { e.preventDefault(); navigate('/') }} 
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/nvns.png" 
                  alt="NVNS Software Solutions Logo" 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] hover:bg-[position:100%_center] transition-all duration-500">
                  <span className="hidden sm:inline">NVNS Software Solutions</span>
                  <span className="sm:hidden">NVNS</span>
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors" title="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp() }} className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors" title="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.195c-1.52.92-2.529 2.377-2.529 3.985 0 2.467 1.948 4.654 4.802 5.148.877.154 1.738.108 2.536-.308l.024.01c.31.147.613.27.906.357.731.23 1.35.056 1.556-.911.206-.966-.882-1.879-1.596-2.197-.714-.319-1.592-.226-2.306.234-.714.46-1.694 1.045-2.306.234-.307-.406-.45-.892-.45-1.4 0-1.608 1.31-3.026 3.226-3.584.92-.278 1.94-.278 2.86 0 1.916.558 3.226 1.976 3.226 3.584 0 2.467-1.948 4.654-4.802 5.148z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header Lower - Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a 
                href="/"
                onClick={(e) => { e.preventDefault(); navigate('/') }}
                className={`font-medium transition-colors ${isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
              >
                Home
              </a>
              <a 
                href="/about"
                onClick={(e) => { e.preventDefault(); navigate('/about') }}
                className={`font-medium transition-colors ${isActive('/about') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
              >
                About Us
              </a>
              
              {/* Courses Dropdown */}
              <div className="relative group">
                <button className={`flex items-center font-medium transition-colors ${location.pathname.startsWith('/course') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}>
                  Courses
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-50">
                  <div className="py-2">
                    {coursesMenu.map((course, index) => (
                      <a
                        key={index}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          handleCourseClick(course.slug)
                        }}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {course.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center font-medium text-gray-700 hover:text-primary-600 transition-colors">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-50">
                  <div className="py-2">
                    {servicesMenu.map((service, index) => (
                      <a
                        key={index}
                        href={service.href || '#'}
                        onClick={(e) => {
                          e.preventDefault()
                          if (service.isPage) {
                            navigate(service.href)
                          } else {
                            scrollToSection(service.href.replace('#', ''))
                          }
                        }}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href="/blog"
                onClick={(e) => { e.preventDefault(); navigate('/blog') }}
                className={`font-medium transition-colors ${isActive('/blog') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
              >
                Blog
              </a>
              <a 
                href="/contact"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/contact')
                  setIsMenuOpen(false)
                }}
                className={`font-medium transition-colors ${location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
              >
                Contact Us
              </a>
            </nav>

            {/* Jobs/Placements Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate('/placements')}
                className="btn-primary flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                Placements
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white">
              <div className="px-4 py-4 space-y-2">
                <a 
                  href="/"
                  onClick={(e) => { e.preventDefault(); navigate('/'); setIsMenuOpen(false) }}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                >
                  Home
                </a>
                <a 
                  href="/about"
                  onClick={(e) => { e.preventDefault(); navigate('/about'); setIsMenuOpen(false) }}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                >
                  About Us
                </a>
                <div>
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === 'courses' ? null : 'courses')}
                    className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-primary-600 font-medium"
                  >
                    Courses
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'courses' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'courses' && (
                    <div className="pl-4 space-y-1">
                      {coursesMenu.map((course, index) => (
                        <a
                          key={index}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            handleCourseClick(course.slug)
                          }}
                          className="block py-2 text-sm text-gray-600 hover:text-primary-600"
                        >
                          {course.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-primary-600 font-medium"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'services' && (
                    <div className="pl-4 space-y-1">
                      {servicesMenu.map((service, index) => (
                        <a
                          key={index}
                          href={service.href || '#'}
                          onClick={(e) => {
                            e.preventDefault()
                            if (service.isPage) {
                              navigate(service.href)
                              setIsMenuOpen(false)
                            } else {
                              scrollToSection(service.href.replace('#', ''))
                            }
                          }}
                          className="block py-2 text-sm text-gray-600 hover:text-primary-600"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a 
                  href="/blog"
                  onClick={(e) => { e.preventDefault(); navigate('/blog'); setIsMenuOpen(false) }}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                >
                  Blog
                </a>
                <a 
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/contact')
                    setIsMenuOpen(false)
                  }}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                >
                  Contact Us
                </a>
                <button
                  onClick={() => {
                    navigate('/placements')
                    setIsMenuOpen(false)
                  }}
                  className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  Placements
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
