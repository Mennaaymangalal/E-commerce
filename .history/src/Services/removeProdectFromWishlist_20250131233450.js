 export async function removeProductFromWishlist(productId) {
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