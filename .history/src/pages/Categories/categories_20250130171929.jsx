import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function Categories() {

  function getAllCategories (){
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  }

  const {data} = useQuery({
    queryKey: ['Categories'],
    queryFn: getAllCategories,
   select: (data)=> data?.data.data
  })
  console.log(data);

  return (
    <>    
        <div className=" text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">Fashion & Clothing</h1>    
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">      
          {
            data?.map((product, index)=>{
              return <div key={index} className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-screen object-cover"
              />
              <div className="p-4">
               
                <h2 className="text-lg font-semibold">{product.name}</h2>
                
              </div>
            </div>
              })
            
          }
           </div> 
        </div>
      </div>  
      

     
  
    </>
  )
}
