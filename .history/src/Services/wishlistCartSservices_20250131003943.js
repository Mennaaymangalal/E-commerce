import axios from 'axios'

export de async function addProductWishlist(productId,setIsLoading) {
    setIsLoading(true);
    const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
            productId,
        },{
            headers:{
                token:localStorage.getItem("token")
            }
        }) 
    console.log(data)
    setIsLoading(false);
  }