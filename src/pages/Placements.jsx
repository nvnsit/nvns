import React, { useEffect, useRef, useState } from 'react'
import { Briefcase, MapPin, DollarSign, Building2, TrendingUp, CheckCircle, ArrowRight, Users, Phone, Mail, Calendar, Target, Award, FileText, MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsapp'
import { CompanyLogo } from '../utils/companyLogos'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import ContactForm from '../components/ContactForm'

const Placements = () => {
  const [visibleSections, setVisibleSections] = useState({})
  const [showContactForm, setShowContactForm] = useState(false)
  const sectionRefs = useRef({})

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Set all sections as visible initially
    setVisibleSections({
      stats: true,
      process: true,
      benefits: true,
      companies: true,
      recent: true,
      domain: true,
      topCompanies: true,
      stories: true,
    })
  }, [])

  useEffect(() => {
    const observers = []
    const sectionIds = ['stats', 'process', 'benefits', 'companies', 'recent', 'domain', 'topCompanies', 'stories']

    sectionIds.forEach((sectionId) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({ ...prev, [sectionId]: true }))
            }
          })
        },
        { threshold: 0.1 }
      )

      if (sectionRefs.current[sectionId]) {
        observer.observe(sectionRefs.current[sectionId])
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const placementStats = [
    { number: '1000+', label: 'Annual Placements', icon: <Users className="h-6 w-6" /> },
    { number: '95%', label: 'Placement Rate', icon: <TrendingUp className="h-6 w-6" /> },
    { number: '500+', label: 'Partner Companies', icon: <Building2 className="h-6 w-6" /> },
    { number: '6.5 LPA', label: 'Average Salary', icon: <span className="text-2xl font-bold text-primary-600">₹</span> },
  ]

  const companies = [
    { name: 'TCS', logo: 'TCS', location: 'Hyderabad', roles: ['Software Engineer', 'System Analyst', 'Java Developer', 'Full Stack Developer'], salary: '4-8 LPA', openings: 45 },
    { name: 'Infosys', logo: 'Infosys', location: 'Bangalore', roles: ['Developer', 'Consultant', 'Full Stack Developer', 'DevOps Engineer'], salary: '4-9 LPA', openings: 52 },
    { name: 'Wipro', logo: 'Wipro', location: 'Pune', roles: ['Full Stack Developer', 'DevOps Engineer', 'Cloud Engineer', 'Data Engineer'], salary: '4-8 LPA', openings: 38 },
    { name: 'Accenture', logo: 'Accenture', location: 'Mumbai', roles: ['Java Developer', 'Cloud Engineer', 'Data Engineer', 'AI Engineer'], salary: '5-10 LPA', openings: 41 },
    { name: 'Cognizant', logo: 'Cognizant', location: 'Chennai', roles: ['Python Developer', 'Data Scientist', 'AI Engineer', 'ML Engineer'], salary: '5-9 LPA', openings: 47 },
    { name: 'HCL', logo: 'HCL', location: 'Noida', roles: ['Software Developer', 'QA Engineer', 'Automation Tester', 'Performance Tester'], salary: '4-8 LPA', openings: 35 },
    { name: 'Capgemini', logo: 'Capgemini', location: 'Pune', roles: ['Full Stack Developer', 'DevOps Engineer', 'Cloud Architect'], salary: '4-9 LPA', openings: 42 },
    { name: 'Tech Mahindra', logo: 'Tech Mahindra', location: 'Hyderabad', roles: ['Java Developer', 'Python Developer', 'React Developer'], salary: '4-8 LPA', openings: 33 },
    { name: 'LTI', logo: 'LTI', location: 'Mumbai', roles: ['Software Engineer', 'Cloud Developer', 'Microservices Developer'], salary: '4-8 LPA', openings: 29 },
    { name: 'IBM', logo: 'IBM', location: 'Bangalore', roles: ['Cloud Engineer', 'Data Engineer', 'AI/ML Engineer'], salary: '6-12 LPA', openings: 28 },
    { name: 'Microsoft', logo: 'Microsoft', location: 'Hyderabad', roles: ['Software Engineer', 'Cloud Solution Architect', 'Data Engineer'], salary: '8-15 LPA', openings: 15 },
    { name: 'Amazon', logo: 'Amazon', location: 'Bangalore', roles: ['SDE', 'Cloud Engineer', 'Data Engineer'], salary: '10-18 LPA', openings: 22 },
    { name: 'Oracle', logo: 'Oracle', location: 'Bangalore', roles: ['Java Developer', 'Cloud Engineer', 'Database Administrator'], salary: '6-11 LPA', openings: 19 },
    { name: 'Dell', logo: 'Dell', location: 'Bangalore', roles: ['Software Engineer', 'Cloud Developer', 'DevOps Engineer'], salary: '5-10 LPA', openings: 24 },
    { name: 'Cisco', logo: 'Cisco', location: 'Bangalore', roles: ['Network Engineer', 'Cloud Engineer', 'Security Engineer'], salary: '7-13 LPA', openings: 18 },
  ]

  const placementProcess = [
    {
      step: '01',
      title: 'Resume Building',
      description: 'Our experts help you create an ATS-friendly resume that stands out to recruiters. We ensure your resume highlights your skills, projects, and achievements effectively.',
      icon: <FileText className="h-8 w-8" />,
    },
    {
      step: '02',
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation to identify your strengths and areas for improvement. We conduct technical assessments and provide detailed feedback.',
      icon: <Target className="h-8 w-8" />,
    },
    {
      step: '03',
      title: 'Interview Preparation',
      description: 'Mock interviews, technical rounds, and HR preparation sessions. Practice with industry experts and get personalized feedback.',
      icon: <MessageCircle className="h-8 w-8" />,
    },
    {
      step: '04',
      title: 'Job Matching',
      description: 'We match your profile with suitable openings from our partner companies. Our placement team ensures the best fit for your skills and career goals.',
      icon: <Briefcase className="h-8 w-8" />,
    },
    {
      step: '05',
      title: 'Interview Scheduling',
      description: 'We coordinate with companies to schedule interviews at your convenience. We handle all communication and follow-ups.',
      icon: <Calendar className="h-8 w-8" />,
    },
    {
      step: '06',
      title: 'Offer & Onboarding',
      description: 'Post-selection support including offer negotiation and onboarding guidance. We help you make informed decisions and transition smoothly.',
      icon: <Award className="h-8 w-8" />,
    },
  ]

  const benefits = [
    '100% Placement Assistance',
    '500+ Partner Companies',
    'Dedicated Placement Officer',
    'Interview Preparation Sessions',
    'Resume Building Support',
    'Mock Interview Practice',
    'Salary Negotiation Guidance',
    'Post-Placement Support',
    'Career Counseling',
    'Industry Connections',
    'Job Portal Access',
    'Regular Job Updates',
  ]

  const successStories = [
    {
      name: 'Rajesh Kumar',
      course: 'Full Stack Java',
      company: 'TCS',
      salary: '6.5 LPA',
      location: 'Hyderabad',
      placementDate: 'Jan 2024',
      testimonial: 'The placement team was extremely supportive. They helped me prepare for interviews and connected me with the right opportunities. I got placed within 3 weeks of completing my course.',
      image: 'RK',
    },
    {
      name: 'Priya G',
      course: 'Data Science',
      company: 'Infosys',
      salary: '7 LPA',
      location: 'Bangalore',
      placementDate: 'Feb 2024',
      testimonial: 'I got placed within 2 months of completing my course. The mock interviews and resume building sessions were very helpful. The placement officer was always available to answer my queries.',
      image: 'PS',
    },
    {
      name: 'Arjun M',
      course: 'DevOps',
      company: 'Accenture',
      salary: '8 LPA',
      location: 'Mumbai',
      placementDate: 'Mar 2024',
      testimonial: 'The placement assistance was excellent. They guided me through every step of the process and helped me negotiate my offer. I received multiple offers and they helped me choose the best one.',
      image: 'AP',
    },
    {
      name: 'Sneha Reddy',
      course: 'Full Stack Python',
      company: 'Cognizant',
      salary: '7.5 LPA',
      location: 'Chennai',
      placementDate: 'Apr 2024',
      testimonial: 'Coming from a non-IT background, I was worried about placements. But the team provided excellent support and I got placed in my dream company. The interview preparation was top-notch.',
      image: 'SR',
    },
    {
      name: 'Kiran Kumar',
      course: 'Gen AI Development',
      company: 'Microsoft',
      salary: '12 LPA',
      location: 'Hyderabad',
      placementDate: 'May 2024',
      testimonial: 'The placement team helped me prepare for technical rounds at Microsoft. Their guidance on system design and AI concepts was invaluable. I got an offer that exceeded my expectations.',
      image: 'KK',
    },
    {
      name: 'Anjali Varma',
      course: 'Cyber Security',
      company: 'Cisco',
      salary: '9 LPA',
      location: 'Bangalore',
      placementDate: 'Jun 2024',
      testimonial: 'I was placed in Cisco within a month of course completion. The placement team coordinated everything perfectly. The security domain training and interview prep were excellent.',
      image: 'AV',
    },
    {
      name: 'Rahul D',
      course: 'DevOps & Cloud',
      company: 'Amazon',
      salary: '11 LPA',
      location: 'Bangalore',
      placementDate: 'Jul 2024',
      testimonial: 'The placement process was smooth and professional. They helped me prepare for Amazon\'s rigorous interview process. The mock interviews with industry experts were very helpful.',
      image: 'RS',
    },
    {
      name: 'Meera K',
      course: 'Data Science',
      company: 'IBM',
      salary: '8.5 LPA',
      location: 'Bangalore',
      placementDate: 'Aug 2024',
      testimonial: 'I got multiple offers thanks to the placement team\'s efforts. They helped me understand which role would be best for my career growth. The resume optimization made a huge difference.',
      image: 'MN',
    },
    {
      name: 'Vikram Rao',
      course: 'Full Stack Java',
      company: 'Wipro',
      salary: '6 LPA',
      location: 'Pune',
      placementDate: 'Sep 2024',
      testimonial: 'The placement assistance was comprehensive. From resume building to final offer negotiation, they supported me at every step. I\'m grateful for their guidance.',
      image: 'VR',
    },
    {
      name: 'Divya A',
      course: 'AI Testing',
      company: 'HCL',
      salary: '7 LPA',
      location: 'Noida',
      placementDate: 'Oct 2024',
      testimonial: 'As a fresher, I was nervous about interviews. But the placement team\'s mock interview sessions built my confidence. I got placed in my first attempt itself.',
      image: 'DP',
    },
  ]

  const recentPlacements = [
    { name: 'Arjun S', course: 'Full Stack Java', company: 'TCS', salary: '6.5 LPA', date: 'Nov 2024' },
    { name: 'Kavya Iyer', course: 'Data Science', company: 'Infosys', salary: '7.2 LPA', date: 'Nov 2024' },
    { name: 'Rohit D', course: 'DevOps', company: 'Accenture', salary: '8.5 LPA', date: 'Nov 2024' },
    { name: 'Shreya A', course: 'Full Stack Python', company: 'Cognizant', salary: '7.8 LPA', date: 'Oct 2024' },
    { name: 'Nikhil V', course: 'Gen AI', company: 'Microsoft', salary: '13 LPA', date: 'Oct 2024' },
    { name: 'Pooja Reddy', course: 'Cyber Security', company: 'Cisco', salary: '9.5 LPA', date: 'Oct 2024' },
    { name: 'Aditya Sharma', course: 'Cloud Engineering', company: 'Amazon', salary: '12 LPA', date: 'Sep 2024' },
    { name: 'Neha G', course: 'Data Science', company: 'IBM', salary: '8.8 LPA', date: 'Sep 2024' },
  ]

  const placementByDomain = [
    { domain: 'Full Stack Development', count: 320, percentage: 32 },
    { domain: 'Data Science & AI', count: 280, percentage: 28 },
    { domain: 'DevOps & Cloud', count: 180, percentage: 18 },
    { domain: 'Cyber Security', count: 120, percentage: 12 },
    { domain: 'Testing & QA', count: 100, percentage: 10 },
  ]

  const topHiringCompanies = [
    { name: 'TCS', placements: 145, avgSalary: '6.2 LPA' },
    { name: 'Infosys', placements: 132, avgSalary: '6.8 LPA' },
    { name: 'Wipro', placements: 118, avgSalary: '6.5 LPA' },
    { name: 'Accenture', placements: 105, avgSalary: '7.2 LPA' },
    { name: 'Cognizant', placements: 98, avgSalary: '7.0 LPA' },
    { name: 'HCL', placements: 87, avgSalary: '6.0 LPA' },
    { name: 'Capgemini', placements: 76, avgSalary: '6.3 LPA' },
    { name: 'Tech Mahindra', placements: 65, avgSalary: '6.1 LPA' },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Briefcase className="h-4 w-4" />
              Placement Assistance
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Launch Your Career with Confidence
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              We don't just train you—we place you. Our dedicated placement team works tirelessly to connect you with top companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openWhatsApp('Hello! I am interested in placement assistance.')}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Briefcase className="h-5 w-5" />
                Get Placement Assistance
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Placement Team
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={(el) => (sectionRefs.current['stats'] = el)} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {placementStats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center ${visibleSections.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
        </div>
      </section>

      {/* Placement Process */}
      <section ref={(el) => (sectionRefs.current['process'] = el)} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Placement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive 6-step process designed to ensure your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placementProcess.map((process, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary-600 ${visibleSections.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4 text-primary-600">
                    {process.icon}
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-primary-600 mr-2">
                      {process.step}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 inline">
                      {process.title}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={(el) => (sectionRefs.current['benefits'] = el)} className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive placement support at every step of your journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 ${visibleSections.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section ref={(el) => (sectionRefs.current['companies'] = el)} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Partner Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have strong relationships with leading IT companies across India
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary-200 ${visibleSections.companies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {company.name}
                    </h4>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {company.location}
                    </div>
                  </div>
                  <div className="h-12 w-24 flex items-center justify-center">
                    <CompanyLogo companyName={company.name} className="h-10 w-auto object-contain max-w-full" />
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2 font-medium">Open Roles:</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {company.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg font-bold text-green-600">₹</span>
                    <span className="font-semibold text-gray-900">Salary Range: {company.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Placements */}
      <section ref={(el) => (sectionRefs.current['recent'] = el)} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recent Placements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest success stories from our placement program
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {recentPlacements.map((placement, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-primary-50 to-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100 ${visibleSections.recent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {placement.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-xs text-gray-500">{placement.date}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{placement.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{placement.course}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary-600">{placement.company}</span>
                  <span className="text-xs font-bold text-green-600">{placement.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement by Domain */}
      <section ref={(el) => (sectionRefs.current['domain'] = el)} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Placements by Domain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our students are placed across various technology domains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {placementByDomain.map((domain, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center ${visibleSections.domain ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{domain.count}</div>
                <div className="text-sm text-gray-600 mb-3">{domain.domain}</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${domain.percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">{domain.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Hiring Companies */}
      <section ref={(el) => (sectionRefs.current['topCompanies'] = el)} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Hiring Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Companies that hire most from our institute
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topHiringCompanies.map((company, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100 ${visibleSections.topCompanies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-20 flex items-center justify-center">
                    <CompanyLogo companyName={company.name} className="h-8 w-auto object-contain max-w-full" />
                  </div>
                  <span className="text-2xl font-bold text-primary-600">{company.placements}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{company.name}</h4>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-600">{company.placements} Placements</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-green-600">₹</span>
                  <span className="text-sm font-semibold text-gray-900">Avg: {company.avgSalary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section ref={(el) => (sectionRefs.current['stories'] = el)} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from students who got placed through our program
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${visibleSections.stories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center text-primary-600 font-bold mr-3">
                    {story.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.course}</p>
                  </div>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-12 flex items-center justify-center">
                      <CompanyLogo companyName={story.company} className="h-4 w-auto object-contain max-w-full" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">{story.company}</span>
                    <span className="text-xs text-gray-500">• {story.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">₹</span>
                    <span className="font-semibold text-gray-900 text-sm">{story.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-xs text-gray-500">Placed in {story.placementDate}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{story.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Career Journey?
            </h3>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of students who have successfully placed in top companies. Let's get you placed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openWhatsApp('Hello! I am interested in placement assistance.')}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Briefcase className="h-5 w-5" />
                Get Placement Assistance
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-100">
              <a href="tel:+919032286667" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>9032286667 | 9032856668</span>
              </a>
              <a href="mailto:info@nvnssoftwaresolutions.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@nvnssoftwaresolutions.com</span>
              </a>
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
        defaultMessage="Hello! I would like to schedule a consultation with the placement team."
      />
    </div>
  )
}

export default Placements

