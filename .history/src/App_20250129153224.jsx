import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import NotFound from "./pages/NotFound/NotFound"
import MainLayout from "./Layouts/MainLayout"
import Brands from "./pages/Brands/Brands"
import ProtectedRoute from "./Auth/ProtectedRoute/ProtectedRoute"
import {HeroUIProvider} from "@heroui/react";
import AuthContextProvider from "./Contexts/AuthContext/AuthContextProvider"
import ProtectedLoginRouting from "./Auth/ProtectedLoginRouting"
import Categories from "./pages/categories/categories"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import { ToastContainer } from 'react-toastify';
import Carts from "./pages/Carts/Carts"
import WishList from "./pages/WishList/WishList"
import Allorders from "./pages/Orders/Allorders"




function App() {
  
  const router = createBrowserRouter([
    {path: "" , element:<MainLayout /> , children:[
        {index:true , element:<ProtectedRoute><Home /></ProtectedRoute>},
        {path:"/login" , element: <ProtectedLoginRouting><Login /></ProtectedLoginRouting>},
        {path:"/register" , element:<ProtectedLoginRouting><Register /></ProtectedLoginRouting>},       
        {path:"/brands" , element:<ProtectedRoute><Brands/></ProtectedRoute> },
        {path:"/categories" , element:<ProtectedRoute><Categories/></ProtectedRoute> },    
        {path:"/wishlist" , element:<ProtectedRoute><WishList/></ProtectedRoute> },             
        {path:"/carts" , element: <ProtectedRoute><Carts/></ProtectedRoute> },
        {path:"/allorders" , element: <ProtectedRoute><Allorders/></ProtectedRoute> },
        {path:"/Address" , element: <ProtectedRoute><Address/></ProtectedRoute> },
        {path:"/productDetails/:id" , element: <ProtectedRoute><ProductDetails/></ProtectedRoute> },
        {path:"*" , element: <NotFound />}
      ]}
  ])

return (    
<>
<AuthContextProvider>
<HeroUIProvider>
<RouterProvider router={router}></RouterProvider>  
<ToastContainer />  
</HeroUIProvider>
</AuthContextProvider>
</>
)
} 
export default App
