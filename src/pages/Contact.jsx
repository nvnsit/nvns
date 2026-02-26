import React, { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, Loader2, CheckCircle, X } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import ContactForm from '../components/ContactForm'
import { openWhatsApp } from '../utils/whatsapp'
import { sendCourseInquiryEmail } from '../utils/emailService'

const Contact = () => {
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (submitMessage.text) {
      setSubmitMessage({ type: '', text: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage({ type: '', text: '' })

    try {
      const result = await sendCourseInquiryEmail(formData)

      if (result.success) {
        setSubmitMessage({
          type: 'success',
          text: 'Thank you! We have received your message. We will contact you soon.'
        })
        setFormData({ name: '', email: '', phone: '', course: '', message: '' })
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

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Our Address',
      details: [
        'Manjeera Plaza, Plot No 403',
        'Opposite Aditya Trade Center',
        'Ameerpet, Hyderabad - 500038',
        'Telangana, India'
      ],
      action: 'View on Map',
      color: 'bg-red-500',
      onClick: () => window.open('https://maps.google.com/?q=Manjeera+Plaza,+Plot+No+403,+Opposite+Aditya+Trade+Center,+Ameerpet,+Hyderabad', '_blank')
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Number',
      details: ['+91 63045 76965'],
      action: 'Call Now',
      color: 'bg-blue-500',
      onClick: () => window.location.href = 'tel:+916304576965'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Address',
      details: ['info@nvnssoftwaresolutions.com'],
      action: 'Send Email',
      color: 'bg-purple-500',
      onClick: () => window.location.href = 'mailto:info@nvnssoftwaresolutions.com?subject=Contact Inquiry'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      details: ['+91 63045 76965'],
      action: 'Chat Now',
      color: 'bg-green-500',
      onClick: () => openWhatsApp('Hello! I would like to contact you.')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 7:00 PM',
        'Saturday: 9:00 AM - 6:00 PM',
        'Sunday: 10:00 AM - 4:00 PM'
      ],
      action: null,
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Get In Touch With Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Have questions? We're here to help! Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-200 transform hover:-translate-y-1"
              >
                <div className={`${info.color} w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                {info.action && (
                  <button
                    onClick={info.onClick}
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center gap-2"
                  >
                    {info.action}
                    <span>→</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on Map</h2>
                <p className="text-gray-600 mb-6">
                  Visit us at our training center in Ameerpet, Hyderabad. We're easily accessible and well-connected.
                </p>
              </div>
              
              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.4482!3d17.4486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dac93a2d0d%3A0x6b422c0325e5b1a1!2sManjeera%20Plaza%2C%20Plot%20No%20403%2C%20Opposite%20Aditya%20Trade%20Center%2C%20Ameerpet%2C%20Hyderabad%2C%20Telangana%20500038!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NVNS Software Solutions Location - Manjeera Plaza, Ameerpet, Hyderabad"
                ></iframe>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  Full Address
                </h3>
                <address className="text-gray-700 not-italic leading-relaxed">
                  Manjeera Plaza, Plot No 403<br />
                  Opposite Aditya Trade Center<br />
                  Ameerpet, Hyderabad - 500038<br />
                  Telangana, India
                </address>
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitMessage.text && (
                <div className={`mb-6 p-4 rounded-lg border-2 ${
                  submitMessage.type === 'success'
                    ? 'bg-green-50 text-green-800 border-green-200'
                    : 'bg-red-50 text-red-800 border-red-200'
                }`}>
                  <div className="flex items-start gap-2">
                    {submitMessage.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600" />
                    ) : (
                      <X className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-600" />
                    )}
                    <p className="text-sm font-medium">{submitMessage.text}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Course Interested In (Optional)
                  </label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter course name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 border-2 border-green-600 hover:border-green-700"
                >
                  <MessageCircle className="h-5 w-5" />
                  Or Contact via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Our team is always ready to assist you</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Easy Location</h3>
                <p className="text-gray-600 text-sm">Centrally located in Ameerpet, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        defaultMessage="Hello! I would like to contact you."
      />
    </div>
  )
}

export default Contact

