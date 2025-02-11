import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

export default function Slider() {
  const carouselRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        index = (index + 1) % totalSlides;
        carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Auto-Sliding Carousel</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Auto-slide through your content seamlessly.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="overflow-hidden rounded-lg shadow-lg relative w-full">
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex transition-transform duration-700 ease-in-out w-full"
        >
          {/* Slide 1 */}
          <div className="carousel-item bg-white dark:bg-gray-800 p-6 flex-shrink-0 w-full">
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp"
              alt="Slide 1"
              className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Slide 1</h2>
            <p className="text-gray-600 dark:text-gray-400">
             Sale Up To 70%!
            </p>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item bg-white dark:bg-gray-800 p-6 flex-shrink-0 w-full">
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp"
              alt="Slide 2"
              className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Slide 2</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Hurry up! sale will end soon
            </p>
          </div>

       
        </div>
      </div>

     
    </div>
  );
}
