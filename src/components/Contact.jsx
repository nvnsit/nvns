import React, { useState, useEffect, useRef } from 'react'
import { Phone, Mail, MessageCircle, Calendar, Loader2 } from 'lucide-react'
import { sendDemoClassEmail, sendRegistrationEmail, sendEnrollmentEmail } from '../utils/emailService'
import { openWhatsApp, openWhatsAppForDemo } from '../utils/whatsapp'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  })

  const [showDemoForm, setShowDemoForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear message when user starts typing
    if (submitMessage.text) {
      setSubmitMessage({ type: '', text: '' })
    }
  }

  const handleDemoSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage({ type: '', text: '' })

    try {
      const result = await sendDemoClassEmail(formData)
      
      if (result.success) {
        setSubmitMessage({ 
          type: 'success', 
          text: 'Thank you! We have received your request. We will contact you soon.' 
        })
        setFormData({ name: '', email: '', phone: '', course: '' })
        setTimeout(() => {
          setShowDemoForm(false)
          setSubmitMessage({ type: '', text: '' })
        }, 3000)
      } else {
        setSubmitMessage({ 
          type: 'error', 
          text: result.error || 'Failed to send. Please try again or contact us via WhatsApp.' 
        })
      }
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'An error occurred. Please try again or contact us via WhatsApp.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage({ type: '', text: '' })

    try {
      // Use enrollment email if course is selected, otherwise use registration email
      const enrollmentData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course || 'General Registration',
        learningPath: 'Not specified',
        message: `Registration request for ${formData.course || 'general inquiry'}`
      }
      
      const result = formData.course && formData.course !== 'Choose a course'
        ? await sendEnrollmentEmail(enrollmentData)
        : await sendRegistrationEmail(formData)
      
      if (result.success) {
        setSubmitMessage({ 
          type: 'success', 
          text: 'Registration successful! We have received your information. We will contact you soon.' 
        })
        setFormData({ name: '', email: '', phone: '', course: '' })
      } else {
        setSubmitMessage({ 
          type: 'error', 
          text: result.error || 'Failed to register. Please try again or contact us via WhatsApp.' 
        })
      }
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'An error occurred. Please try again or contact us via WhatsApp.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp Chat',
      value: '9032286667',
      action: 'Chat Now',
      color: 'bg-green-500',
      onClick: () => openWhatsApp()
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      value: '9032286667 | 9032856668',
      action: 'Call Now',
      color: 'bg-blue-500',
      onClick: () => window.location.href = 'tel:+919032286667'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      value: 'info@nvnssoftwaresolutions.com',
      action: 'Send Mail',
      color: 'bg-red-500',
      onClick: () => window.location.href = 'mailto:info@nvnssoftwaresolutions.com?subject=Course Inquiry'
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Schedule Demo',
      value: 'Book a Free Demo Class',
      action: 'Book Now',
      color: 'bg-purple-500',
      onClick: () => setShowDemoForm(true)
    }
  ]

  const courses = [
    'Choose a course',
    'AI Testing',
    'AWS Data Engineer',
    'Cloud Data Eng - Azure Training',
    'Cloud Data Eng - GCP',
    'Cyber Security',
    'Cypress',
    'DataScience',
    'Devops Engineer',
    'Fullstack Java',
    'Fullstack Python',
    'Gen Ai Development',
    'MERN Stack',
    'React js',
    'Selenium with Java',
    'Selenium with Python',
    'Other'
  ]

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`text-center mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Talk to Our Experts
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Available 24/7 • Multiple Ways to Connect
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-gray-200 p-4 md:p-6 text-center hover:shadow-md transition-all duration-300 cursor-pointer scroll-fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={method.onClick}
            >
              <div className={`${method.color} w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg`}>
                <div className="text-white">
                  {method.icon}
                </div>
              </div>
              <h3 className="font-bold text-sm md:text-base mb-2">{method.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2">{method.value}</p>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  if (method.onClick) method.onClick()
                }}
                className="bg-white text-primary-600 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-primary-50 transition-colors w-full"
              >
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Two Column Layout: Content Left, Form Right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight text-gray-900">
              NVNS Software Solutions - Best Software Training Institute
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              NVNS Software Solutions is a leading software training institute providing <strong className="text-gray-900">industry-focused IT courses with real-time project implementation</strong>. Our programs cover <strong className="text-gray-900">Data Engineering, Cloud Computing, Full Stack Development, AI, Cyber Security, DevOps, and Testing</strong>, designed to help students gain practical experience and become job-ready for the modern technology industry.
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl md:text-2xl mt-0.5 flex-shrink-0">✔</span>
                <span className="text-base md:text-lg text-gray-700 leading-relaxed">Real-Time Project Implementation</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl md:text-2xl mt-0.5 flex-shrink-0">✔</span>
                <span className="text-base md:text-lg text-gray-700 leading-relaxed">Industry Experienced Trainers</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl md:text-2xl mt-0.5 flex-shrink-0">✔</span>
                <span className="text-base md:text-lg text-gray-700 leading-relaxed">Hands-On Practical Learning</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl md:text-2xl mt-0.5 flex-shrink-0">✔</span>
                <span className="text-base md:text-lg text-gray-700 leading-relaxed">Job-Oriented Curriculum</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl md:text-2xl mt-0.5 flex-shrink-0">✔</span>
                <span className="text-base md:text-lg text-gray-700 leading-relaxed">Interview Preparation & Career Guidance</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '200ms' }}>

        {/* Demo Form Modal */}
        {showDemoForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-8 relative">
              <button
                onClick={() => setShowDemoForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free Demo Class</h3>
              {submitMessage.text && (
                <div className={`mb-4 p-3 rounded-lg ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {courses.map((course, idx) => (
                      <option key={idx} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Submit Now'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowDemoForm(false)
                    openWhatsAppForDemo(formData.course)
                  }}
                  className="btn-secondary w-full mt-2 border-green-600 text-green-600 hover:bg-green-50"
                >
                  Or Contact via WhatsApp
                </button>
              </form>
            </div>
          </div>
        )}

            {/* Registration Form */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-900">Registration Form</h3>
              {submitMessage.text && (
                <div className={`mb-4 p-3 md:p-4 rounded-lg text-sm md:text-base ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              <form onSubmit={handleRegistrationSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-primary-600 px-6 py-3.5 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Registering...</span>
                    </>
                  ) : (
                    'Register Now'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => openWhatsApp('Hello! I would like to register for a course.')}
                  className="w-full bg-green-600 text-white px-6 py-3.5 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Or Register via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

