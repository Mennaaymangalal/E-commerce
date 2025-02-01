import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import LoadingScreen from "../../component/LoadingScreen/LoadingScreen"
import { Button } from "@heroui/react"
import { Link } from "react-router-dom"

export default function Brands() {

  function getAllBrands(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
    const {data , isLoading} = useQuery({
      queryKey:['Brands'],
      queryFn:getAllBrands,
      select: (data)=> data?.data.data
    }) 


   

    if (isLoading){
      return <LoadingScreen/>
    }
 console.log(data)
  return (
    <>      
    
  
    </>
  )
}
