import { WHATSAPP_CONFIG } from './emailjsConfig'

/**
 * Opens WhatsApp chat with the configured phone number
 * @param {string} message - Optional custom message
 * @param {string} phoneNumber - Optional phone number (defaults to config)
 */
export const openWhatsApp = (message = WHATSAPP_CONFIG.DEFAULT_MESSAGE, phoneNumber = WHATSAPP_CONFIG.PHONE_NUMBER) => {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

/**
 * Opens WhatsApp chat for course inquiry
 * @param {string} courseName - Name of the course
 */
export const openWhatsAppForCourse = (courseName) => {
  const message = `Hello! I am interested in learning more about the ${courseName} course.`
  openWhatsApp(message)
}

/**
 * Opens WhatsApp chat for demo class booking
 * @param {string} courseName - Name of the course
 */
export const openWhatsAppForDemo = (courseName = '') => {
  const message = courseName 
    ? `Hello! I would like to book a free demo class for ${courseName}.`
    : 'Hello! I would like to book a free demo class.'
  openWhatsApp(message)
}

