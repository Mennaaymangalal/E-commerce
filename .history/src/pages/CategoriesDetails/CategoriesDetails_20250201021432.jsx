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
    <div className="max-w-7xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Image Section */}
    <div className="relative w-full h-72 md:h-96">
      <img
        src={data?.image}
        alt={data?.name}
        className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Details Section */}
    <div className="space-y-6">
      {/* Category Name */}
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white leading-tight">
        {data?.name}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Discover the finest selection in the <span className="font-semibold">{data?.name}</span> category. From premium products to everyday essentials, explore items designed to suit your needs and lifestyle with exceptional quality.
      </p>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Why Choose {data?.name}?
        </h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
          <li>Extensive variety for diverse preferences</li>
          <li>Top-notch quality materials and craftsmanship</li>
          <li>Affordable pricing with great value</li>
          <li>Highly trusted by customers worldwide</li>
        </ul>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
