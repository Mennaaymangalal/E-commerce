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
        queryFn: GetSpecificCategory
    })
    console.log(d)
  return (
    <>
      
    </>
  )
}
