import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'

export default function Allorders() {
  const {cartId}= useContext(authContext)
  console.log(cartId)

  async function GetUserOrders() {
    const {data} = aw
    
  }
  return (
    <>
    <h2>All Orders</h2>      
    </>
  )
}
