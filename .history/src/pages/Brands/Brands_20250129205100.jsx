import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'

export default function Brands() {
  const {userId}= useContext(authContext)
    console.log(userId)
    // const [orders , setOrders ] = useState([])
  
  
  return (
    <>
    <h1>Brands</h1>      
    </>
  )
}
