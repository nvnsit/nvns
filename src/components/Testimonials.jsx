import React, { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
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
  const testimonials = [
    {
      name: 'Raja Purimitla',
      course: 'Software Testing',
      rating: 5,
      text: 'I have taken the classes in this institution for software testing, it has been very informative and clear cut guidance into how we can enter into the field of Software testing and also Development. The teaching is just so clear and to the point, anyone looking for courses in Full Stack Development or other software Development Courses training institute is the perfect place to join.'
    },
    {
      name: 'Vidyasagar Allamsetti',
      course: 'Selenium with Java',
      rating: 5,
      text: 'I have joined for Selenium with Java course. Thank you for explaining the topics in a detailed manner. First of all, while explaining every word in the theory is simultaneously typed in a word doc; I found these class notes very helpful. Examples are provided in the coding for each and every topic in the theory.'
    },
    {
      name: 'Nimitha Anand',
      course: 'Cypress Training',
      rating: 5,
      text: 'I recently took one-on-one Cypress training, and I couldn\'t be happier with the experience! The curriculum was well-planned, covering everything from the basics to more advanced concepts, and the teaching style is clear, patient, and incredibly effective, making complex topics easy to understand.'
    },
    {
      name: 'Vamshi Anugu',
      course: 'Python Internship',
      rating: 5,
      text: 'I have completed b.tech (civil) in the year of 2023. I have a passion to work in IT. For the sake of that I have enquired best institutes. Faculty was Excellent skilled explained everything in depth. Lab was high configured. Excellent software training institute with good infrastructure and skilled people to clarify doubts.'
    },
    {
      name: 'Supraja Boppana',
      course: 'Testing Internship',
      rating: 5,
      text: 'Recommend to Join Testing Internship Learn from the live IT Environment. They give real time scenarios with Live project hands-on experience. The instructor has given us Confidence to crack the interview.'
    },
    {
      name: 'Manoj Reddy',
      course: 'Python Workshop',
      rating: 5,
      text: 'Very detailed workshop. Absolutely loved it!!! This workshop is very interesting and helpful for beginners. I liked the way they explained.'
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className={`text-center mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from students who transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 scroll-fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-2 rounded-lg mr-3">
                  <Quote className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

