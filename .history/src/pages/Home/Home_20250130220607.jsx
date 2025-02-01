import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../../component/Product/Product'
import LoadingScreen from '../../component/LoadingScreen/LoadingScreen'


export default function Home() {
 const [Products, setProducts] = useState([])


  useEffect(()=>{
    GetAllProducts()
  },[])

  async function GetAllProducts(){
    setIsLoading(true)
   const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
   console.log(data.data);
  
  }  

  // if(isLoading){
  //   return <LoadingScreen/>
  // }

  return (
    <>
     <div className="container ">      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 place-items-center">
    
   {Products.map((product , index)=>{
     return <Product key={index} product={product}/>  
      })}
        </div>          
      </div>
     
    </>
  )
}
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Contexts/AuthContext/AuthContextProvider";
import axios from "axios";

export default function Allorders() {
  const { userId } = useContext(authContext);
  console.log(userId);
  // const [orders , setOrders ] = useState([])

  useEffect(() => {
    if (userId) getUserOrders();
  }, [userId]);

  async function getUserOrders() {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/orders/user/" + userId
    );
    // setOrders(data)
    console.log(data);
  }
  return (
    <>
    {
      data.map((Product,index)=>{
        return <div key={index} className="">
          <h1>hii</h1>
        </div>
      })
    }