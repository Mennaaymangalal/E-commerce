import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'

export default function Brands() {
  const {userId,isLoading}= useContext(authContext)
    
    const [orders , setOrders ] = useState([])
  
    if (isLoading) {
      return <div>Loading...</div>; // Show loading while waiting for auth context
    }
    useEffect(()=>{
      getUserOrders()
    },[])
  
   async function getUserOrders() {
    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/"+ userId)
    setOrders(data) 
    console.log(data)
   }
  return (
    <>
    <h1>Brands</h1>      
    </>
  )
}
