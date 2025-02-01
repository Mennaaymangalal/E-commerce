import React, { useContext, useEffect } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'

export default function Allorders() {
  const {userId}= useContext(authContext)
  console.log(userId)

 asy
  return (
    <>
    <h2>All Orders</h2>      
    </>
  )
}
