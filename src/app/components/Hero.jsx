"use client";

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-gray-950 w-full flex flex-col-reverse md:flex-row-reverse md:space-x-4 mb-10">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xk:text-7xl mb-2 text-center font-jost font-light">Welcome to <span className="block">HEMANHILL</span></h1>
        <p className="text-lg text-white mb-6 md:mb-0">Timeless designs</p>
      </div>
      <div className="h-80 md:h-96 relative w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src={`/images/hero-french-country-farmhouse-table-natural.jpg`}
          alt={`central coast`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Hero;