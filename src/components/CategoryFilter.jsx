import React from 'react'

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`category-button whitespace-nowrap ${
            selectedCategory === category
              ? 'category-button-active'
              : 'category-button-inactive'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter