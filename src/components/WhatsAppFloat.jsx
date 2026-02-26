import React from 'react'
import { MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsapp'

const WhatsAppFloat = () => {
  return (
    <button
      onClick={() => openWhatsApp('Hello! I would like to know more about your courses.')}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
      style={{
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 4px 6px rgba(0, 0, 0, 0.1)',
        animation: 'pulse-glow 2s ease-in-out infinite'
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-ping">
        !
      </span>
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  )
}

export default WhatsAppFloat

