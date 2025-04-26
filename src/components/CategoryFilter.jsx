import React from 'react'

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar flex-1">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedCategory === category
              ? 'bg-primary-500 text-white shadow-sm'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter