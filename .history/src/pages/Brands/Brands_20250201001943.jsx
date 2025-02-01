import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import LoadingScreen from "../../component/LoadingScreen/LoadingScreen"
import { Button } from "@heroui/react"

export default function Brands() {

  function getAllBrands(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
    const {data , isLoading} = useQuery({
      queryKey:['Brands'],
      queryFn:getAllBrands,
      select: (data)=> data?.data.data
    }) 


    function GetSpecificBbrand(productId){
      a
    }




    if (isLoading){
      return <LoadingScreen/>
    }
 console.log(data)
  return (
    <>      
    
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Brands</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">         
         {
          data?.map((product , index)=>{
            return <div key={index} className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full  object-cover"
            />
            <div className="p-4 text-center bg-transparent">             
             <Button className="text-lg font-semibold bg-transparent shadow-md dark:text-black">
             {product.name}       
             </Button>
            </div>
          </div>
         
          })
         }
        </div>
      </div>
   
    </>
  )
}
