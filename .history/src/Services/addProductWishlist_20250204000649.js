import axios from "axios"

// export default async function addProductWishlist(productId) {
//     const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
//             productId,
//         },{
//             headers:{
//                 token:localStorage.getItem("token")
//             }
//         }) 
//     console.log(data)
//   }

  function addProductWishlist(){
    axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist${}`)
  }