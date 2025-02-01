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
  <>
   return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
     
    </div>
  );  
  </>
 )
}

