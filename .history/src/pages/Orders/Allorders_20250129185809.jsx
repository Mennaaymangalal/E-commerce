import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'

export default function Allorders() {
  
  const {userId}= useContext(authContext)
  const [orders , setOrders ] = useState([])

  useEffect(()=>{
    getUserOrders(userId)
  },[])

 async function getUserOrders() {
  const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/" + userId)
  setOrders(data)  ;
  console.log(data)
 }
 return (
  <>



  </>
 )
}

