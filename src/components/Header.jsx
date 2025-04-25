import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
      <div className="container mx-auto px-4 py-5 max-w-3xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary-600">
            <span className="text-2xl">🏪</span> Retailer Finder
          </h1>
          <div className="text-sm text-gray-500 font-medium">Find stores near you</div>
        </div>
      </div>
    </header>
  )
}

export default Header