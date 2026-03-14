import React, { useState, useEffect, useRef } from 'react'
import { Briefcase, MapPin, DollarSign, Building2, TrendingUp, CheckCircle, ArrowRight, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { openWhatsApp } from '../utils/whatsapp'
import { CompanyLogo } from '../utils/companyLogos'

const Placements = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Set visible immediately for home page display
    setIsVisible(true)
    
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
  const [selectedCompany, setSelectedCompany] = useState(null)

  const placementStats = [
    { number: '1000+', label: 'Annual Placements', icon: <Users className="h-6 w-6" /> },
    { number: '95%', label: 'Placement Rate', icon: <TrendingUp className="h-6 w-6" /> },
    { number: '500+', label: 'Partner Companies', icon: <Building2 className="h-6 w-6" /> },
    { number: '6.5 LPA', label: 'Average Salary', icon: <DollarSign className="h-6 w-6" /> },
  ]

  const companies = [
    { name: 'TCS', logo: 'TCS', location: 'Hyderabad', roles: ['Software Engineer', 'System Analyst'] },
    { name: 'Infosys', logo: 'Infosys', location: 'Bangalore', roles: ['Developer', 'Consultant'] },
    { name: 'Wipro', logo: 'Wipro', location: 'Pune', roles: ['Full Stack Developer', 'DevOps Engineer'] },
    { name: 'Accenture', logo: 'Accenture', location: 'Mumbai', roles: ['Java Developer', 'Cloud Engineer'] },
    { name: 'Cognizant', logo: 'Cognizant', location: 'Chennai', roles: ['Python Developer', 'Data Scientist'] },
    { name: 'HCL', logo: 'HCL', location: 'Noida', roles: ['Software Developer', 'QA Engineer'] },
  ]

  const placementProcess = [
    {
      step: '01',
      title: 'Resume Building',
      description: 'Our experts help you create an ATS-friendly resume that stands out to recruiters.',
    },
    {
      step: '02',
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation to identify your strengths and areas for improvement.',
    },
    {
      step: '03',
      title: 'Interview Preparation',
      description: 'Mock interviews, technical rounds, and HR preparation sessions.',
    },
    {
      step: '04',
      title: 'Job Matching',
      description: 'We match your profile with suitable openings from our partner companies.',
    },
    {
      step: '05',
      title: 'Interview Scheduling',
      description: 'We coordinate with companies to schedule interviews at your convenience.',
    },
    {
      step: '06',
      title: 'Offer & Onboarding',
      description: 'Post-selection support including offer negotiation and onboarding guidance.',
    },
  ]

  const benefits = [
    '100% Placement Assistance',
    '50+ Partner Companies',
    'Dedicated Placement Officer',
    'Interview Preparation Sessions',
    'Resume Building Support',
    'Mock Interview Practice',
    'Salary Negotiation Guidance',
    'Post-Placement Support',
  ]

  return (
    <section id="placements" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Briefcase className="h-4 w-4" />
            Placement Assistance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Launch Your Career with Confidence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just train you—we place you. Our dedicated placement team works tirelessly to connect you with top companies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {placementStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center text-primary-600 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Overview */}
        <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Placement Process
              </h3>
              <ul className="space-y-3">
                {placementProcess.slice(0, 3).map((process, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold mt-1">{process.step}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{process.title}</h4>
                      <p className="text-sm text-gray-600">{process.description.substring(0, 80)}...</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Key Benefits
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {benefits.slice(0, 6).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partner Companies Preview */}
        <div className="mb-12" ref={sectionRef}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Partner Companies
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companies.slice(0, 6).map((company, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-12 flex items-center justify-center mb-2">
                  <CompanyLogo companyName={company.name} className="h-8 w-auto object-contain max-w-full" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{company.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Career Journey?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully placed in top companies. Let's get you placed!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/placements')}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Briefcase className="h-5 w-5" />
              View Full Details
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => openWhatsApp('Hello! I am interested in placement assistance.')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Placement Assistance
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Placements

