import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { formatCurrency } from '../../helpers/Currancy'
import { Link } from 'react-router-dom'
import { Button } from '@heroui/react'
import AddProuctToCart from '../../Services/cartServices'

export default function WishList() {  
   const [addToCartLoading,setAddToCartLoading] = useState(false);
  //  const [dataId,setDataId] =useState(null)
  //  const [cartData,setCartData] =useState(null)


   useEffect(()=>{
    getWishList()
   },[])

  
     

    async  function getWishList(){
    const {data} = await  axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
      headers:{
        token:localStorage.getItem("token")
      }
    })
    console.log(data)   
  }
 


  //   return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
  //     headers:{
  //       token:localStorage.getItem("token")
  //     }
  //   })   
  // }
 
  // const {data} = useQuery({
  //     queryKey:['wishList'],
  //     queryFn: getWishList,
  //     select:(data)=> data?.data.data
  // })
  // console.log(data)

// async function removeProductFromWishlist(productId) {
//     const {data} = await axios.delete("https://ecommerce.routemisr.com/api/v1/wishlist/"+ productId,{
//     headers:{
//       token:localStorage.getItem("token")
//     }
//   }) 
//   console.log(data)
// }

  

  return (
    <>

    </>
  )
}
