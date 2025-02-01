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
     <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">{brand.name}</h1>
      <img
        src={brand.image}
        alt={brand.name}
        className="w-full h-auto object-cover"
      />
      {/* Add more brand details here */}
    </div>      
    </>
  )
}
