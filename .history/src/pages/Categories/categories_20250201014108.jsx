import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import LoadingScreen from '../../component/LoadingScreen/LoadingScreen'

export default function Categories() {

  function getAllCategories (){
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  }

  const {data , isLoading} = useQuery({
    queryKey: ['Categories'],
    queryFn: getAllCategories,
   select: (data)=> data?.data.data
  })
  console.log(data);

  if (isLoading){
    return <LoadingScreen/>
  }

  return (
    <>    
       <div className="py-8 bg-gray-100 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4">
    {/* Page Header */}
    <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white text-center">
      Fashion & Clothing
    </h1>

    {/* Categories Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((product, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition-transform duration-300"
        >
          {/* Image Section */}
          <div className="h-64 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {product.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
     
  
    </>
  )
}
