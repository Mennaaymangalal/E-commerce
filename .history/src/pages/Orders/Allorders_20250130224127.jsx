import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Contexts/AuthContext/AuthContextProvider";
import axios from "axios";

export default function Allorders() {
  const { userId } = useContext(authContext);
  console.log(userId);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (userId) getUserOrders();
  }, [userId]);

  async function getUserOrders() {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/orders/user/" + userId
    );
    setOrders(data);
    console.log(data);
  }
  return (
    <>
      {orders.map((product, index) => {
        return (
          <div key={index} className="">
            <div className="max-w-4xl my-5 mx-auto dark:bg-slate-900 bg-white shadow-lg rounded-lg p-6">
              <div className="mb-6">
                <div className="flex flex-wrap justify-between items-center border-b pb-4 gap-4">
                  <div>
                    <p className="text-gray-500">Date placed</p>
                    <p className="font-medium text-gray-800">
                      January 22, 2021
                    </p>
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

                {orders.cartItems.map((item, itemIndex)=> {
                  return (
                    <div className="mt-6">
                      <div className="flex flex-wrap items-center justify-between border-b pb-4 mb-4 gap-4">
                        <div className="flex items-center">
                          <img
                            src={item.product.imageCover}
                            alt=""
                            className="w-16 h-16 rounded object-cover mr-4"
                          />
                          <div>
                            <p className="font-medium text-gray-800">
                              {item.product.productName}
                            </p>
                            <p className="text-gray-500">{product.status}</p>
                          </div>
                        </div>
                        <p className="text-gray-800 font-medium">
                          {product.price}
                        </p>
                        <a
                          href="#"
                          className="text-blue-600 font-medium hover:underline"
                        >
                          View Product
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}



<div className="max-w-6xl mx-auto p-4">
      {orders.length > 0 ? (
        orders.map((order, orderIndex) => (
          <div
            key={orderIndex}
            className="max-w-4xl my-5 mx-auto dark:bg-slate-900 bg-white shadow-lg rounded-lg p-6"
          >
            <div className="mb-6">
              <div className="flex flex-wrap justify-between items-center border-b pb-4 gap-4">
                <div>
                  <p className="text-gray-500">Date placed</p>
                  <p className="font-medium text-gray-800">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Order number</p>
                  <p className="font-medium text-gray-800">{order._id}</p>
                </div>
                <div>
                  <p className="text-gray-500">Total amount</p>
                  <p className="font-medium text-gray-800">
                    ${order.totalOrderPrice}
                  </p>
                </div>
                <button className="text-blue-600 font-medium border border-blue-600 rounded-lg px-4 py-2 hover:bg-blue-100">
                  View Invoice
                </button>
              </div>

              <div className="mt-6">
                {order.cartItems.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-wrap items-center justify-between border-b pb-4 mb-4 gap-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="w-16 h-16 rounded object-cover mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.product.title}
                        </p>
                        <p className="text-gray-500">Status: {order.status}</p>
                      </div>
                    </div>
                    <p className="text-gray-800 font-medium">
                      ${item.price}
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      View Product
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No orders found.</p>
      )}
    </div>