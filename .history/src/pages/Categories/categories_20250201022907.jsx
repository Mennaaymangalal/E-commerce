import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import LoadingScreen from '../../component/LoadingScreen/LoadingScreen'
import { Link } from 'react-router-dom'


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
   <div className="py-8">
  <div className="max-w-7xl mx-auto px-4">
    {/* Page Header */}
    <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white text-center">
      Brands
    </h1>

    {/* Brands Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((brand, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          {/* Image Section */}
          <Link to={`/brandDetails/${brand?._id}`}>
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img
                src={brand?.image}
                alt={brand?.name}
                className="w-full h-full object-contain transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </Link>

          {/* Brand Name */}
          <div className="p-4 text-center">
            <Link to={`/brandDetails/`}>
              <button className="text-lg font-semibold text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                {brand?.name}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  )
}
