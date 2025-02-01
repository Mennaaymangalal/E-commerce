import { Button } from '@heroui/react'
import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import AddProuctToCart from '../../Services/cartServices'
import { formatCurrency } from '../../helpers/Currancy'
import { useQuery } from '@tanstack/react-query'



export default function Product({product , index}) {
  const [isLoading , setIsLoading] = useState(false)

  function addProductWishlist(productId){
    return  axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
        productId,
    },{
        headers:{
            token:localStorage.getItem("token")
        }
    })
   }
 
   const {data} = useQuery({
    queryKey: ['WishlistProduct'],
    queryFn: addProductWishlist(productId),
   })
   console.log(data)

  return (
    <>
       <div key={index} className="relative m-5 flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100 dark:bg-slate-900 dark:border-slate-950 bg-white shadow-md">
       <Link className="relative mx-3 mt-3 flex  overflow-hidden rounded-xl" to={"/productDetails/" + product._id}>
       <img className="object-contain w-full" src={product.imageCover} alt={product.title} />
       {product.priceAfterDiscount && <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium  dark:text-white text-white">{100 - Math.round(product.priceAfterDiscount *100 / product.price)}% OFF</span>}
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

      <Button isLoading={isLoading} onPress={()=>AddProuctToCart(product._id, setIsLoading)} href="#" className="flex items-center justify-center rounded-md bg-slate-900 dark:bg-slate-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</Button>
     <div className="mt-4">
     <Button onPress={()=>addProductWishlist(product._id)} className="flex items-center justify-center rounded-md bg-slate-900 dark:bg-slate-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className=" mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to WishList</Button>
     </div>
      </div>
      </div>     
    </>
  )
}
