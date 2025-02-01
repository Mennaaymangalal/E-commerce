import React, { useContext, useEffect } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'

export default function Allorders() {
  const {cartId}= useContext(authContext)
  
  useEffect(()=>{
    GetUserOrders()
  },[])

  async function GetUserOrders() {
    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/"+cartId )
    console.log(data)
    
  }
  return (
    <>
    <h2>All Orders</h2>      
    </>
  )
}
