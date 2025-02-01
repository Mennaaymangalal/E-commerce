import { useQueries } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function WishList() {
  function wishList(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
      headers:{
        token:localStorage.getItem("token")
      }
    })   
  }

  const {data} = useQueries({
      queryKey:['wishList'],
      queryfn:
  })

  return (
    <>
    <h1>WishList</h1>      
    </>
  )
}
