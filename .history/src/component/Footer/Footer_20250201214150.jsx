import React from 'react'
import img from '../../assets/original-dbbc84c08bd6b4b49fc97827fa5be468-removebg-preview.png'


export default function Footer() {
  return (
    <>
    {/* lg:max-w-screen-xl */}
    <div className="border-t px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8">
  
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row ">
    <p className="dark:text-white text-sm text-gray-600">
      © Copyright 2020 Lorem Inc. All rights reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      <li>
        <a href="/" className="dark:text-white text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
      </li>
      <li>
        <a href="/" className="dark:text-white text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
      </li>
      <li>
        <a href="/" className="dark:text-white text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
      </li>
    </ul>
  </div>
</div>      
    </>
  )
}
