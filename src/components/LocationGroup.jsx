import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const LocationGroup = ({ location, count }) => {
  return (
    <div className="bg-gray-50/95 backdrop-blur-sm py-3 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-primary-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">{location}</h2>
        </div>
        <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1.5 rounded-full">
          {count} {count === 1 ? 'store' : 'stores'}
        </span>
      </div>
    </div>
  )
}

export default LocationGroup