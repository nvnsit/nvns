import React, { useState } from 'react'
import { X, Loader2, CheckCircle, MessageCircle, User, Mail, Phone, BookOpen, FileText, GraduationCap, Sparkles } from 'lucide-react'
import { sendEnrollmentEmail } from '../utils/emailService'
import { openWhatsApp } from '../utils/whatsapp'

const EnrollmentForm = ({ isOpen, onClose, courseName = '', courseSlug = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: courseName || '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' })

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
      const enrollmentData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course || courseName || 'General Enrollment',
        learningPath: 'Not specified',
        message: formData.message || `Enrollment request for ${formData.course || courseName}`
      }

      const result = await sendEnrollmentEmail(enrollmentData)

      if (result.success) {
        setSubmitMessage({
          type: 'success',
          text: 'Thank you! Your enrollment request has been submitted. We will contact you soon.'
        })
        setFormData({ name: '', email: '', phone: '', course: courseName || '', message: '' })
        setTimeout(() => {
          onClose()
          setSubmitMessage({ type: '', text: '' })
        }, 3000)
      } else {
        setSubmitMessage({
          type: 'error',
          text: result.error || 'Failed to submit. Please try again or contact us via WhatsApp.'
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full relative shadow-2xl max-h-[95vh] overflow-hidden flex flex-col animate-slide-up">
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/90 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Enroll Now</h3>
                <p className="text-white/90 text-sm">Start your learning journey today</p>
              </div>
            </div>
            {courseName && (
              <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">{courseName}</span>
              </div>
            )}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitMessage.text && (
            <div className={`mb-6 p-4 rounded-xl border-2 ${
              submitMessage.type === 'success'
                ? 'bg-green-50 text-green-800 border-green-200'
                : 'bg-red-50 text-red-800 border-red-200'
            } animate-slide-up`}>
              <div className="flex items-start gap-3">
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
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <User className="h-4 w-4 text-primary-600" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="John Doe"
                />
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Mail className="h-4 w-4 text-primary-600" />
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="john.doe@example.com"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Phone className="h-4 w-4 text-primary-600" />
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="+91 9876543210"
                />
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Course Field (if not pre-filled) */}
            {!courseName && (
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <BookOpen className="h-4 w-4 text-primary-600" />
                  Course Interested In
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter course name"
                  />
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            )}

            {/* Message Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FileText className="h-4 w-4 text-primary-600" />
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                placeholder="Any additional information or questions you'd like to share..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mt-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting Enrollment...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Submit Enrollment
                </>
              )}
            </button>

            {/* WhatsApp Alternative */}
            <button
              type="button"
              onClick={() => {
                onClose()
                openWhatsApp(`Hello! I am interested in enrolling in ${courseName || 'a course'}.`)
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 border-2 border-green-600 hover:border-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              Or Contact via WhatsApp
            </button>
          </form>

          {/* Privacy Note */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              We respect your privacy. Your information is 100% secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnrollmentForm

