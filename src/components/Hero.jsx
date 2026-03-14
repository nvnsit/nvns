import React, { useState, useEffect } from 'react'

const Hero = () => {
  const images = [
    { src: '/devops.png', alt: 'DevOps Technology' },
    { src: '/aws.png', alt: 'AWS Cloud Technology' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Banner Carousel */}
      <div className="relative w-full h-auto">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

