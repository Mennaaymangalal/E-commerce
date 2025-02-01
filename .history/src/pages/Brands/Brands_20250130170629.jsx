import axios from "axios"

export default function Brands() {

  function getAllBrands(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
 consr 
  return (
    <>
      <h1>brands</h1>
    </>
  )
}
