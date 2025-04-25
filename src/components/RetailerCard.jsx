import React from 'react'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

const getCategoryColor = (category) => {
  const colors = {
    'Grocery': 'bg-green-100 text-green-800',
    'Pharmacy': 'bg-blue-100 text-blue-800',
    'Electronics': 'bg-purple-100 text-purple-800',
    'Clothing': 'bg-pink-100 text-pink-800',
    'Restaurant': 'bg-orange-100 text-orange-800',
    'Hardware': 'bg-yellow-100 text-yellow-800',
  }
  
  return colors[category] || 'bg-gray-100 text-gray-800'
}

const RetailerCard = ({ retailer, showDistance }) => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${retailer.phone}?text=Hi`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-lg text-gray-800 truncate">{retailer.name}</h3>
            <div className="flex items-center mt-1.5 text-gray-600 text-sm">
              <FaMapMarkerAlt className="shrink-0 mr-1.5 text-gray-400" />
              <span className="truncate">{retailer.address}</span>
            </div>
            {showDistance && (
              <div className="mt-2 text-sm font-medium text-primary-600">
                {retailer.distance.toFixed(1)} km away
              </div>
            )}
          </div>
          <span className={`shrink-0 text-xs font-medium px-2.5 py-1.5 rounded-full ${getCategoryColor(retailer.category)}`}>
            {retailer.category}
          </span>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 px-5 py-2.5 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors active:scale-95 transform"
          >
            <FaWhatsapp className="text-lg" />
            <span className="font-medium">Contact</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RetailerCard