import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function BrandDetails() {
  const { brandId } = useParams();

  const fetchBrandDetails = () => {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands/" + brandId);
  };

  const { data: brand, isLoading } = useQuery({
    queryKey: ["BrandDetails", brandId],
    queryFn: fetchBrandDetails,
    select: (data) => data?.data.data,
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">{brand.name}</h1>
      <img
        src={brand.image}
        alt={brand.name}
        className="w-full h-auto object-cover"
      />
      {/* Add more brand details here */}
    </div>
  );
}
