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
      
      {data?.map((wishList,index)=>{
      return <div 
      key={item.id}
      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-gray-500">{item.price}</p>
      <p className="text-gray-500 mb-4">Color: {item.color}</p>
      <div className="flex flex-col md:flex-row md:space-x-2 w-full">
        <select className="border border-gray-300 rounded px-2 py-1 mb-2 md:mb-0 md:flex-grow">
          <option>Size</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto">
          Add to cart
        </button>
        <button className="text-red-500 hover:text-red-700 w-full md:w-auto mt-2 md:mt-0">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
    })} 

      </div>
    </div>
  



    </>
  )
}
