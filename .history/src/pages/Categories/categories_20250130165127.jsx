import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function Categories() {

  function getAllCategories (){
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  }

  const {data} = useQuery({
    queryKey: ['Categories'],
    queryFn: getAllCategories,
   select: (data)=> data?.data.data
  })
  console.log(data);

  return (
    <>
     {
       data?.map((product,)=>{
        return   <div className=" text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Fashion & Clothing</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Kiddo Winter Boys Jacket"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 uppercase">Kids Dress</p>
                <h2 className="text-lg font-semibold">Kiddo Winter Boys Jacket</h2>
                <p className="mt-2 text-gray-600">$19.93</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>  
       })

     }
  
    </>
  )
}
