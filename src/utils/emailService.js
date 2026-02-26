import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from './emailjsConfig'

/**
 * Initialize EmailJS with public key
 */
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  }
}

/**
 * Send email using EmailJS
 * @param {string} templateId - EmailJS template ID
 * @param {object} templateParams - Template parameters
 * @returns {Promise} - EmailJS send promise
 */
export const sendEmail = async (templateId, templateParams) => {
  try {
    // Initialize EmailJS if not already initialized
    initEmailJS()
    
    if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID_HERE') {
      throw new Error('EmailJS Service ID not configured. Please set up EmailJS credentials.')
    }
    
    if (!templateId || !EMAILJS_CONFIG.TEMPLATE_ID) {
      throw new Error('EmailJS Template ID not configured.')
    }
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      templateId,
      templateParams
    )
    
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error: error.text || error.message }
  }
}

/**
 * Send demo class request email
 * @param {object} formData - Form data with name, email, phone, course
 */
export const sendDemoClassEmail = async (formData) => {
  const templateParams = {
    to_name: 'NVNS Software Solutions Team',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    course: formData.course || 'Not specified',
    message: formData.message || `Demo class request for ${formData.course || 'a course'}`,
    reply_to: formData.email,
    subject: 'Demo Class Request',
    type: 'Demo Class Request',
  }
  
  return await sendEmail(EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
}

/**
 * Send registration email
 * @param {object} formData - Form data with name, email, phone, course
 */
export const sendRegistrationEmail = async (formData) => {
  const templateParams = {
    to_name: 'NVNS Software Solutions Team',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    course: formData.course || 'General Registration',
    message: formData.message || `Registration request for ${formData.course || 'general inquiry'}`,
    reply_to: formData.email,
    subject: 'New Registration',
    type: 'Registration',
  }
  
  return await sendEmail(EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
}

/**
 * Send course inquiry email
 * @param {object} formData - Form data with name, email, phone, course, message
 */
export const sendCourseInquiryEmail = async (formData) => {
  const templateParams = {
    to_name: 'NVNS Software Solutions Team',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    course: formData.course || 'General Inquiry',
    message: formData.message || 'Course inquiry',
    reply_to: formData.email,
    subject: 'Course Inquiry',
    type: 'Course Inquiry',
  }
  
  return await sendEmail(EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
}

/**
 * Send enrollment email to admin
 * @param {object} formData - Form data with name, email, phone, course, learningPath, message
 */
export const sendEnrollmentEmail = async (formData) => {
  const templateParams = {
    to_name: 'NVNS Software Solutions Admin',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    course: formData.course || 'Not specified',
    learning_path: formData.learningPath || 'Not specified',
    message: formData.message || `New enrollment request for ${formData.course || 'a course'}`,
    reply_to: formData.email,
    enrollment_date: new Date().toLocaleDateString(),
    subject: 'New Enrollment Request',
    type: 'Enrollment',
  }
  
  return await sendEmail(EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
}

