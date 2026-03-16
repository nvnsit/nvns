import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star, Clock, Users, Share2, TrendingUp } from 'lucide-react'
import EnrollmentForm from './EnrollmentForm'

const CourseCard = ({ course, showBatchInfo = false }) => {
  const navigate = useNavigate()
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false)

  // Get course image path: use explicit course.image if provided, otherwise derive from slug/id
  const getCourseImageSrc = () => {
    if (course.image) return course.image
    if (course.slug) return `/courses/${course.slug}.png`
    if (course.id) return `/courses/${course.id}.png`
    return null
  }

  const imageSrc = getCourseImageSrc()

  const handleShare = (e) => {
    e.stopPropagation()
    if (navigator.share) {
      navigator.share({
        title: course.title,
        text: course.description,
        url: window.location.origin + `/course/${course.slug}`
      })
    } else {
      navigator.clipboard.writeText(window.location.origin + `/course/${course.slug}`)
      alert('Course link copied to clipboard!')
    }
  }

  return (
    <div className="card card-hover group relative h-full flex flex-col" style={{ overflow: 'visible' }}>
      {/* Badge - Positioned outside the card */}
      {course.badge && (
        <div className="absolute -top-3 -right-3 z-30">
          <span className="bg-gradient-to-r from-accent-500 via-accent-600 to-purple-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-2xl flex items-center gap-1.5 animate-pulse-glow whitespace-nowrap">
            <TrendingUp className="h-3.5 w-3.5" />
            {course.badge}
          </span>
        </div>
      )}

      <div className="relative overflow-hidden rounded-2xl h-full flex flex-col bg-white">
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-accent-50/0 to-primary-50/0 group-hover:from-primary-50/50 group-hover:via-accent-50/30 group-hover:to-primary-50/50 transition-all duration-500 pointer-events-none"></div>

      <div className="p-4 sm:p-5 md:p-7 relative z-10 flex flex-col flex-grow">
        {/* Course Image */}
        {imageSrc && (
          <div className="w-full h-32 sm:h-36 md:h-40 mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
            <img
              src={imageSrc}
              alt={course.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Hide broken image but keep placeholder background
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        )}

        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">
            {course.title}
          </h3>
          {course.subtitle && (
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">{course.subtitle}</p>
          )}
        </div>

        {/* Description */}
        {course.description && (
          <p className="text-gray-700 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
            {course.description}
          </p>
        )}

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-600">
          {course.duration && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <Clock className="h-4 w-4 text-primary-600 flex-shrink-0" />
              <span className="whitespace-nowrap">{course.duration}</span>
            </div>
          )}
          {course.students && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <Users className="h-4 w-4 text-primary-600 flex-shrink-0" />
              <span className="whitespace-nowrap">{course.students}</span>
            </div>
          )}
          {course.rating && (
            <div className="flex items-center gap-1 ml-auto flex-shrink-0">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <span className="font-semibold whitespace-nowrap">{course.rating}</span>
              {course.reviews && (
                <span className="text-gray-500 whitespace-nowrap">({course.reviews})</span>
              )}
            </div>
          )}
        </div>

        {/* Skills/Tags */}
        {course.skills && course.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 min-h-[1.75rem]">
            {course.skills.slice(0, 3).map((skill, idx) => (
              <span 
                key={idx}
                className="bg-primary-50 text-primary-700 text-xs px-2.5 py-1 rounded-md font-medium whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
            {course.skills.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md whitespace-nowrap">
                +{course.skills.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <button 
            onClick={() => setShowEnrollmentForm(true)}
            className="flex-1 btn-primary text-sm py-3 font-bold shadow-xl whitespace-nowrap"
          >
            Enroll Now
          </button>
          <button
            onClick={handleShare}
            className="px-5 py-3 border-2 border-primary-300 rounded-xl hover:bg-primary-50 hover:border-primary-500 transition-all duration-300 transform hover:scale-110 shadow-md flex-shrink-0"
            title="Share course"
          >
            <Share2 className="h-5 w-5 text-primary-600" />
          </button>
        </div>
      </div>
      </div>

      {/* Enrollment Form Modal */}
      <EnrollmentForm
        isOpen={showEnrollmentForm}
        onClose={() => setShowEnrollmentForm(false)}
        courseName={course.title}
        courseSlug={course.slug}
      />
    </div>
  )
}

export default CourseCard

