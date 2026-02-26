import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, TrendingUp, Briefcase, GraduationCap, Building2 } from 'lucide-react'
import ContactForm from './ContactForm'

const LearningJourney = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [selectedJourney, setSelectedJourney] = useState(null)
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
  const journeys = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Professional Upskilling',
      subtitle: 'Enterprise Solutions',
      description: 'For working professionals seeking to upgrade their skills and climb the corporate ladder.',
      stats: {
        courses: '40+',
        duration: '2-4 Months',
        placement: '95%'
      },
      features: [
        'Weekend Batches',
        'Flexible Timing',
        'Industry Certifications',
        'Salary Hike Guarantee'
      ],
      testimonial: {
        text: 'After just four months of training, I got placed as a Java Developer at Hiscope CyberLinks with a 6 LPA offer',
        author: 'Vinay'
      },
      cta: 'Explore Professional Upskilling'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Placement Bootcamps',
      subtitle: 'Fast-Track to Jobs',
      description: 'For working professionals seeking to upgrade their skills and climb the corporate ladder.',
      stats: {
        courses: '40+',
        duration: '2-4 Months',
        placement: '95%'
      },
      features: [
        '12-Hour Daily Sessions',
        'Real Projects',
        'Interview Prep',
        'Job Guarantee'
      ],
      testimonial: {
        text: 'They supported me all the way through my Data Science training until I got placed. Thank you, Training Institute',
        author: 'Rahul Patel'
      },
      cta: 'Explore Placement Bootcamps'
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Skill to Job Program',
      subtitle: 'Complete Career Switch',
      description: 'Perfect for freshers and professionals looking to transition into the IT industry with zero prior experience.',
      stats: {
        courses: '25+',
        duration: '4-6 Months',
        placement: '95%'
      },
      features: [
        'Zero to Hero Programs',
        'Aptitude & Communication Skills',
        'Mock Interviews & Resume Building',
        '100% Placement Assistance'
      ],
      testimonial: {
        text: 'The placement officers were really helpful. I was trained elsewhere, but Training Institute helped me finally get the job',
        author: 'Vanam Naveen'
      },
      cta: 'Explore Skill to Job Program'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Corporate Training',
      subtitle: 'Advance Your Career',
      description: 'Customized training programs for organizations to upskill their workforce.',
      stats: {
        courses: '50+',
        duration: 'Custom',
        placement: 'N/A'
      },
      features: [
        'On-site Training',
        'Custom Curriculum',
        'Team Assessments',
        'Progress Reports'
      ],
      testimonial: {
        text: 'Training Institute has a highly professional teaching style. Helped my team upskill in just three weeks',
        author: 'Jagadish'
      },
      cta: 'Explore Corporate Training'
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className={`text-center mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600">
            Master in-demand skills with our specialized programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {journeys.map((journey, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 scroll-fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                      {journey.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{journey.subtitle}</p>
                      <h3 className="text-2xl font-bold text-gray-900">{journey.title}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{journey.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                  <div>
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {journey.stats.courses}
                    </div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {journey.stats.duration}
                    </div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {journey.stats.placement}
                    </div>
                    <div className="text-sm text-gray-600">Placement</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {journey.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-700 italic mb-2">
                    "{journey.testimonial.text}"
                  </p>
                  <p className="text-sm font-semibold text-primary-600">
                    — {journey.testimonial.author}
                  </p>
                </div>

                <button 
                  onClick={() => {
                    setSelectedJourney(journey)
                    setShowContactForm(true)
                  }}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {journey.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={showContactForm}
        onClose={() => {
          setShowContactForm(false)
          setSelectedJourney(null)
        }}
        defaultMessage={selectedJourney ? `Hello! I am interested in the ${selectedJourney.title} program.` : 'Hello! I would like to know more about your programs.'}
      />
    </section>
  )
}

export default LearningJourney

