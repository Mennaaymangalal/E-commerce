import React from 'react'
import img from '../../assets/original-dbbc84c08bd6b4b49fc97827fa5be468-removebg-preview.png'


export default function Footer() {
  return (
    <>
    {/* lg:max-w-screen-xl */}
    <div className="border-t px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="border-t px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-3 lg:grid-cols-3 items-start">
    {/* Logo and Description */}
    <div>
      <a
        href="/"
        aria-label="Go home"
        title="Company"
        className="flex items-center justify-start"
      >
        <div className="w-20 h-20">
          <img
            src={img}
            alt="Freshcard Logo"
            className="object-contain w-full h-full"
          />
        </div>
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase dark:text-white">
          FRESHCARD
        </span>
      </a>
      <div className="mt-6 lg:max-w-sm">
        <p className="dark:text-white text-sm text-gray-800">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <p className="dark:text-white mt-4 text-sm text-gray-800">
          Eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div>

    {/* Contacts Section */}
    <div>
      <p className="dark:text-white text-base font-bold tracking-wide text-gray-900">
        Contacts
      </p>
      <div className="flex mt-2">
        <p className="dark:text-white mr-1 text-gray-800">Phone:</p>
        <a
          href="tel:850-123-5021"
          aria-label="Our phone"
          title="Our phone"
          className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          850-123-5021
        </a>
      </div>
      <div className="flex">
        <p className="dark:text-white mr-1 text-gray-800">Email:</p>
        <a
          href="mailto:info@lorem.mail"
          aria-label="Our email"
          title="Our email"
          className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          info@lorem.mail
        </a>
      </div>
      <div className="flex">
        <p className="dark:text-white mr-1 text-gray-800">Address:</p>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Our address"
          title="Our address"
          className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          312 Lovely Street, NY
        </a>
      </div>
    </div>

    {/* Social Section */}
    <div>
      <p className="dark:text-white text-base font-bold tracking-wide text-gray-900">
        Social
      </p>
      <div className="flex items-center mt-2 space-x-3">
        <a
          href="/"
          className="dark:text-white text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5"
          >
            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7..."></path>
          </svg>
        </a>
        <a
          href="/"
          className="dark:text-white text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          <svg
            viewBox="0 0 30 30"
            fill="currentColor"
            className="h-6"
          >
            <circle cx="15" cy="15" r="4"></circle>
            <path d="M19.999,3h-10C6.14,3,3,6.141..."></path>
          </svg>
        </a>
        <a
          href="/"
          className="dark:text-white text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5"
          >
            <path d="M22,0H2C0.895,0,0,0.895..."></path>
          </svg>
        </a>
      </div>
      <p className="mt-4 text-sm dark:text-white text-gray-500">
        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
      </p>
    </div>
  </div>
</div>

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
