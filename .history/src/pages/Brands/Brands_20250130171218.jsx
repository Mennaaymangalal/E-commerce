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
    
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Brands</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
         {
          data?.map((product , index)=>{
            return <div key={index} className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt="Kiddo Winter Boys Jacket"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 uppercase">Kids Dress</p>
              <h2 className="text-lg font-semibold">Kiddo Winter Boys Jacket</h2>
            
            </div>
          </div>
         
          })
         }
        </div>
      </div>
   
    </>
  )
}
