import axios from "axios"

export default function Brands() {

  function getAllBrands(){
    return axios.get("https://ecommerce.routemisr.com")
  }
 
  return (
    <>
      <h1>brands</h1>
    </>
  )
}
