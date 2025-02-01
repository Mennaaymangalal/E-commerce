import React, { useContext, useEffect } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'

export default function Allorders() {
  
  const {userId}= useContext(authContext)
  const [orders , setOrders ] = uses

  useEffect(()=>{
    getUserOrders()
  },[])

 async function getUserOrders() {
  const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/" + userId)
  console.log(data)  ;
 }
  return (
    <>
    <h2>All Orders</h2>      
    </>
  )
}
