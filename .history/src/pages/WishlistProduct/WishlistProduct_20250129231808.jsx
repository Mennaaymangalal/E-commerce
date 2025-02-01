import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"



export default function WishlistProduct() {

  const {productId} = useParams()
  console.log(productId)

    
  return (
    <>
      
    </>
  )
}
