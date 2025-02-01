import React, { useContext } from 'react'

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
