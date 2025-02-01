import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../../component/LoadingScreen/LoadingScreen'

export default function CategoriesDetails() {
    const {categoryId} = useParams()
    console.log(categoryId)
    function GetSpecificCategory(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories/"+ categoryId)
    }
    const {data, isLoading} = useQuery({
        queryKey:['GetSpecificCategory'],
        queryFn: GetSpecificCategory,
        select: (data)=>data?.data.data
    })
   if(isLoading){
    return <LoadingScreen/>
   }
  return (
    <>
     <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="w-full h-auto overflow-hidden rounded-lg shadow-lg">
            <img
              src={category?.image}
              alt={category?.name}
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Category Name */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
            {category?.name}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {category?.description || `Explore our exclusive range of ${category?.name} products, crafted to meet your needs with exceptional quality and style.`}
          </p>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Why Choose {category?.name}?
            </h2>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Extensive variety to suit every preference</li>
              <li>Top-quality materials and craftsmanship</li>
              <li>Affordable prices for exceptional value</li>
              <li>Trusted by customers worldwide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
Key Fixes and Improvements
data.map Issue:

    </>
  )
}
