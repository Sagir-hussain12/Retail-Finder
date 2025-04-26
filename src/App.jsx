import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import RetailerList from './components/RetailerList'
import Footer from './components/Footer'
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
  const [isSearchVisible, setIsSearchVisible] = useState(true)
  const { location, locationError, getLocation } = useGeolocation()

  useEffect(() => {
    setRetailers(mockRetailers)
    const uniqueCategories = ['All', ...new Set(mockRetailers.map(retailer => retailer.category))]
    setCategories(uniqueCategories)

    let lastScrollY = window.scrollY
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsSearchVisible(currentScrollY < lastScrollY || currentScrollY < 50)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
      <main className="container mx-auto px-4 max-w-lg pb-24">
        <div 
          className={`fixed left-0 right-0 bg-white/95 backdrop-blur-sm z-20 transition-all duration-300 transform ${
            isSearchVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ top: '48px' }}
        >
          <div className="container mx-auto px-4 py-3 max-w-lg space-y-3">
            <SearchBar 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
            />
            <div className="flex items-center gap-2">
              <CategoryFilter 
                categories={categories} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
              />
              <button
                onClick={handleLocationClick}
                className={`shrink-0 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  isUsingLocation 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
                title={isUsingLocation ? "Using your location" : "Use my location"}
              >
                <FaLocationArrow className={isUsingLocation ? "text-white text-xs" : "text-primary-500 text-xs"} />
                <span className="sr-only md:not-sr-only">Location</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-28">
          <RetailerList 
            retailersByLocation={retailersByLocation} 
            isUsingLocation={isUsingLocation}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App