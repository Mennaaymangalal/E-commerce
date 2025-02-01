import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'

export default function Brands() {
  const {userId}= useContext(authContext)
    
    const [orders , setOrders ] = useState([])
  
  
    useEffect(()=>{
      getUserOrders()
    },[])
  
   async function getUserOrders() {
    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/"+ userId)
    setOrders(data.cartItems) 
    console.log(data)
   }
  return (
    <>
          {} 
    </>
  )
}
