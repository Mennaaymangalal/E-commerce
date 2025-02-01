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
  <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white text-center">
    Categories
  </h1>

  <div className="overflow-x-auto">
    <div className="flex gap-6 items-center">
      {categories.map((data, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <div className="h-48 overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {category.name}
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
