import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'

export default function Allorders() {
  
  const {userId}= useContext(authContext)
  const [orders , setOrders ] = useState([])

  useEffect(()=>{
    getUserOrders(userId)
  },[userId])

 async function getUserOrders() {
  const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/" + userId)
  setOrders(data)  ;
  console.log(data)
 }
 return (
  <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
   
    <div className="mt-6">
      {/* Order 1 */}
          {orders.map((order,index)=>{

            


             <div key={index} className="flex flex-wrap items-center justify-between border-b pb-4 mb-4 gap-4">
             <div className="flex items-center">
               <img
                 src="https://via.placeholder.com/50"
                 alt="Machined Pen and Pencil Set"
                 className="w-16 h-16 rounded object-cover mr-4"
               />
               <div>
                 <p className="font-medium text-gray-800">
                   Machined Pen and Pencil Set
                 </p>
                 <p className="text-gray-500">Delivered Jan 25, 2021</p>
               </div>
             </div>
             <p className="text-gray-800 font-medium">$70.00</p>
             <a
               href="#"
               className="text-blue-600 font-medium hover:underline"
             >
               View Product
             </a>
           </div> 
          })}
    </div>
  </div>
);
};


