import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function BrandDetails() {
  const { brandId } = useParams();
  console.log(brandId)

  const GetSspecificBrand = () => {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands/" + brandId);
  };

  const { data: brand} = useQuery({
    queryKey: ["BrandDetails", brandId],
    queryFn: GetSspecificBrand,
    select: (data) => data?.data.data,
  });



  return (
   
  );
}
