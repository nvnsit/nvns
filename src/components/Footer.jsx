import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsapp'

const Footer = () => {
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      // If on a different page, navigate to home first
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const handleContactClick = (e) => {
    e?.preventDefault()
    navigate('/contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToCourses = (e) => {
    e.preventDefault()
    scrollToSection('courses')
  }

  const handleCourseClick = (e, courseSlug) => {
    e.preventDefault()
    navigate(`/course/${courseSlug}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAboutClick = (e) => {
    e.preventDefault()
    navigate('/about')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBlogClick = (e) => {
    e.preventDefault()
    navigate('/blog')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const servicesMenu = [
    { name: 'Classroom Training', href: '#services', onClick: () => scrollToSection('services') },
    { name: 'Online Training', href: '#services', onClick: () => scrollToSection('services') },
    { name: 'Corporate Training', href: '#services', onClick: () => scrollToSection('services') },
    { name: 'Internship Programs', href: '#services', onClick: () => scrollToSection('services') },
    { name: 'Placement Assistance', href: '/placements', onClick: () => navigate('/placements') },
    { name: 'Career Guidance', href: '/career-guidance', onClick: () => navigate('/career-guidance') },
  ]

  const footerLinks = {
    company: [
      { name: 'About Us', onClick: handleAboutClick },
      { name: 'Our Blog', onClick: handleBlogClick },
      { name: 'Contact Us', onClick: handleContactClick },
      { name: 'Reviews', onClick: () => scrollToSection('testimonials') }
    ],
    topCategories: [
      { name: 'DevOps Engineer', slug: 'devops-cloud-engineering' },
      { name: 'GCP Cloud Data Engineer', slug: null },
      { name: 'Digital Marketing', slug: null },
      { name: 'Python with Gen AI', slug: 'fullstack-python' },
      { name: 'Gen AI Development', slug: 'gen-ai-development' }
    ],
    trendingCourses: [
      { name: 'Data Science', slug: 'data-science' },
      { name: 'GCP Data Engineer', slug: null },
      { name: 'DevOps', slug: 'devops-cloud-engineering' },
      { name: 'Multi-Cloud', slug: 'devops-cloud-engineering' },
      { name: 'Cybersecurity', slug: 'cyber-security' }
    ]
  }

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', count: '4k+', href: '#' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', count: '16K+', href: '#' },
    { icon: <MessageCircle className="h-5 w-5" />, name: 'Whatsapp', count: '3K+', href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', count: '4K+', href: '#' },
    { icon: <Youtube className="h-5 w-5" />, name: 'YouTube', count: '229K+', href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
      {/* Footer Upper */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <h4 className="text-white font-semibold mb-1">Address</h4>
                <p className="text-sm">
                  Manjeera Plaza, Plot No 403<br />
                  Opposite Aditya Trade Center<br />
                  Ameerpet, Hyderabad - 500038<br />
                  Telangana, India
                </p>
              </li>
              <li>
                <h4 className="text-white font-semibold mb-1">Email Us</h4>
                <p className="text-sm">
                  <a href="mailto:info@nvnssoftwaresolutions.com" className="hover:text-white transition-colors">
                    info@nvnssoftwaresolutions.com
                  </a>
                </p>
              </li>
              <li>
                <h4 className="text-white font-semibold mb-1">Call Us</h4>
                <p className="text-sm">
                  <a href="tel:+919032286667" className="hover:text-white transition-colors">
                    9032286667 | 9032856668
                  </a>
                </p>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    onClick={(e) => {
                      if (social.name === 'Whatsapp') {
                        e.preventDefault()
                        openWhatsApp()
                      }
                    }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/"
                  onClick={(e) => { e.preventDefault(); navigate('/') }}
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.onClick ? (
                    <a 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        link.onClick(e)
                      }}
                      className="text-sm hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a 
                      href={link.href || '#'}
                      onClick={(e) => e.preventDefault()}
                      className="text-sm hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {servicesMenu.map((service, index) => {
                const handleClick = (e) => {
                  e.preventDefault()
                  if (service.onClick) {
                    service.onClick()
                    // Scroll to top if navigating to a new page
                    if (service.href.startsWith('/')) {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  } else if (service.href.startsWith('#')) {
                    scrollToSection(service.href.replace('#', ''))
                  } else {
                    navigate(service.href)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }
                return (
                  <li key={index}>
                    <a 
                      href={service.href || '#'}
                      onClick={handleClick}
                      className="text-sm hover:text-white transition-colors cursor-pointer"
                    >
                      {service.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              All Rights Reserved NVNS Software Solutions. Sitemap | FAQs | Cancellation & Refunds | Privacy Policy | Terms & Conditions | Feedback
            </p>
            <p className="text-xs text-gray-500">
              *Note: The certification names and logos are the trademarks of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

