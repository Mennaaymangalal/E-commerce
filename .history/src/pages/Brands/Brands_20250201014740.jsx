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
    <div className="py-8">
  <div className="max-w-7xl mx-auto px-4">
    {/* Page Header */}
    <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white text-center">
      Brands
    </h1>

    {/* Brands Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((brand, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          {/* Image Section */}
          <div className="h-64 overflow-hidden group">
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Brand Info */}
          <div className="p-4 text-center">
            <Link to={`/brandDetails/${brand._id}`}>
              <button className="w-full text-lg font-semibold text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                {brand.name}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  
    </>
  )
}
