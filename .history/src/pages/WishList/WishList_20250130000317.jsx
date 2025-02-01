import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function WishList() {

 

  function getWishList(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
      headers:{
        token:localStorage.getItem("token")
      }
    })   
  }

  const {data} = useQuery({
      queryKey:['wishList'],
      queryFn: getWishList,
      select:(data)=> data?.data.data
  })
  console.log(data)

  return (
    <>
  <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Favourites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">





      </div>
    </div>
  



    </>
  )
}
