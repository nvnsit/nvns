import React, { useEffect, useRef, useState } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { number: '5+', label: 'Years of Excellence' },
    { number: '100%', label: 'Placement Rate' },
    { number: '2K+', label: 'Students Placed' },
    { number: '100K+', label: 'Trained Students' },
  ]

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

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center scroll-fade-in ${isVisible ? 'visible' : ''} bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-primary-200`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent mb-2 sm:mb-3 bg-[length:200%_auto] animate-gradient-shift">
                {stat.number}
              </div>
              <div className="text-gray-700 font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

