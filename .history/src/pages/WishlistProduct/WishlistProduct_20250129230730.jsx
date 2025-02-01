import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"



export default function WishlistProduct() {

  const {productId} = useParams()
  console.log(productId)

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
        queryFn: addProductWishlist,
       })
       console.log(data)
  return (
    <>
      
    </>
  )
}
