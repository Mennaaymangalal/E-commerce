import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

import React from 'react'

export default function Slider() {
  return (
    <>
      
    </>
  )
}

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
    <div className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Auto-Sliding Carousel</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Auto-slide through your content seamlessly.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex transition-transform duration-[12s] ease-in-out"
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
              This is the first slide of the carousel.
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
              This is the second slide of the carousel.
            </p>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item bg-white dark:bg-gray-800 p-6 flex-shrink-0 w-full">
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
              alt="Slide 3"
              className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Slide 3</h2>
            <p className="text-gray-600 dark:text-gray-400">
              This is the third slide of the carousel.
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center mt-6">
        <p className="text-gray-500 dark:text-gray-400">
          This carousel automatically slides through the content using CSS animations.
        </p>
      </div>

      {/* Backlink */}
      <footer className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Designed by
          <a
            href="https://abhirajk.vercel.app/"
            className="text-blue-500 hover:underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhiraj K
          </a>
        </p>
      </footer>
    </div>
  );
};

