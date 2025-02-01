import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function BrandDetails() {
    const {brandId} = useParams
    console.log(brandId)

    // function GetSspecificBrand(){
    //     return axios.get("https://ecommerce.routemisr.com/api/v1/brands/" + brandId)
    // }
    // const {data} = useQuery({
    //     queryKey:['getBrand'],
    //     queryFn: GetSspecificBrand
    // })

    async function GetSspecificBrand(brandId) {
        const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/brands/" + brandId)        
    }

    console.log(data)
  return (
    <>
    <h1>ProductDetails</h1>
      
    </>
  )
}
