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
  
  // Courses offered by NVNS – kept in sync with marketing content
  const courses = [
    {
      slug: 'snowflake-snowpark-dbt',
      title: 'Snowflake + Snowpark + DBT',
      subtitle: 'with Real Time Project Implementation',
      duration: '4 Months',
      students: '500+',
      rating: 4.8,
      reviews: 200,
      description: 'End-to-end Snowflake data engineering with Snowpark and DBT, focused on real-time project implementation.',
      skills: ['Snowflake', 'Snowpark', 'DBT', 'SQL'],
      price: '₹45,000',
      badge: 'High Demand',
      category: 'data',
      batchInfo: {
        startDate: '2 Mar 2026',
        trainer: 'Expert Trainer'
      }
    },
    {
      slug: 'aws-data-engineer',
      title: 'AWS Data Engineer',
      subtitle: 'with Real Time Project Implementation',
      duration: '4 Months',
      students: '800+',
      rating: 4.9,
      reviews: 350,
      description: 'Design and build data pipelines on AWS with hands-on, real-time project implementation.',
      skills: ['AWS', 'Data Pipelines', 'ETL', 'Redshift'],
      price: '₹50,000',
      badge: 'High Demand',
      category: 'data',
      batchInfo: {
        startDate: '5 Mar 2026',
        trainer: 'Expert Trainer'
      }
    },
    {
      slug: 'java-fullstack',
      title: 'Java Full Stack',
      subtitle: 'with Real Time Project Implementation',
      duration: '5 Months',
      students: '2,500+',
      rating: 4.8,
      reviews: 500,
      description: 'Master Java, Spring Boot, React, and cloud deployment with full-stack real time project implementation.',
      skills: ['Java', 'Spring Boot', 'React', 'AWS'],
      price: '₹35,000',
      badge: 'Most Popular',
      category: 'fullstack',
      batchInfo: {
        startDate: '10 Mar 2026',
        trainer: 'Senior Java Trainer'
      }
    },
    {
      slug: 'python-fullstack',
      title: 'Python Full Stack',
      subtitle: 'with Real Time Project Implementation',
      duration: '5 Months',
      students: '1,800+',
      rating: 4.9,
      reviews: 450,
      description: 'Full-stack development with Python, Django, React and cloud, driven by real time projects.',
      skills: ['Python', 'Django', 'React', 'PostgreSQL'],
      price: '₹35,000',
      badge: 'Trending',
      category: 'fullstack',
      batchInfo: {
        startDate: '12 Mar 2026',
        trainer: 'Senior Python Trainer'
      }
    },
    {
      slug: 'dotnet-fullstack',
      title: '.NET Full Stack',
      subtitle: 'with Real Time Project Implementation',
      duration: '5 Months',
      students: '1,200+',
      rating: 4.7,
      reviews: 300,
      description: 'Build modern web applications using .NET, SQL Server, and frontend frameworks with real time projects.',
      skills: ['.NET', 'C#', 'SQL Server', 'Web API'],
      price: '₹38,000',
      badge: 'Popular',
      category: 'fullstack',
      batchInfo: {
        startDate: '15 Mar 2026',
        trainer: '.NET Expert'
      }
    },
    {
      slug: 'cyber-security',
      title: 'Cyber Security',
      subtitle: 'with Real Time Project Implementation',
      duration: '4 Months',
      students: '1,200+',
      rating: 4.7,
      reviews: 600,
      description: 'Learn to protect systems, networks, and data from cyber threats with real-world scenarios.',
      skills: ['Ethical Hacking', 'Network Security', 'Penetration Testing'],
      price: '₹40,000',
      badge: 'Fast Growing',
      category: 'cloud',
      batchInfo: {
        startDate: '18 Mar 2026',
        trainer: 'Security Expert'
      }
    },
    {
      slug: 'data-science-ai-genai',
      title: 'Data Science & AI / Gen AI',
      subtitle: 'with Real Time Project Implementation',
      duration: '5 Months',
      students: '3,000+',
      rating: 5.0,
      reviews: 2500,
      description: 'Comprehensive Data Science, AI, Generative AI and Agentic AI with end-to-end project implementation.',
      skills: ['Data Science', 'Machine Learning', 'Gen AI', 'Agentic AI'],
      price: '₹60,000',
      badge: 'Cutting Edge',
      category: 'ai',
      batchInfo: {
        startDate: '20 Mar 2026',
        trainer: 'AI Specialist'
      }
    },
    {
      slug: 'manual-automation-testing',
      title: 'Manual & Automation Testing',
      subtitle: 'with Real Time Project Implementation',
      duration: '4 Months',
      students: '2,000+',
      rating: 4.8,
      reviews: 900,
      description: 'Learn manual testing and automation tools end-to-end with real time project implementation.',
      skills: ['Manual Testing', 'Selenium', 'Test Automation'],
      price: '₹30,000',
      badge: 'High Demand',
      category: 'testing',
      batchInfo: {
        startDate: '22 Mar 2026',
        trainer: 'QA Expert'
      }
    },
    {
      slug: 'aws-devops',
      title: 'AWS & DevOps',
      subtitle: 'with Real Time Project Implementation',
      duration: '4 Months',
      students: '2,800+',
      rating: 4.9,
      reviews: 1400,
      description: 'Master AWS cloud and DevOps tools with hands-on CI/CD and infrastructure automation.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      price: '₹55,000',
      badge: 'High Demand',
      category: 'cloud',
      batchInfo: {
        startDate: '24 Mar 2026',
        trainer: 'DevOps Expert'
      }
    },
    {
      slug: 'azure-cloud-azure-devops',
      title: 'Azure Cloud & Azure DevOps',
      subtitle: 'with Real Time Project Implementation',
      duration: '4 Months',
      students: '1,500+',
      rating: 4.7,
      reviews: 700,
      description: 'End-to-end training on Azure Cloud and Azure DevOps pipelines with project-based learning.',
      skills: ['Azure', 'Azure DevOps', 'Pipelines'],
      price: '₹55,000',
      badge: 'Popular',
      category: 'cloud',
      batchInfo: {
        startDate: '26 Mar 2026',
        trainer: 'Azure Expert'
      }
    },
    {
      slug: 'azure-ai-ml',
      title: 'Azure AI & ML',
      subtitle: 'with Real Time Project Implementation',
      duration: '4 Months',
      students: '900+',
      rating: 4.8,
      reviews: 400,
      description: 'Build intelligent solutions using Azure AI and ML services with real time project implementation.',
      skills: ['Azure AI', 'Azure ML', 'ML Pipelines'],
      price: '₹60,000',
      badge: 'Emerging',
      category: 'ai',
      batchInfo: {
        startDate: '28 Mar 2026',
        trainer: 'Azure AI Expert'
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

