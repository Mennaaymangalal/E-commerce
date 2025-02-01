import React, { useContext, useEffect } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'

export default function Allorders() {

  const [loading, setLoading] = useState(true);

  const {userId}= useContext(authContext)

  useEffect(()=>{
    getUserOrders()
  },[userId])

 async function getUserOrders() {
  setLoading(true)
  const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/" + userId)
  console.log(data)  ;
  
 }
  return (
    <>
    <h2>All Orders</h2>      
    </>
  )
}
