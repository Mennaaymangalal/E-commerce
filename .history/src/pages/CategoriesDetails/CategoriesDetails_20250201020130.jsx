import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoriesDetails() {
    const {categoryId} = useParams()
    console.log(categoryId)
    function GetSpecificCategory(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories/"+ categoryId)
    }
    const {data} = useQuery({
        queryKey:['GetSpecificCategory'],
        queryFn: GetSpecificCategory,
        select: (data)=>data?.data.data
    })
    console.log(data)
  return (
    <>
       <div className="py-8 bg-gray-100 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4">
    {/* Page Header */}
    <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white text-center">
      Categories
    </h1>

    {/* Categories Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data?.map((category, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden group">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Category Info */}
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {category.name}
            </h2>
            <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              Explore {category.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  )
}
