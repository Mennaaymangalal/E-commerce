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
        <div className="max-w-7xl mx-auto px-4 py-10">
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Image Section */}
    <div className="w-full md:w-1/2">
      <img
        src={data?.image}
        alt={data?.name}
        className="w-full h-auto rounded-lg shadow-md object-cover"
      />
    </div>

    {/* Details Section */}
    <div className="w-full md:w-1/2 space-y-4">
      {/* Category Name */}
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
        {data?.name}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {`Discover a wide range of products in the ${data?.name} category, crafted to meet diverse needs and styles.`}
      </p>

      {/* Features or Highlights */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          What Makes {data?.name} Special?
        </h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
          <li>Variety of options for every taste</li>
          <li>Top-notch quality products</li>
          <li>Affordable prices</li>
          <li>Exclusively selected for our customers</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
