import React, { useContext,} from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider'
import axios from 'axios'
import { useQueries } from '@tanstack/react-query'


const {userId}= useContext(authContext)

export default function Allorders() {

  function getUserOrder(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/"+ userId)
  }
  
  const {data} = useQueries
  
//   const {userId}= useContext(authContext)
//   console.log(userId)
//   // const [orders , setOrders ] = useState([])


//   useEffect(()=>{
//     getUserOrders()
//   },[])

//  async function getUserOrders() {
//   const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/"+ userId)
//   // setOrders(data) 
//   console.log(data)
//  }


 return (
  <>
{/* 
  <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
  {orders.map((order, index) => {
    return (
      <div key={index} className="mb-6">
       
        <div className="flex flex-wrap justify-between items-center border-b pb-4 gap-4">
          <div>
            <p className="text-gray-500">Date placed</p>
            <p className="font-medium text-gray-800">January 22, 2021</p>
          </div>
          <div>
            <p className="text-gray-500">Order number</p>
            <p className="font-medium text-gray-800">WU88191111</p>
          </div>
          <div>
            <p className="text-gray-500">Total amount</p>
            <p className="font-medium text-gray-800">$238.00</p>
          </div>
          <button className="text-blue-600 font-medium border border-blue-600 rounded-lg px-4 py-2 hover:bg-blue-100">
            View Invoice
          </button>
        </div>
       

        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-between border-b pb-4 mb-4 gap-4">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt={order.productName}
                className="w-16 h-16 rounded object-cover mr-4"
              />
              <div>
                <p className="font-medium text-gray-800">
                  {order.productName}
                </p>
                <p className="text-gray-500">{order.status}</p>
              </div>
            </div>
            <p className="text-gray-800 font-medium">{order.price}</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              View Product
            </a>
          </div>
        </div>
      </div>
    );
  })}
</div> */}

  </>
 )
}

