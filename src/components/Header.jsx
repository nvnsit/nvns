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

  // Courses offered by NVNS (kept in sync with marketing content)
  const coursesMenu = [
    { name: 'Snowflake + Snowpark + DBT', slug: 'snowflake-snowpark-dbt' },
    { name: 'AWS Data Engineer', slug: 'aws-data-engineer' },
    { name: 'Java Full Stack', slug: 'java-fullstack' },
    { name: 'Python Full Stack', slug: 'python-fullstack' },
    { name: '.NET Full Stack', slug: 'dotnet-fullstack' },
    { name: 'Cyber Security', slug: 'cyber-security' },
    { name: 'Data Science & AI / Gen AI', slug: 'data-science-ai-genai' },
    { name: 'Manual & Automation Testing', slug: 'manual-automation-testing' },
    { name: 'AWS & DevOps', slug: 'aws-devops' },
    { name: 'Azure Cloud & Azure DevOps', slug: 'azure-cloud-azure-devops' },
    { name: 'Azure AI & ML', slug: 'azure-ai-ml' },
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
      {/* Header Top Bar - Compact */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white py-0.5 text-xs hidden lg:block">
        <div className="container-custom">
          <div className="flex justify-between items-center px-4">
            <span>Welcome to NVNS Software Solutions</span>
            <div className="flex items-center gap-3">
              <a href="mailto:info@nvnssoftwaresolutions.com" className="flex items-center gap-1 hover:text-primary-200 transition-colors text-xs">
                <Mail className="h-3 w-3" />
                <span>info@nvnssoftwaresolutions.com</span>
              </a>
              <a href="tel:+916304576965" className="flex items-center gap-1 hover:text-primary-200 transition-colors text-xs">
                <Phone className="h-3 w-3" />
                <span>+91 63045 76965</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Logo, Navigation and Social */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-14 px-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <a 
                href="/" 
                onClick={(e) => { e.preventDefault(); navigate('/') }} 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/nvns.png" 
                  alt="NVNS Software Solutions Logo" 
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain"
                />
                <span className="text-sm sm:text-base md:text-lg font-black bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
                  <span className="hidden sm:inline">NVNS Software Solutions</span>
                  <span className="sm:hidden">NVNS</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5 flex-1 justify-center">
              <a 
                href="/"
                onClick={(e) => { e.preventDefault(); navigate('/') }}
                className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
              >
                Home
              </a>
              <a 
                href="/about"
                onClick={(e) => { e.preventDefault(); navigate('/about') }}
                className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
              >
                About Us
              </a>
              
              {/* Courses Dropdown */}
              <div className="relative group">
                <button className={`flex items-center text-sm font-medium transition-colors ${location.pathname.startsWith('/course') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}>
                  Courses
                  <ChevronDown className="ml-1 h-3 w-3" />
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
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {course.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
                  Services
                  <ChevronDown className="ml-1 h-3 w-3" />
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
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
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
                className={`text-sm font-medium transition-colors ${isActive('/blog') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
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
                className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
              >
                Contact Us
              </a>
            </nav>

            {/* Right Side - Social Icons and Placements Button */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <a href="#" className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors" title="Facebook">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors" title="LinkedIn">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp() }} className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors" title="WhatsApp">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.195c-1.52.92-2.529 2.377-2.529 3.985 0 2.467 1.948 4.654 4.802 5.148.877.154 1.738.108 2.536-.308l.024.01c.31.147.613.27.906.357.731.23 1.35.056 1.556-.911.206-.966-.882-1.879-1.596-2.197-.714-.319-1.592-.226-2.306.234-.714.46-1.694 1.045-2.306.234-.307-.406-.45-.892-.45-1.4 0-1.608 1.31-3.026 3.226-3.584.92-.278 1.94-.278 2.86 0 1.916.558 3.226 1.976 3.226 3.584 0 2.467-1.948 4.654-4.802 5.148z"/></svg>
                </a>
              </div>
              <button
                onClick={() => navigate('/placements')}
                className="btn-primary flex items-center gap-1.5 text-sm px-4 py-1.5"
              >
                <Briefcase className="h-3.5 w-3.5" />
                Placements
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
