import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function Brands() {

  function getAllBrands(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
    const {data} = useQuery({
      queryKey:['Brands'],
      queryFn:getAllBrands,
      select: (data)=> data?.data.data
    }) 
 console.log(data)
  return (
    <>      
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Fashion & Clothing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
         {
          data?.map(()=>{
            re
          })
         }
        </div>
      </div>
    </div>
    </>
  )
}
