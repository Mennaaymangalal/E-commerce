import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../../component/Product/Product'
import LoadingScreen from '../../component/LoadingScreen/LoadingScreen'


export default function Home() {
 const [Products, setProducts] = useState([])
 const [isLoading , setIsLoading] = useState(true)


  useEffect(()=>{
    GetAllProducts()
  },[])

  async function GetAllProducts(){
    setIsLoading(true)
   const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
   setProducts(data.data);
   setIsLoading(false)
  }  

  if(isLoading){
    return <LoadingScreen/>
  }

  return (
    <>
     <div className="container ">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 place-items-center">
    
   {Products.map((product , index)=>{
     return <Product key={index} product={product}/>  
      })}
        </div>          
      </div>
     
    </>
  )
}
