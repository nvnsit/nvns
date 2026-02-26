import React, { useEffect, useRef, useState } from 'react'
import { Users, Target, FileText, MessageCircle, TrendingUp, CheckCircle, ArrowRight, Phone, Mail, BookOpen, Briefcase, Award, Lightbulb, Heart, Zap, DollarSign, Clock } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsapp'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import ContactForm from '../components/ContactForm'

const CareerGuidance = () => {
  const [visibleSections, setVisibleSections] = useState({})
  const [showContactForm, setShowContactForm] = useState(false)
  const sectionRefs = useRef({})

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Set all sections as visible initially
    setVisibleSections({
      services: true,
      process: true,
      benefits: true,
      progression: true,
      salary: true,
      transitions: true,
      skills: true,
      testimonials: true,
    })
  }, [])

  useEffect(() => {
    const observers = []
    const sectionIds = ['services', 'process', 'benefits', 'progression', 'salary', 'transitions', 'skills', 'testimonials']

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

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: '1-on-1 Mentorship',
      description: 'Personalized guidance from industry experts who understand your career goals and help you navigate your professional journey.',
      features: ['Personalized Career Plan', 'Regular Check-ins', 'Expert Advice', 'Goal Setting'],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Resume Building',
      description: 'Create an ATS-friendly resume that stands out. Our experts help you highlight your skills, projects, and achievements effectively.',
      features: ['ATS Optimization', 'Multiple Formats', 'Industry-Specific Templates', 'Review & Feedback'],
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Interview Preparation',
      description: 'Comprehensive interview preparation including mock interviews, technical rounds, and HR preparation sessions.',
      features: ['Mock Interviews', 'Technical Prep', 'HR Round Practice', 'Feedback Sessions'],
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Career Path Planning',
      description: 'Get expert guidance on choosing the right career path based on your skills, interests, and market demand.',
      features: ['Skill Assessment', 'Career Mapping', 'Industry Insights', 'Growth Strategy'],
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Skill Development',
      description: 'Identify skill gaps and get recommendations on courses and certifications to boost your career prospects.',
      features: ['Skill Gap Analysis', 'Learning Path', 'Certification Guidance', 'Progress Tracking'],
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Job Search Strategy',
      description: 'Learn effective job search strategies, networking techniques, and how to leverage online platforms for opportunities.',
      features: ['Job Search Tips', 'Networking Strategies', 'LinkedIn Optimization', 'Application Techniques'],
    },
  ]

  const guidanceProcess = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Schedule a free consultation to discuss your career goals, current situation, and challenges.',
      icon: <MessageCircle className="h-6 w-6" />,
    },
    {
      step: '02',
      title: 'Assessment',
      description: 'Comprehensive assessment of your skills, experience, interests, and career aspirations.',
      icon: <Target className="h-6 w-6" />,
    },
    {
      step: '03',
      title: 'Personalized Plan',
      description: 'Create a customized career development plan tailored to your goals and timeline.',
      icon: <FileText className="h-6 w-6" />,
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Work with your mentor to implement the plan, develop skills, and build your professional profile.',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      step: '05',
      title: 'Regular Reviews',
      description: 'Regular check-ins to track progress, adjust strategies, and ensure you stay on the right path.',
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      step: '06',
      title: 'Career Success',
      description: 'Achieve your career goals with ongoing support and guidance from our expert team.',
      icon: <Award className="h-6 w-6" />,
    },
  ]

  const benefits = [
    'Expert Career Counselors',
    'Personalized Guidance',
    'Industry Insights',
    'Resume & LinkedIn Optimization',
    'Interview Preparation',
    'Skill Development Plans',
    'Career Path Mapping',
    'Job Search Strategies',
    'Salary Negotiation Tips',
    'Ongoing Support',
    'Networking Opportunities',
    'Success Tracking',
  ]

  const testimonials = [
    {
      name: 'Sneha Reddy',
      role: 'Software Developer',
      company: 'TCS',
      testimonial: 'The career guidance helped me transition from a non-IT background to a successful software developer. The mentorship was invaluable.',
      rating: 5,
      image: 'SR',
    },
    {
      name: 'Kiran Kumar',
      role: 'Data Scientist',
      company: 'Infosys',
      testimonial: 'The resume building and interview preparation sessions were excellent. I got multiple offers and could choose the best one.',
      rating: 5,
      image: 'KK',
    },
    {
      name: 'Anjali Sharma',
      role: 'DevOps Engineer',
      company: 'Accenture',
      testimonial: 'The career path planning helped me understand which skills to develop. The personalized approach made all the difference.',
      rating: 5,
      image: 'AS',
    },
    {
      name: 'Rahul Mehta',
      role: 'Full Stack Developer',
      company: 'Wipro',
      testimonial: 'I was confused about my career direction. The career counselor helped me identify my strengths and choose the right path. Now I\'m working in my dream role.',
      rating: 5,
      image: 'RM',
    },
    {
      name: 'Priya Nair',
      role: 'Cloud Engineer',
      company: 'Amazon',
      testimonial: 'The skill gap analysis was eye-opening. They helped me create a learning plan and I successfully transitioned to cloud engineering. Best decision ever!',
      rating: 5,
      image: 'PN',
    },
    {
      name: 'Vikram Singh',
      role: 'AI/ML Engineer',
      company: 'Microsoft',
      testimonial: 'The career guidance team helped me understand the AI/ML landscape and prepare for interviews. Their industry insights were incredibly valuable.',
      rating: 5,
      image: 'VS',
    },
    {
      name: 'Meera Joshi',
      role: 'QA Automation Engineer',
      company: 'HCL',
      testimonial: 'As a career switcher, I needed guidance on how to present my experience. The resume optimization and interview prep sessions were game-changers.',
      rating: 5,
      image: 'MJ',
    },
    {
      name: 'Arjun Patel',
      role: 'Data Engineer',
      company: 'Cognizant',
      testimonial: 'The mentorship program helped me understand the data engineering career path. My mentor provided practical advice that I still use today.',
      rating: 5,
      image: 'AP',
    },
  ]

  const careerProgression = [
    {
      stage: 'Entry Level',
      role: 'Junior Developer',
      salary: '4-6 LPA',
      skills: ['Programming Fundamentals', 'Basic Frameworks', 'Version Control'],
      duration: '0-2 years',
    },
    {
      stage: 'Mid Level',
      role: 'Software Developer',
      salary: '6-10 LPA',
      skills: ['Advanced Frameworks', 'Database Design', 'API Development'],
      duration: '2-4 years',
    },
    {
      stage: 'Senior Level',
      role: 'Senior Developer',
      salary: '10-15 LPA',
      skills: ['System Design', 'Architecture', 'Team Leadership'],
      duration: '4-6 years',
    },
    {
      stage: 'Lead Level',
      role: 'Tech Lead / Architect',
      salary: '15-25 LPA',
      skills: ['Technical Strategy', 'Mentoring', 'Cross-functional Collaboration'],
      duration: '6+ years',
    },
  ]

  const industrySalaryInsights = [
    { role: 'Full Stack Developer', min: 5, max: 12, avg: 8, demand: 'High' },
    { role: 'Data Scientist', min: 6, max: 15, avg: 10, demand: 'Very High' },
    { role: 'DevOps Engineer', min: 7, max: 14, avg: 10, demand: 'High' },
    { role: 'Cloud Engineer', min: 8, max: 16, avg: 11, demand: 'Very High' },
    { role: 'AI/ML Engineer', min: 9, max: 18, avg: 12, demand: 'Very High' },
    { role: 'Cyber Security', min: 7, max: 15, avg: 10, demand: 'High' },
    { role: 'QA Automation', min: 5, max: 10, avg: 7, demand: 'Medium' },
    { role: 'Mobile Developer', min: 6, max: 12, avg: 8, demand: 'High' },
  ]

  const careerTransitionStories = [
    {
      name: 'Rajesh Kumar',
      from: 'Mechanical Engineer',
      to: 'Full Stack Developer',
      timeline: '6 months',
      testimonial: 'Transitioned from mechanical engineering to software development. The career guidance helped me identify transferable skills and create a learning path.',
      currentRole: 'Software Developer at TCS',
      salary: '6.5 LPA',
    },
    {
      name: 'Sunita Devi',
      from: 'Banking Professional',
      to: 'Data Analyst',
      timeline: '4 months',
      testimonial: 'Left banking after 5 years to pursue data science. The career counselor helped me understand the field and prepare for the transition.',
      currentRole: 'Data Analyst at Infosys',
      salary: '7 LPA',
    },
    {
      name: 'Amit Verma',
      from: 'Marketing Executive',
      to: 'Digital Marketing Specialist',
      timeline: '3 months',
      testimonial: 'Wanted to specialize in digital marketing. The guidance helped me upskill and transition to a tech-focused marketing role.',
      currentRole: 'Digital Marketing Manager',
      salary: '8 LPA',
    },
  ]

  const skillDemandTrends = [
    { skill: 'Python', demand: 95, trend: 'up' },
    { skill: 'Java', demand: 88, trend: 'stable' },
    { skill: 'JavaScript', demand: 92, trend: 'up' },
    { skill: 'Cloud (AWS/Azure)', demand: 90, trend: 'up' },
    { skill: 'DevOps', demand: 85, trend: 'up' },
    { skill: 'Data Science', demand: 93, trend: 'up' },
    { skill: 'AI/ML', demand: 89, trend: 'up' },
    { skill: 'React', demand: 87, trend: 'stable' },
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
              <Users className="h-4 w-4" />
              Career Guidance
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Navigate Your Career Journey with Expert Guidance
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get personalized career counseling, resume building, interview prep, and ongoing mentorship from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openWhatsApp('Hello! I am interested in career guidance services.')}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Users className="h-5 w-5" />
                Get Career Guidance
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
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={(el) => (sectionRefs.current['services'] = el)} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Career Guidance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to help you achieve your career goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary-600 ${visibleSections.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={(el) => (sectionRefs.current['process'] = el)} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to your career development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guidanceProcess.map((process, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${visibleSections.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                    <h4 className="text-lg font-bold text-gray-900 inline">
                      {process.title}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
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
              Comprehensive career support at every step
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

      {/* Career Progression */}
      <section ref={(el) => (sectionRefs.current['progression'] = el)} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Career Progression Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand the typical career progression in tech roles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerProgression.map((stage, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary-600 ${visibleSections.progression ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {stage.stage}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stage.role}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-green-600">₹</span>
                  <span className="font-semibold text-gray-900">{stage.salary}</span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  <Clock className="h-4 w-4 inline mr-1" />
                  {stage.duration}
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Key Skills:</p>
                  {stage.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Salary Insights */}
      <section ref={(el) => (sectionRefs.current['salary'] = el)} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry Salary Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current salary ranges and demand for different tech roles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySalaryInsights.map((insight, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100 ${visibleSections.salary ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="font-bold text-gray-900 mb-3">{insight.role}</h4>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Min:</span>
                    <span className="font-semibold">{insight.min} LPA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Max:</span>
                    <span className="font-semibold">{insight.max} LPA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg:</span>
                    <span className="font-bold text-primary-600">{insight.avg} LPA</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs text-gray-600">Demand:</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    insight.demand === 'Very High' ? 'bg-green-100 text-green-700' :
                    insight.demand === 'High' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {insight.demand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Transition Stories */}
      <section ref={(el) => (sectionRefs.current['transitions'] = el)} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Career Transition Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of professionals who successfully switched careers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {careerTransitionStories.map((story, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${visibleSections.transitions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center text-primary-600 font-bold mr-3">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <p className="text-xs text-gray-500">{story.timeline} transition</p>
                  </div>
                </div>
                <div className="mb-4 p-3 bg-primary-50 rounded-lg">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">From:</span>
                    <span className="font-semibold text-gray-900">{story.from}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary-600 mx-auto my-1" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">To:</span>
                    <span className="font-semibold text-primary-600">{story.to}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-3">
                  "{story.testimonial}"
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-1">Current Role:</p>
                  <p className="text-sm font-semibold text-gray-900">{story.currentRole}</p>
                  <p className="text-sm font-bold text-green-600 mt-1">{story.salary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Demand Trends */}
      <section ref={(el) => (sectionRefs.current['skills'] = el)} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              In-Demand Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skills that are currently in high demand in the job market
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillDemandTrends.map((skill, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 ${visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{skill.skill}</h4>
                  <TrendingUp className={`h-5 w-5 ${skill.trend === 'up' ? 'text-green-600' : 'text-gray-400'}`} />
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Demand:</span>
                    <span className="font-semibold text-gray-900">{skill.demand}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        skill.demand >= 90 ? 'bg-green-600' :
                        skill.demand >= 85 ? 'bg-blue-600' :
                        'bg-yellow-600'
                      }`}
                      style={{ width: `${skill.demand}%` }}
                    ></div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  skill.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {skill.trend === 'up' ? '↑ Growing' : '→ Stable'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={(el) => (sectionRefs.current['testimonials'] = el)} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from professionals who transformed their careers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center text-primary-600 font-bold mr-3">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                {testimonial.company && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                )}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{testimonial.testimonial}"
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
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl text-primary-100 mb-8">
              Get expert guidance and take the next step in your career journey. Schedule a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openWhatsApp('Hello! I am interested in career guidance services.')}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Users className="h-5 w-5" />
                Get Career Guidance
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
              <a href="tel:+916304576965" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>+91 63045 76965</span>
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
        defaultMessage="Hello! I would like to schedule a career consultation."
      />
    </div>
  )
}

export default CareerGuidance

