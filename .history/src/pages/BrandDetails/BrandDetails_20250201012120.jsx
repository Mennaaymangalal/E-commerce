import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function BrandDetails() {
    const {brandId} = useParams
    console.log(brandId)

    function GetSspecificBrand(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/brands/" + brandId)
    }
    const {data} = useq
  return (
    <>
    <h1>ProductDetails</h1>
      
    </>
  )
}
