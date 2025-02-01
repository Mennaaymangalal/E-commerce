import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function BrandDetails() {
    const {brandId} = useParams
    console.log(brandId)

    function GetSspecificBrand(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/brands/64089ceb24b25627a2531596")
    }
  return (
    <>
    <h1>ProductDetails</h1>
      
    </>
  )
}
