import React, { useState, useEffect, useRef } from 'react'
import { Star, Clock, Filter, Search } from 'lucide-react'
import CourseCard from './CourseCard'

const FeaturedCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
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
  
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'data', name: 'Data Science' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'testing', name: 'Testing' }
  ]
  
  const courses = [
    {
      slug: 'fullstack-java',
      title: 'Full-Stack Java',
      subtitle: 'with React JS + AWS + DSA + AI',
      duration: '5 Months',
      students: '2,500+',
      rating: 4.8,
      reviews: 500,
      description: 'Master Java, Spring Boot, Microservices, React, and AWS deployment. Industry-ready skills with real projects.',
      skills: ['Spring Boot', 'Microservices', 'AWS', 'React', 'Java'],
      price: '₹35,000',
      badge: 'Most Popular',
      category: 'fullstack',
      batchInfo: {
        startDate: '2 Mar 2026',
        trainer: 'Mr. Kishan B'
      }
    },
    {
      slug: 'data-science',
      title: 'Full Stack Data Science & AI',
      subtitle: 'Complete Data Science Program',
      duration: '4 Months',
      students: '3,000+',
      rating: 5.0,
      reviews: 2500,
      description: 'Master data science with Python, machine learning, statistical analysis, and data visualization.',
      skills: ['Python', 'Machine Learning', 'Statistics', 'Data Visualization'],
      price: '₹45,000',
      badge: 'High Demand',
      category: 'data',
      batchInfo: {
        startDate: '2 Mar 2026',
        trainer: 'Mr. Prakash Senapathi'
      }
    },
    {
      slug: 'fullstack-python',
      title: 'Full Stack Python',
      subtitle: 'End-to-End Development',
      duration: '5 Months',
      students: '1,800+',
      rating: 5.0,
      reviews: 800,
      description: 'Master full-stack development with Python, Django, React, and cloud deployment.',
      skills: ['Python', 'Django', 'React', 'PostgreSQL', 'AWS'],
      price: '₹35,000',
      badge: 'Trending',
      category: 'fullstack',
      batchInfo: {
        startDate: '26 Feb 2026',
        trainer: 'Mr. K V Rao'
      }
    },
    {
      slug: 'ai-testing',
      title: 'AI Testing',
      subtitle: 'Test AI Systems Effectively',
      duration: '5 Months',
      students: '3,000+',
      rating: 4.9,
      reviews: 2500,
      description: 'Learn to evaluate AI models, identify bugs, and maintain the ethical running of AI systems',
      skills: ['AI Testing', 'Model Evaluation', 'Bug Detection', 'Ethical AI'],
      price: '₹40,000',
      badge: 'New',
      category: 'testing',
      batchInfo: {
        startDate: '2 Mar 2026',
        trainer: 'Mr. Vamshi Mohan'
      }
    },
    {
      slug: 'gen-ai-development',
      title: 'Generative AI & Agentic AI',
      subtitle: 'with Python',
      duration: '3 Months',
      students: '1,200+',
      rating: 4.6,
      reviews: 1400,
      description: 'Deep dive into Neural Networks, NLP, Computer Vision, LLMs, and Generative AI technologies.',
      skills: ['Deep Learning', 'NLP', 'LLMs', 'Computer Vision'],
      price: '₹60,000',
      badge: 'Cutting Edge',
      category: 'ai',
      batchInfo: {
        startDate: '27 Feb 2026',
        trainer: 'Mr. Shiva Rama Krishna'
      }
    },
    {
      slug: 'devops-cloud-engineering',
      title: 'DevOps with Multi Cloud',
      subtitle: 'Master CI/CD and Cloud Infrastructure',
      duration: '5 Months',
      students: '2,800+',
      rating: 5.0,
      reviews: 1400,
      description: 'Master CI/CD pipelines, Docker, Kubernetes, AWS, Azure, and infrastructure automation.',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Terraform'],
      price: '₹60,000',
      badge: 'High Demand',
      category: 'cloud',
      batchInfo: {
        startDate: '27 Feb 2026',
        trainer: 'Mr. Riyaz'
      }
    },
    {
      slug: 'cyber-security',
      title: 'Cyber Security & Ethical Hacking',
      subtitle: 'Protect Digital Assets',
      duration: '4 Months',
      students: '1,200+',
      rating: 4.7,
      reviews: 600,
      description: 'Learn to protect systems, networks, and data from cyber threats. Master ethical hacking and security analysis.',
      skills: ['Ethical Hacking', 'Network Security', 'Penetration Testing'],
      price: '₹40,000',
      badge: 'Fast Growing',
      category: 'cloud',
      batchInfo: {
        startDate: '10 Mar 2026',
        trainer: 'Expert Trainer'
      }
    }
  ]

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className={`text-center mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            Our <span className="gradient-text">Courses</span>
          </h2>
          <p className="section-subtitle">
            Explore new and trending courses. Industry-aligned curriculum designed by experts with 10+ years experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-8 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch px-2 sm:px-0">
          {filteredCourses.map((course, index) => (
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

export default FeaturedCourses

