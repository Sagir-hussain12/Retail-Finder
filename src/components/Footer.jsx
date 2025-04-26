import React from 'react'
import { FaHome, FaSearch, FaMapMarkerAlt, FaUser } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg z-30">
      <div className="container mx-auto px-4 py-2 max-w-3xl">
        <nav className="flex justify-around items-center">
          <button className="flex flex-col items-center p-2 text-primary-500 relative">
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-500 rounded-full"></div>
            <FaHome className="text-xl mb-1" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-400 hover:text-primary-500 transition-colors">
            <FaSearch className="text-xl mb-1" />
            <span className="text-xs font-medium">Search</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-400 hover:text-primary-500 transition-colors">
            <FaMapMarkerAlt className="text-xl mb-1" />
            <span className="text-xs font-medium">Near Me</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-400 hover:text-primary-500 transition-colors">
            <FaUser className="text-xl mb-1" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </nav>
      </div>
    </footer>
  )
}

export default Footer