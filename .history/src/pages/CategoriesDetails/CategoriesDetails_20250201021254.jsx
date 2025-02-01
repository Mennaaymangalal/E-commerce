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
  <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
    Explore Categories
  </h1>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    {data?.map((category, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
      >
        {/* Image Section */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Category Name */}
        <div className="p-4 text-center">
          <Link to={`/categoriesDetails/${category._id}`}>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-300">
              {category.name}
            </h2>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>


    </>
  )
}
