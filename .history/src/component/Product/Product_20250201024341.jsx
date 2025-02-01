import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../helpers/Currancy'
import addProductWishlist from '../../Services/addProductWishlist'
import addProuctToCart from '../../Services/cartServices'

export default function Product({ product, index }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isRed, setIsRed] = useState(false)

  useEffect(() => {
    const savedState = localStorage.getItem(`wishlist-${product._id}`)
    if (savedState === "true") {
      setIsRed(true)
    }
  }, [product._id])

  const handleHeartClick = async (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (isLoading) return
    const newState = !isRed
    setIsRed(newState)
    try {
      if (newState) {
        await addProductWishlist(product._id)
      } else {
        await removeProductWishlist(product._id)
      }
      localStorage.setItem(`wishlist-${product._id}`, newState.toString())
    } catch (error) {
      console.error("Error updating wishlist:", error)
      setIsRed(!newState)
    }
  }

  return (
    <>
      <div
        key={index}
        className="relative m-5 flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 dark:bg-slate-900 dark:border-slate-950 bg-white shadow-md"
      >
        <Link className="relative mx-3 mt-3 flex overflow-hidden rounded-xl" to={`/productDetails/${product._id}`}>
          {/* Image with hover scale */}
          <img
            className="object-contain w-full transition-transform duration-500 ease-in-out hover:scale-105"
            src={product.imageCover}
            alt={product.title}
          />
          <div className="absolute top-0 flex justify-between align-middle w-full">
            <div className="">
              {product.priceAfterDiscount && (
                <span className="m-2 rounded-full bg-black px-2 text-center text-sm font-medium dark:text-white text-white">
                  {100 - Math.round((product.priceAfterDiscount * 100) / product.price)}% OFF
                </span>
              )}
            </div>
            <div className="">
              <button
                onClick={handleHeartClick}
                className={`p-2 rounded-full bg-transparent focus:outline-none ${
                  isRed ? "text-red-500" : "text-gray-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill={isRed ? "red" : "none"}
                  stroke={isRed ? "red" : "currentColor"}
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C15.46 5.99 16.96 5 18.5 5 20.5 5 22 6.5 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Link>

        <div className="mt-4 px-5 pb-5">
          <div className="">
            <Link to={`/productDetails/${product._id}`}>
              <h5 className="text-xl tracking-tight text-slate-900 dark:text-white line-clamp-1">{product.title}</h5>
            </Link>
            <div className="mt-2 mb-5">
              <p>
                {product.priceAfterDiscount ? (
                  <>
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">
                      {formatCurrency(product.priceAfterDiscount)}
                    </span>
                    <span className="text-sm text-slate-900 line-through dark:text-white">
                      {formatCurrency(product.price)}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    {formatCurrency(product.price)}
                  </span>
                )}
              </p>
              <div className="flex items-center mt-1">
                {[1, 2, 3, 4, 5].map((rate, index) => {
                  return product.ratingsAverage >= rate ? (
                    <svg
                      key={index}
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1
