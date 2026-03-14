import React, { useState } from 'react'

const FAQ = () => {
  const faqs = [
    {
      q: '1. What courses are offered at NVNS Software Solutions?',
      a: (
        <>
          NVNS Software Solutions offers industry-focused IT training programs including{' '}
          <strong>Snowflake Data Engineering, AWS Data Engineering, Java Full Stack, Python Full Stack, .NET Full Stack, Cyber Security, Data Science &amp; AI, DevOps, Azure Cloud, and Software Testing</strong>.
          {' '}All courses include <strong>real-time project implementation</strong> to provide practical experience.
        </>
      ),
    },
    {
      q: '2. Do your courses include real-time project implementation?',
      a: (
        <>
          Yes. All our training programs include <strong>real-time project implementation</strong>, where students work on practical projects similar to real industry scenarios.
          {' '}This helps learners gain hands-on experience and understand how technologies are used in real IT projects.
        </>
      ),
    },
    {
      q: '3. Do you provide placement assistance after course completion?',
      a: (
        <>
          Yes. NVNS Software Solutions provides <strong>100% placement assistance</strong>, including resume preparation, mock interviews, technical interview guidance, and job referrals to help students start their careers in the IT industry.
        </>
      ),
    },
    {
      q: '4. Who are the trainers at NVNS Software Solutions?',
      a: (
        <>
          Our trainers are <strong>real-time working IT professionals with more than 10 years of industry experience</strong>. They bring practical knowledge, real project insights, and industry best practices into the training sessions.
        </>
      ),
    },
    {
      q: '5. Do you offer both online and classroom training?',
      a: (
        <>
          Yes. We provide <strong>live online training through virtual classrooms</strong> as well as <strong>in-person classroom training</strong>.
          {' '}Students can choose the learning mode that best suits their schedule and learning preference.
        </>
      ),
    },
    {
      q: '6. Are your courses suitable for beginners?',
      a: (
        <>
          Yes. Our courses are designed for <strong>beginners, fresh graduates, and working professionals</strong>.
          {' '}Training starts with fundamentals and gradually moves to advanced concepts and real-time project implementation.
        </>
      ),
    },
    {
      q: '7. What is the duration of your training programs?',
      a: (
        <>
          Most of our training programs typically last <strong>2 to 4 months</strong>, depending on the course and technology.
          {' '}The duration includes theory sessions, practical training, and real-time project implementation.
        </>
      ),
    },
    {
      q: '8. Do you provide interview preparation support?',
      a: (
        <>
          Yes. We provide <strong>complete interview preparation support</strong>, including resume building, mock interviews, technical interview questions, and career guidance to help students succeed in job interviews.
        </>
      ),
    },
    {
      q: '9. What technologies are currently in high demand in the IT industry?',
      a: (
        <>
          Technologies like <strong>Data Engineering, Cloud Computing (AWS &amp; Azure), Artificial Intelligence, DevOps, Cyber Security, and Full Stack Development</strong> are currently in high demand,
          {' '}and NVNS Software Solutions provides training in these trending technologies.
        </>
      ),
    },
    {
      q: '10. How can I enroll in a course at NVNS Software Solutions?',
      a: (
        <>
          You can enroll by <strong>submitting the enquiry form on our website, contacting our support team, or visiting our institute directly</strong>.
          {' '}Our team will guide you in selecting the right course based on your career goals.
        </>
      ),
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-200 rounded-2xl bg-white shadow-sm border border-gray-100">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="px-4 md:px-6">
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="w-full py-4 md:py-5 flex items-center justify-between gap-3 text-left"
                  >
                    <span className="font-semibold text-gray-900 text-sm md:text-base">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold transition-transform ${
                        isOpen
                          ? 'bg-primary-600 text-white border-primary-600 rotate-90'
                          : 'bg-gray-50 text-gray-700 border-gray-300'
                      }`}
                    >
                      ❯
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-4 md:pb-5 text-sm md:text-base text-gray-700 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ


