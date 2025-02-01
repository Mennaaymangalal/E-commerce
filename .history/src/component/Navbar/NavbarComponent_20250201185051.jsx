import React, {   useContext, useEffect, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem, 
  Button,
} from "@heroui/react";
import { NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider';


export default function NavbarComponent() {  
  const Navigate = useNavigate()
  const {isLogedIn , setIsLogedIn} = useContext(authContext)
  const [isDarkMode,setIsDarkMOde] = useState( localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Home",
    "Categories",
    "Brands",  
    "WishList",
    "Cart", 
  ];

  function logout(){
    setIsLogedIn(false);
    localStorage.removeItem("token")
    Navigate("/login")
  }

  function toggleMode(){
     if(isDarkMode){
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
     }else{
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
     }
  }
  useEffect(()=>{
    toggleMode()
  },[isDarkMode])

  return (
    <>      
     <Navbar isBordered shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>


     <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
          <NavbarBrand>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="50"
                height="50"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ff5f6d" />
                    <stop offset="100%" stopColor="#ffc371" />
                  </linearGradient>
                </defs>
                <g fill="url(#gradient)">
                  <path d="M20,30 L70,30 Q75,30 75,35 L75,60 Q75,65 70,65 L25,65 Q20,65 20,60 Z" />
                  <path d="M20,30 L15,25 Q10,20 15,15 Q20,10 25,15 L30,20" />
                  <circle cx="30" cy="70" r="5" />
                  <circle cx="60" cy="70" r="5" />
                </g>
              </svg>
              <p className="font-bold text-inherit ml-2">FRESHCARD</p>
            </div>
          </NavbarBrand>
        </NavbarContent>

 
    {  
      isLogedIn &&
      <NavbarContent className="hidden md:flex gap-4 ms-20" justify="end">
      {menuItems.map((item,index)=>(
          <NavbarItem key={index} >
          <NavLink color="foreground" to={ item == "Home" ? "/" : "/" + item.toLowerCase()}>
            {item}
          </NavLink>
      
        </NavbarItem>
      ))}      
    </NavbarContent>}


      <NavbarContent justify="end">
     
     <div onClick={()=> (setIsDarkMOde(!isDarkMode))} className="flex flex-col justify-end ms-3">
    <input type="checkbox" name="light-switch" className="light-switch sr-only" />
    <label className="relative cursor-pointer p-2"  htmlFor="light-switch">
        <svg className="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
            <path className="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
        </svg>
        <svg className="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
            <path className="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
        </svg>
        <span className="sr-only">Switch to light / dark version</span>
    </label>
      </div>   

     { 
      isLogedIn ?
      <NavbarItem>
          <Button onPress={logout} as={NavLink} color="danger" to={"register"} variant="bordered">
            Log out
          </Button>
        </NavbarItem> 
        :
       <>
        <NavbarItem className="flex">
          <NavLink to={"/login"}>Login</NavLink>
        </NavbarItem>
        <NavbarItem>
          <Button as={NavLink} color="primary" to={"/register"} variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
       </>
        }
       
      </NavbarContent>

     {
     isLogedIn &&
     <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem  onClick={() => (setIsMenuOpen(false)) } key={`${item}-${index}`}>
            <NavLink
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              to={ item == "Home" ? "/" : "/" + item.toLowerCase() }
              size="lg"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>}
    </Navbar>     
    </>
  )
}
