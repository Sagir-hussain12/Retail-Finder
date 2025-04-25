import React from 'react'
import RetailerCard from './RetailerCard'
import LocationGroup from './LocationGroup'

const RetailerList = ({ retailersByLocation, isUsingLocation }) => {
  // If there are no retailers to display
  if (Object.keys(retailersByLocation).length === 0) {
    return (
      <div className="mt-8 text-center py-16 bg-white rounded-lg shadow">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-700">No retailers found</h3>
        <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="mt-4 space-y-6">
      {Object.entries(retailersByLocation).map(([location, retailers]) => (
        <div key={location} className="space-y-3">
          <LocationGroup location={location} count={retailers.length} />
          <div className="space-y-3">
            {retailers.map((retailer) => (
              <RetailerCard
                key={retailer.id}
                retailer={retailer}
                showDistance={isUsingLocation && retailer.distance !== undefined}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RetailerList