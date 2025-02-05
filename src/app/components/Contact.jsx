"use client";

import Image from 'next/image';

const Contact = () => {
  return (
    <div id="contact" className="bg-warmGray-950 max-w-[1440px] mx-auto w-full flex flex-col-reverse md:flex-row md:space-x-4 mb-10">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl mb-2 font-jost font-light">Contact</h2>
        <a href="mailto:hemanhill@yahoo.com" className="text-white underline mb-6 md:mb-0">hemanhill@yahoo.com</a>
      </div>
      <div className="h-96 md:h-96 relative w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src={`/images/bio-hills.jpg`}
          alt={`central coast`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Contact;