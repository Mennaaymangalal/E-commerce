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
       return (
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Fashion & Clothing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Kiddo Winter Boys Jacket"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 uppercase">Kids Dress</p>
              <h2 className="text-lg font-semibold">Kiddo Winter Boys Jacket</h2>
              <p className="mt-2 text-gray-600">$19.93</p>
            </div>
          </div>
          {/* Product 2 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Terius Winter Gray Hat for Child"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 uppercase">
                Winter Collection
              </p>
              <h2 className="text-lg font-semibold">
                Terius Winter Gray Hat for Child
              </h2>
              <p className="mt-2 text-gray-600">$24.58</p>
            </div>
          </div>
          {/* Product 3 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Adidas Men's Kaptir Super Trail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 uppercase">Men Dress</p>
              <h2 className="text-lg font-semibold">
                Adidas Men's Kaptir Super Trail
              </h2>
              <p className="mt-2 text-gray-600">$49.19</p>
            </div>
          </div>
          {/* Product 4 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="New Balance Women's 481 V3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 uppercase">Shoe</p>
              <h2 className="text-lg font-semibold">
                New Balance Women's 481 V3
              </h2>
              <p className="mt-2 text-gray-600">$16.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
