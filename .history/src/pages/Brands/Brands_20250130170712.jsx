import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function Brands() {

  function getAllBrands(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
    const {data} = useQuery({
      queryKey:['Brands'],
      queryFn:getAllBrands.
    }) 
  return (
    <>
      <h1>brands</h1>
    </>
  )
}
