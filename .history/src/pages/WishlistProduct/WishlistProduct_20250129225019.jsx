import axios from "axios"


export default function WishlistProduct() {
    function getWishlistProduct(){
        return  axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
            productId,
        },{
            headers:{
                token:localStorage.getItem("token")
            }
        })
       }
     
       
       
  return (
    <>
      
    </>
  )
}
