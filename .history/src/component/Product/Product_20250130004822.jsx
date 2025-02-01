import { Button } from '@heroui/react'
import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import AddProuctToCart from '../../Services/cartServices'
import { formatCurrency } from '../../helpers/Currancy'
import axios from 'axios'




export default function Product({product , index}) {
  const [isLoading , setIsLoading] = useState(false)

  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
    addProductWishlist(product._id); // Trigger the wishlist function
  };


  async function addProductWishlist(productId) {
    const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
            productId,
        },{
            headers:{
                token:localStorage.getItem("token")
            }
        }) 
    console.log(data)
  }

  
 

  return (
    <>
       <div key={index} className="relative m-5 flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100 dark:bg-slate-900 dark:border-slate-950 bg-white shadow-md">
       <Link className="relative mx-3 mt-3 flex  overflow-hidden rounded-xl" to={"/productDetails/" + product._id}>
       <img className="object-contain w-full" src={product.imageCover} alt={product.title} />
      
       </Link>

       <div className="mt-4 px-5 pb-5">

        <div className="">
        <Link to={"/productDetails/" + product._id}>
          <h5 className="text-xl tracking-tight text-slate-900  dark:text-white line-clamp-1">{product.title}</h5>
       </Link>
       <div className="mt-2 mb-5 ">
       <p>
           {product.priceAfterDiscount ?
            <>
            <span className="text-3xl font-bold text-slate-900  dark:text-white">{formatCurrency(product.priceAfterDiscount)}</span>
            <span className="text-sm text-slate-900 line-through  dark:text-white">{formatCurrency(product.price)}</span>
           </> :
           <span className="text-3xl font-bold text-slate-900  dark:text-white">{formatCurrency(product.price)}</span>           
           }
       </p>
      <div className="flex items-center mt-1 ">
      {[1,2,3,4,5].map((rate , index)=>{
       return product.ratingsAverage >= rate ?
       <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
       </svg>
       :
       <svg key={index} aria-hidden="true" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      })}
      
     
     
       <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold dark:text-slate-950">{product.ratingsAverage}</span>
         </div>
       </div>
        </div>
   
        <button
      onClick={handleClick}
      className={`w-full bg-transparent  text-sm font-medium text-gray-900 dark:text-white focus:outline-none ${
        isRed ? "border-red-500" : "border-gray-900 dark:border-white"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-6 w-6"
        fill={isRed ? "red" : "none"} // Toggle fill color
        stroke={isRed ? "red" : "currentColor"} // Toggle stroke color
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C15.46 5.99 16.96 5 18.5 5 20.5 5 22 6.5 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>  
    </button>


      <Button isLoading={isLoading} onPress={()=>AddProuctToCart(product._id, setIsLoading)} href="#" className="flex items-center justify-center rounded-md bg-slate-900 dark:bg-slate-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</Button>
     <div className="mt-4">

     </div>
      </div>
      </div>     
    </>
  )
}
