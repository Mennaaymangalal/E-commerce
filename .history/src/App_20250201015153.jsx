import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./Layouts/MainLayout";
import Brands from "./pages/Brands/Brands";
import ProtectedRoute from "./Auth/ProtectedRoute/ProtectedRoute";
import { HeroUIProvider } from "@heroui/react";
import AuthContextProvider from "./Contexts/AuthContext/AuthContextProvider";
import ProtectedLoginRouting from "./Auth/ProtectedLoginRouting";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import WishList from "./pages/WishList/WishList";
import Allorders from "./pages/Orders/Allorders";
import Address from "./pages/Address/Address";
import Cart from "./pages/Carts/Carts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "./pages/Categories/categories";
import BrandDetails from "./pages/BrandDetails/BrandDetails";
import CategoriesDetails from "./pages/CategoriesDetails/CategoriesDetails";


const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {path: "",element: <MainLayout />,children: [
        {index: true,element: (<ProtectedRoute><Home /></ProtectedRoute>),},
        {path: "/login",element: (<ProtectedLoginRouting><Login /></ProtectedLoginRouting>),},
        {path: "/register",element: (<ProtectedLoginRouting><Register /></ProtectedLoginRouting>),},
        {path: "/brands",element: (<ProtectedRoute><Brands /></ProtectedRoute>),},
        {path: "/brandDetails/:brandId",element: (<ProtectedRoute><BrandDetails /></ProtectedRoute>),},       
        {path: "/categories",element: (<ProtectedRoute><Categories /></ProtectedRoute>),},
        {path: "/categoriesDetails/",element: (<ProtectedRoute><CategoriesDetails /></ProtectedRoute>),},
        {path: "/wishlist",element: (<ProtectedRoute><WishList /></ProtectedRoute>),},
        {path: "/cart",element: (<ProtectedRoute><Cart /></ProtectedRoute>),},
        {
          path: "/allorders",
          element: (
            <ProtectedRoute>
              <Allorders />
            </ProtectedRoute>
          ),
        },
        {
          path: "/address/:cartId",
          element: (
            <ProtectedRoute>
              <Address />
            </ProtectedRoute>
          ),
        },
        {
          path: "/productDetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <HeroUIProvider>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer />
          </HeroUIProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}
export default App;
