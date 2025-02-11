import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

import React from 'react'

export default function Slider() {
    const AutoSlidingCarousel = () => {
        const carouselRef = useRef(null);
      
        useEffect(() => {
          const interval = setInterval(() => {
            if (carouselRef.current) {
              carouselRef.current.classList.add("animate-slide");
            }
          }, 4000);
      
          return () => clearInterval(interval);
        }, []);
      
  return (
    <>
      
    </>
  )
}



};

