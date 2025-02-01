import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { data, useParams } from 'react-router-dom'
import LoadingScreen from '../../component/LoadingScreen/LoadingScreen'

export default function BrandDetails() {
    const {brandId} = useParams()
    console.log(brandId)

    function GetSspecificBrand(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/brands/" + brandId)
    }
    const {data , isLoading} = useQuery({
        queryKey:['getBrand'],
        queryFn: GetSspecificBrand,
        select: (data)=> data?.data.data
    })
    console.log(data)

 if(isLoading){
    return <LoadingScreen/>
 }
      
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={data?.image}
            alt={data?.name}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">{brand?.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {brand?.description || "This brand offers high-quality products tailored to your needs."}
          </p>
          <button className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-md">
            Explore More Products
          </button>
        </div>
      </div>
    </div> 
    </>
  )
}
