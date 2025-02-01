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
      orders.map((product,index)=>{
        return <div key={index} className="">
        
        <div className="max-w-4xl my-5 mx-auto dark:bg-slate-900 bg-white shadow-lg rounded-lg p-6">
 
    
 <div  className="mb-6">
    
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
    
       {
        orders.cartItems.map(()=>{
          return 
        })
       }

    
   </div>


</div> 

        </div>
      })
    }
     
 
    </>
  );
}
