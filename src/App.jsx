import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import RetailerList from './components/RetailerList'
import useGeolocation from './hooks/useGeolocation'
import { retailers as mockRetailers } from './data/retailers'
import { calculateDistance, groupRetailersByLocation } from './utils/helpers'
import { FaLocationArrow } from 'react-icons/fa'

function App() {
  const [retailers, setRetailers] = useState([])
  const [filteredRetailers, setFilteredRetailers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [categories, setCategories] = useState(['All'])
  const [isUsingLocation, setIsUsingLocation] = useState(false)
  const { location, locationError, getLocation } = useGeolocation()

  useEffect(() => {
    setRetailers(mockRetailers)
    const uniqueCategories = ['All', ...new Set(mockRetailers.map(retailer => retailer.category))]
    setCategories(uniqueCategories)
  }, [])

  useEffect(() => {
    let filtered = retailers

    if (searchTerm) {
      filtered = filtered.filter(retailer => 
        retailer.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(retailer => retailer.category === selectedCategory)
    }

    if (location && isUsingLocation) {
      filtered = filtered.map(retailer => ({
        ...retailer,
        distance: calculateDistance(
          location.latitude, 
          location.longitude, 
          retailer.coordinates.lat, 
          retailer.coordinates.lng
        )
      })).sort((a, b) => a.distance - b.distance)
    }

    setFilteredRetailers(filtered)
  }, [retailers, searchTerm, selectedCategory, location, isUsingLocation])

  const handleLocationClick = () => {
    if (!location) {
      getLocation()
    }
    setIsUsingLocation(!isUsingLocation)
  }

  const retailersByLocation = groupRetailersByLocation(filteredRetailers)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pb-16 max-w-3xl">
        <div className="fixed top-[72px] left-0 right-0 bg-gray-50/95 backdrop-blur-sm px-4 py-4 z-20">
          <div className="container mx-auto max-w-3xl space-y-4">
            <SearchBar 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
            />
            <CategoryFilter 
              categories={categories} 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
            <button
              onClick={handleLocationClick}
              className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg transition-all ${
                isUsingLocation 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
              title={isUsingLocation ? "Using your location" : "Use my location"}
            >
              <FaLocationArrow className={isUsingLocation ? "text-white" : "text-primary-500"} />
              <span>{isUsingLocation ? "Using your location" : "Use my location"}</span>
            </button>
          </div>
        </div>
        
        <div className="pt-[200px]">
          <RetailerList 
            retailersByLocation={retailersByLocation} 
            isUsingLocation={isUsingLocation}
          />
        </div>
      </main>
    </div>
  )
}

export default App