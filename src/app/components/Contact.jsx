"use client";

import Image from 'next/image';

const Contact = () => {
  return (
    <div id="contact" className="bg-warmGray-1000 max-w-[1440px] rounded-lg overflow-hidden mx-auto w-11/12 md-w-full flex flex-col-reverse md:flex-row mb-10">
      <div className="w-full h-48 md:h-auto md:w-7/12 mb-4 md:mb-0 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl mb-2 font-jost font-light">Contact</h2>
        <a href="mailto:hemanhill@yahoo.com" className="text-white underline mb-6 md:mb-0">hemanhill@yahoo.com</a>
      </div>
      <div className="h-60 md:h-[33vh] md:min-h-[150px] relative w-full md:w-5/12 mb-8 md:mb-0">
        <Image
          src={`/images/bio-hills.jpg`}
          alt={`central coast`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Contact;