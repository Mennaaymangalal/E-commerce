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
        queryFn: GetSspecificBrand
    })
    console.log(data.)

 if(isLoading){
    return <LoadingScreen/>
 }
      
  return (
    <>
    <h1>ProductDetails</h1>
      
    </>
  )
}
