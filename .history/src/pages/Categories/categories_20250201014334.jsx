import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import LoadingScreen from '../../component/LoadingScreen/LoadingScreen'
import { Button } from '@heroui/react'

export default function Categories() {

  function getAllCategories (){
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  }

  const {data , isLoading} = useQuery({
    queryKey: ['Categories'],
    queryFn: getAllCategories,
   select: (data)=> data?.data.data
  })
  console.log(data);

  if (isLoading){
    return <LoadingScreen/>
  }

  return (
    <>    
    
     
  
    </>
  )
}
