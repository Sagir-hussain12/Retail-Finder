import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 z-30 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 py-2.5 max-w-lg">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <span className="text-xl">🏪</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
              Finder
            </span>
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header