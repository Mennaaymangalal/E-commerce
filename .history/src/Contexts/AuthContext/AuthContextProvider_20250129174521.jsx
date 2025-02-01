import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const authContext = createContext()

export default function AuthContextProvider({children}) {
    const [isLogedIn , setIsLogedIn] = useState(localStorage.getItem("token") != null)

    const [userId,setUserId]   = useState("")

    useEffect(()=>{
      verifyToken()
    }, [])

    function verifyToken(){
      axios.get("https://ecommerce.routemisr.com/api/v1/auth/verifyToken" , {
        headers : {
          token: localStorage.getItem("token") 
        }
      }).catch((error)=>{
        localStorage.removeItem("token")
        setIsLogedIn(false)
      }).then((data)=>{
        console,lo(data.data.decoded.id)
      })
    } 
  return (
    <>
    <authContext.Provider value={{ isLogedIn , setIsLogedIn, cartId}}> 
    {children}
    </authContext.Provider>      
    </>
  )
}
