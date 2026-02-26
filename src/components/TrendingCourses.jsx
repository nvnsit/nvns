import React, { useEffect, useRef, useState } from 'react'
import { TrendingUp, Sparkles } from 'lucide-react'
import CourseCard from './CourseCard'

const TrendingCourses = () => {
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
  const courses = [
    {
      slug: 'fullstack-python',
      title: 'FullStack Python',
      subtitle: 'End-to-End Development',
      badge: 'Most Popular',
      duration: '5 Months',
      students: '1,800+',
      rating: 5.0,
      reviews: 800,
      description: 'Master full-stack development with Python, Django, React, and cloud deployment. Build complete web applications.',
      skills: ['Python', 'Django', 'React', 'PostgreSQL', 'AWS'],
      price: '₹35,000',
      batchInfo: {
        startDate: '26 Feb 2026',
        trainer: 'Mr. K V Rao'
      }
    },
    {
      slug: 'data-science',
      title: 'Full Stack Data Science & AI',
      subtitle: 'Unlock Intelligent Insights',
      badge: 'High Demand',
      duration: '4 Months',
      students: '3,000+',
      rating: 5.0,
      reviews: 2500,
      description: 'Master data science with Python, machine learning, statistical analysis, and data visualization.',
      skills: ['Python', 'Machine Learning', 'Statistics', 'Data Visualization'],
      price: '₹45,000',
      batchInfo: {
        startDate: '2 Mar 2026',
        trainer: 'Mr. Prakash Senapathi'
      }
    },
    {
      slug: 'cyber-security',
      title: 'Cyber Security & Ethical Hacking',
      subtitle: 'Protect Digital Assets',
      badge: 'Fast Growing',
      duration: '4 Months',
      students: '1,200+',
      rating: 4.7,
      reviews: 600,
      description: 'Learn to protect systems, networks, and data from cyber threats. Master ethical hacking and security analysis.',
      skills: ['Ethical Hacking', 'Network Security', 'Penetration Testing'],
      price: '₹40,000',
      batchInfo: {
        startDate: '10 Mar 2026',
        trainer: 'Expert Trainer'
      }
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className={`text-center mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 via-accent-100 to-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-black mb-6 shadow-lg border-2 border-primary-200">
            <TrendingUp className="h-5 w-5 text-accent-600" />
            <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">Trending Now</span>
          </div>
          <h2 className="section-title">
            Most Popular <span className="gradient-text">Courses</span>
          </h2>
          <p className="section-subtitle">
            Master in-demand skills with our specialized programs. Join thousands of successful students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch px-2 sm:px-0">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`scroll-fade-in ${isVisible ? 'visible' : ''} flex relative`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CourseCard 
                course={course}
                showBatchInfo={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingCourses

