"use client";

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-warmGray-950 w-full max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row-reverse mb-8">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xk:text-7xl mb-2 text-center font-jost font-light">Welcome to <span className="block">HEMANHILL</span></h1>
        <p className="text-lg text-white mb-6 md:mb-0">Timeless designs</p>
      </div>
      <div className="h-80 md:h-96 relative w-full md:w-1/2 mb-8 md:mb-0 block ml-0">
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