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
          <h1 className="text-3xl font-bold mb-6">Fashion & Clothing</h1>    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">      
          {
            data?.map((product, index)=>{
              return          
             

            })
            
          }
           </div> 
        </div>
      </div>  
      

     
  
    </>
  )
}
