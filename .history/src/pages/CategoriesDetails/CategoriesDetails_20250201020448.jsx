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
   <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Image Section */}
    <div className="relative">
      <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={data?.image}
          alt={data?.name}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>

    {/* Details Section */}
    <div className="space-y-6">
      {/* Category Name */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
        {data?.name}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Discover a curated collection in the <span className="font-semibold">{data?.name}</span> category, featuring premium products designed to meet all your needs with style and quality.
      </p>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Why Choose {data?.name}?
        </h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
          <li>Extensive variety to suit every preference</li>
          <li>Top-quality materials and craftsmanship</li>
          <li>Affordable prices for exceptional value</li>
          <li>Trusted by customers worldwide</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <div>
        <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-colors duration-300">
          Explore More
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
