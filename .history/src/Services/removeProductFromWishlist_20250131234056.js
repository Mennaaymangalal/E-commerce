import axios from "axios";

/**
 * Removes a product from the wishlist.
 * @param {string} productId - The ID of the product to remove.
 * @param {function} setRemovingProductId - A state setter to track loading for the product.
 * @param {object} queryClient - React Query's QueryClient instance to invalidate queries.
 */
export default async function removeProductFromWishlist(productId, setRemovingProductId, queryClient) {
  try {
    setRemovingProductId(productId); // Start loading
    await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {
        headers: {
          token: localStorage.getItem("token"), // Get token from localStorage
        },
      }
    );
    localStorage.setItem(`wishlist-${productId}`, "false"); // Update localStorage
    queryClient.invalidateQueries(["wishList"]); // Refetch wishlist data
  } catch (error) {
    console.error("Error removing product from wishlist:", error);
  } finally {
    setRemovingProductId(null); // End loading
  }
}
