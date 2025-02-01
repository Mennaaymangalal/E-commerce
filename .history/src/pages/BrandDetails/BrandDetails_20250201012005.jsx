import React from 'react'
import { useParams } from 'react-router-dom'

export default function BrandDetails() {
    const {brandId} = useParams
    console.log(brandId)

    
  return (
    <>
    <h1>ProductDetails</h1>
      
    </>
  )
}
