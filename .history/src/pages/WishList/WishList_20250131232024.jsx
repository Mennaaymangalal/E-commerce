import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { formatCurrency } from "../../helpers/Currancy";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import addProuctToCart from "../../Services/cartServices";
import LoadingScreen from "../../component/LoadingScreen/LoadingScreen";

export default function WishList() {
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [removingProductId, setRemovingProductId] = useState(null);

  const queryClient = useQueryClient();

  function getWishList() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
  }

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["wishList"],
    queryFn: getWishList,
    select: (data) => data?.data.data,
  });

  async function removeProductFromWishlist(productId) {
    setRemovingProductId(productId);
    const { data } = await axios.delete(
      "https://ecommerce.routemisr.com/api/v1/wishlist/" + productId,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    localStorage.setItem(`wishlist-${productId}`, "false");
    queryClient.invalidateQueries(["wishList"]);
    setRemovingProductId(null);
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <> 
      {
        data.length > 0
      }
      
    </>
  );
}
