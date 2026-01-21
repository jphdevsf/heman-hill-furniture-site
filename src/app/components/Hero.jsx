"use client"

import Image from "next/image"

const Hero = () => {
  return (
    <div className="bg-warmGray-1000 w-full mx-auto flex flex-col-reverse md:flex-row-reverse mb-8">
      <div className="w-full md:w-1/2 bg-warmGray-1000 mb-4 md:mb-0 flex flex-col justify-center items-center">
        <h1 className="mb-2 text-center text-white font-jost font-light">
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl">Welcome to </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-8xl">HEMANHILL</span>
        </h1>
        <p className="text-xl text-white mb-6 md:mb-0 font-light">Timeless designs</p>
      </div>
      <div className="h-80 md:h-[70vh] relative w-full md:w-1/2 mb-8 md:mb-0 block ml-0">
        <Image
          src={`/images/hero-french-country-farmhouse-table-natural.jpg`}
          alt={`central coast`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

export default Hero
