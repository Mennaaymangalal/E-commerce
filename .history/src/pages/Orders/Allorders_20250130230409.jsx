import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Contexts/AuthContext/AuthContextProvider";
import axios from "axios";

export default function Allorders() {
  const { userId } = useContext(authContext);
  console.log(userId);
   const [orders , setOrders ] = useState([])

  useEffect(() => {
    if (userId) getUserOrders();
  }, [userId]);

  async function getUserOrders() {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/orders/user/" + userId
    );
     setOrders(data)
    console.log(data);
  }
  return (
    <>
    {
     import React, { useContext, useEffect, useState } from "react";
     import { authContext } from "../../Contexts/AuthContext/AuthContextProvider";
     import axios from "axios";
     
     export default function Allorders() {
       const { userId } = useContext(authContext);
       const [orders, setOrders] = useState([]);
     
       useEffect(() => {
         if (userId) getUserOrders();
       }, [userId]);
     
       async function getUserOrders() {
         try {
           const { data } = await axios.get(
             `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
           );
           setOrders(data);
         } catch (error) {
           console.error("Error fetching orders:", error);
         }
       }
     
       return (
         <div className="max-w-6xl mx-auto p-4">
           {orders.length > 0 ? (
             orders.map((order, index) => (
               <div
                 key={index}
                 className="max-w-4xl my-5 mx-auto dark:bg-slate-900 bg-white shadow-lg rounded-lg"
               >
                 {/* Order Details Section */}
                 <div className="p-6">
                   <div className="flex flex-wrap justify-between items-center gap-4">
                     <div>
                       <p className="text-gray-500 dark:text-gray-400">Date placed</p>
                       <p className="font-medium text-gray-800 dark:text-white">
                         {new Date(order.createdAt).toLocaleDateString()}
                       </p>
                     </div>
                     <div>
                       <p className="text-gray-500 dark:text-gray-400">Order number</p>
                       <p className="font-medium text-gray-800 dark:text-white">
                         {order._id}
                       </p>
                     </div>
                     <div>
                       <p className="text-gray-500 dark:text-gray-400">Total amount</p>
                       <p className="font-medium text-gray-800 dark:text-white">
                         ${order.totalOrderPrice}
                       </p>
                     </div>
                     <button className="text-blue-600 font-medium border border-blue-600 rounded-lg px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-900">
                       View Invoice
                     </button>
                   </div>
                 </div>
     
                 {/* Border Between Order Details and Product List */}
                 <div
                   className="w-full h-[1px] bg-gray-300 dark:bg-gray-600 my-2"
                   style={{ marginTop: "16px", marginBottom: "16px" }}
                 ></div>
     
                 {/* Product List Section */}
                 <div className="p-6">
                   {order.cartItems.map((item, itemIndex) => (
                     <div
                       key={itemIndex}
                       className="flex flex-wrap items-center justify-between border-b pb-4 mb-4 last:border-b-0 gap-4"
                     >
                       <div className="flex items-center">
                         <img
                           src={item.product.imageCover}
                           alt={item.product.title}
                           className="w-16 h-16 rounded object-cover mr-4"
                         />
                         <div>
                           <p className="font-medium text-gray-800 dark:text-white">
                             {item.product.title}
                           </p>
                           <p className="text-gray-500 dark:text-gray-400">
                             Status: {order.status}
                           </p>
                         </div>
                       </div>
                       <p className="text-gray-800 dark:text-white font-medium">
                         ${item.price}
                       </p>
                       <a
                         href="#"
                         className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                       >
                         View Product
                       </a>
                     </div>
                   ))}
                 </div>
               </div>
             ))
           ) : (
             <p className="text-center text-gray-500 dark:text-gray-400">
               No orders found.
             </p>
           )}
         </div>
       );     
     
    }
     
 
    </>
  );
}
