import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search retailers..."
        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm"
      />
      {searchTerm && (
        <button
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          onClick={() => setSearchTerm('')}
        >
          <span className="text-xl">&times;</span>
        </button>
      )}
    </div>
  )
}

export default SearchBar