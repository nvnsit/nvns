import React, { useEffect } from 'react'
import { Award, Users, Briefcase, Target, TrendingUp, CheckCircle, Star } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const stats = [
    { icon: <Award className="h-8 w-8" />, number: '5+', label: 'Years of Excellence' },
    { icon: <Users className="h-8 w-8" />, number: '100K+', label: 'Students Trained' },
    { icon: <Briefcase className="h-8 w-8" />, number: '2K+', label: 'Students Placed' },
    { icon: <Target className="h-8 w-8" />, number: '100%', label: 'Placement Rate' },
  ]

  const values = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Industry-Ready Training',
      description: 'Our curriculum is designed by industry experts to ensure students are job-ready from day one.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Faculty',
      description: 'Learn from trainers with 10+ years of real-world industry experience in leading tech companies.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: '100% Placement Support',
      description: 'Dedicated placement cell with tie-ups with 500+ companies. We support you until you get hired.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Career Growth Focus',
      description: 'Not just training, but complete career transformation with soft skills and interview preparation.'
    },
  ]

  const milestones = [
    { year: '2019', title: 'Founded', description: 'Started with a vision to bridge the gap between education and industry' },
    { year: '2020', title: 'First 1K Students', description: 'Reached milestone of training 1,000 students' },
    { year: '2021', title: '100% Placement', description: 'Achieved 100% placement rate for our students' },
    { year: '2022', title: '50K+ Trained', description: 'Celebrated training over 50,000 students' },
    { year: '2024', title: '2K+ Placed', description: 'Successfully placed over 2,000 students in top companies' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About NVNS Software Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Transforming careers through industry-ready training programs. Empowering students to achieve their tech dreams since 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white -mt-16 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 text-center card-hover">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card p-8">
              <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide world-class IT training that bridges the gap between academic learning and industry requirements. We are committed to empowering individuals with cutting-edge skills and knowledge that make them industry-ready professionals.
              </p>
            </div>
            <div className="card p-8">
              <div className="bg-accent-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-accent-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become the most trusted and preferred IT training institute globally, recognized for producing industry-ready professionals who drive innovation and excellence in the technology sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card p-6 card-hover">
                <div className="text-primary-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle">
              Milestones that shaped our success
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Why Choose <span className="gradient-text">NVNS Software Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Industry-Expert Trainers
                </h3>
                <p className="text-gray-700">
                  Learn from professionals with 10+ years of real-world industry experience in leading tech companies.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Real-Time Projects
                </h3>
                <p className="text-gray-700">
                  Work on live projects that mirror real-world scenarios encountered in the IT industry.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Comprehensive Curriculum
                </h3>
                <p className="text-gray-700">
                  Updated syllabus covering latest technologies and industry best practices with hands-on projects.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Flexible Learning Options
                </h3>
                <p className="text-gray-700">
                  Choose from online, offline, weekend, or corporate training options that fit your schedule.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Lifetime LMS Access
                </h3>
                <p className="text-gray-700">
                  Get lifetime access to learning materials, recorded sessions, and course updates.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pay After Placement
                </h3>
                <p className="text-gray-700">
                  Flexible payment options including pay after placement for eligible candidates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join 100,000+ students who have transformed their careers with our industry-ready programs.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              } else {
                window.location.href = '/#contact'
              }
            }}
            className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center gap-2"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default About

