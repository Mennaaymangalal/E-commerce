import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'

export default function Allorders() {
  const {cartId}= useContext(authContext)
  console.log(cartId)

  async function GetUserOrders() {
    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/"+cartId )
    c
    
  }
  return (
    <>
    <h2>All Orders</h2>      
    </>
  )
}
