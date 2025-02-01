import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { formatCurrency } from "../../helpers/Currancy";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import LoadingScreen from "../../component/LoadingScreen/LoadingScreen";
import addProuctToCart from "../../Services/cartServices";
import getWishList from "../../Services/getWishList";

export default function WishList() {
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const queryClient = useQueryClient();


  async function removeProductFromWishlist(productId) {
    const { data } = await axios.delete(
      "https://ecommerce.routemisr.com/api/v1/wishlist/" + productId,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    console.log(data);
  }

  const removeProductMutation = useMutation({
    mutationFn: removeProductFromWishlist, // Calls the external function
    onSuccess: () => {
      queryClient.invalidateQueries(["wishList"]); // Re-fetch wishlist data after removing an item
    },
  });

  // Fetch wishlist using the imported function
  const { data: wishlist, isLoading } = useQuery({
    queryKey: ["wishList"], // Cache key
    queryFn: getWishList, // Use external function
    select: (data) => data?.data.data, // Extract only relevant data
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
     {
      wishlist?.lenghth
     }
    </>
  );
}
