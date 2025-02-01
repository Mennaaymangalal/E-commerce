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
      Fashion & Clothing
    </h1>

    {/* Categories Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((product, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          {/* Image Section */}
          <div className="h-64 overflow-hidden group">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transform transition-transform duration-400 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Product Info */}
          <div className="p-4">
           <Link to={"/categoriesDetails/"+ product?._id}>
           <button className="w-full text-lg font-semibold text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
              {product.name}
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
