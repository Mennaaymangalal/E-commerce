import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { formatCurrency } from '../../helpers/Currancy'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

export default function WishList() {

 

  function getWishList(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
      headers:{
        token:localStorage.getItem("token")
      }
    })   
  }

  const {data} = useQuery({
      queryKey:['wishList'],
      queryFn: getWishList,
      select:(data)=> data?.data.data
  })
  console.log(data)

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
  <div className="">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Wish List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {data?.map((wishList,index)=>{
      return <div key={index}
      className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 flex flex-col items-center" >

     {/* <Link to={"/productDetails/" + wishList.id} className=""> */}
    <Slider {...settings}>
    {
      wishList.images.map((img,index)=>{
      return <img src={img}   className="w-32 h-32 object-cover mb-4 rounded"/>      
   
      })
    }
    </Slider>
      {/* </Link> */}
     <Link to={"/productDetails/" + wishList.id} className=""> <h2 className="text-lg font-semibold line-clamp-1">{wishList.title}</h2></Link>
      <p className="text-dark my-1 line-clamp-1">{wishList.description}</p>      
      <p className="text-dark mt-1  mb-3">price:{formatCurrency(wishList.price)}</p>     
      <div className="flex flex-col md:flex-row md:space-x-2 w-full">
        
       <div className=" flex justify-around align-middle w-full">
       <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto">
          Add to cart
        </button>
        <button className="text-red-500 hover:text-red-700 w-full md:w-auto mt-2 md:mt-0">
          <i className="fas fa-trash"></i>
        </button>
       </div>
      </div>
    </div>
    })} 

      </div>
    </div>
  



    </>
  )
}
