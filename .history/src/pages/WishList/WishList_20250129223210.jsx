import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function WishList() {

  function addProductWishlist(){
    
  }

  // function getWishList(){
  //   return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
  //     headers:{
  //       token:localStorage.getItem("token")
  //     }
  //   })   
  // }

  // const {data} = useQuery({
  //     queryKey:['wishList'],
  //     queryFn: getWishList,
  //     select:(data)=> data.data.data
  // })
  // console.log(data)

  return (
    <>
    <h1>WishList</h1>      
    </>
  )
}
