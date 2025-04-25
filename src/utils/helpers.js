/**
 * Calculate distance between two points using the Haversine formula
 * @param {number} lat1 - Latitude of first point
 * @param {number} lon1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lon2 - Longitude of second point
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  const distance = R * c // Distance in km
  return distance
}

const deg2rad = (deg) => {
  return deg * (Math.PI/180)
}

/**
 * Group retailers by their location property
 * @param {Array} retailers - Array of retailer objects
 * @returns {Object} Object with location keys and arrays of retailers
 */
export const groupRetailersByLocation = (retailers) => {
  return retailers.reduce((groups, retailer) => {
    const location = retailer.location
    if (!groups[location]) {
      groups[location] = []
    }
    groups[location].push(retailer)
    return groups
  }, {})
}