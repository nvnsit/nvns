import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  Clock, Star, Check, Download, ArrowRight, ArrowLeft,
  Users, Award, Briefcase, BookOpen, Code, Cloud, Shield
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import EnrollmentForm from '../components/EnrollmentForm'
import ContactForm from '../components/ContactForm'
import { getCourseBySlug } from '../data/coursesData'

const CourseDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const course = getCourseBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])
  const [showForm, setShowForm] = useState(false)
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false)
  const [selectedPath, setSelectedPath] = useState(null)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <button onClick={() => navigate('/')} className="btn-primary">
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  const openEnrollmentForm = (path) => {
    setSelectedPath(path)
    setShowEnrollmentForm(true)
  }

  const iconMap = {
    'Core Java & Programming': Code,
    'Python Fundamentals': Code,
    'Fundamentals of Cybersecurity': Shield,
    'Quantum Mechanics Basics': Code,
    'AI Testing Fundamentals': Code,
    'Deep Learning Fundamentals': Code,
    'DevOps Fundamentals': Cloud,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Courses
          </button>
          
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Industry-Leading Training Program
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {course.title}
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-200 mb-6">
              {course.subtitle}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {course.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowForm(true)}
                className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 flex items-center justify-center"
              >
                Talk To Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => setShowEnrollmentForm(true)}
                className="btn-secondary border-white text-white hover:bg-white/10 flex items-center justify-center"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Course Schedule
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <Clock className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Session Time</h3>
                <p className="text-primary-600 font-bold">{course.sessionTime}</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <Clock className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Course Duration</h3>
                <p className="text-primary-600 font-bold">{course.duration}</p>
              </div>
            </div>
            <div className="text-center">
              <button className="btn-primary flex items-center justify-center mx-auto">
                <Download className="h-5 w-5 mr-2" />
                Download Complete Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Course Features & Highlights
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Everything you need to become a successful professional
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <Check className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Benefits
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {course.additionalBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-3">●</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills You'll Master */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Skills You'll Master
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Comprehensive skill set covering every aspect of modern development
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {course.skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Complete Course Curriculum
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Comprehensive modules covering every aspect of {course.title}
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {course.curriculum.map((module, index) => {
              const IconComponent = iconMap[module.title] || BookOpen
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-primary-600">
              {course.curriculum.length} Comprehensive Modules
            </p>
            <p className="text-gray-600 mt-2">450+ hours of in-depth training</p>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Choose Your Learning Path
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Select the program that best fits your career goals and schedule
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {course.learningPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{path.name}</h3>
                <p className="text-sm text-gray-600 mb-4">⏱ {path.duration}</p>
                <p className="text-sm text-gray-700 mb-4">{path.description}</p>
                <ul className="space-y-2 mb-6">
                  {path.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <button 
                    onClick={() => openEnrollmentForm(path)}
                    className="btn-primary w-full"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Prerequisites & Eligibility
          </h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Prerequisites</h3>
            <ul className="space-y-3">
              {course.prerequisites.map((req, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-600 italic">
              <strong>Special Note:</strong> Even if you don't meet all the criteria, we encourage you to reach out. Our counselors can guide you on the best path forward based on your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-primary-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-primary-200">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2K+</div>
              <div className="text-primary-200">Students Placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-200">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Land Your {course.title} JOB?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Don't wait! Join 100,000+ trained students and become part of 2,000+ success stories.
          </p>
          <button 
            onClick={() => setShowEnrollmentForm(true)}
            className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4"
          >
            Enroll Now →
          </button>
        </div>
      </section>

      {/* Enrollment Form Modal */}
      <EnrollmentForm
        isOpen={showEnrollmentForm}
        onClose={() => {
          setShowEnrollmentForm(false)
          setSelectedPath(null)
        }}
        courseName={course?.title}
        courseSlug={course?.slug}
      />

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        defaultMessage={course ? `Hello! I am interested in learning more about the ${course.title} course.` : 'Hello! I would like to know more about your courses.'}
      />

      <Footer />
      <WhatsAppFloat />

      {/* Enrollment Form Modal */}
      <EnrollmentForm
        isOpen={showEnrollmentForm}
        onClose={() => {
          setShowEnrollmentForm(false)
          setSelectedPath(null)
        }}
        courseName={course?.title}
        courseSlug={course?.slug}
      />

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        defaultMessage={course ? `Hello! I am interested in learning more about the ${course.title} course.` : 'Hello! I would like to know more about your courses.'}
      />
    </div>
  )
}

export default CourseDetail

