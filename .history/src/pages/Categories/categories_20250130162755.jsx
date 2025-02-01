import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function Categories() {

  function getAllCategories (){
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  }

  const {data} = useQuery({
    queryKey: 'Categories',
    queryFn: getAllCategories,

  })
  console.log(data)

  return (
    <>
    <h1>Categories</h1>      
    </>
  )
}
