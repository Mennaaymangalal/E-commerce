import React, { useContext, useEffect } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'

export default function Brands() {
  const {userId}= useContext(authContext)
    console.log(userId)
    // const [orders , setOrders ] = useState([])
  
  
    useEffect(()=>{
      getUserOrders()
    },[])
  
   async function getUserOrders() {
    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/"+ userId)
    // setOrders(data) 
    console.log(data)
   }
  return (
    <>
    <h1>Brands</h1>      
    </>
  )
}
