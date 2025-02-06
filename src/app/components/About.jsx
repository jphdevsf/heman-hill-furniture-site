"use client";

import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="bg-warmGray-1000 flex flex-col items-center w-full px-4 py-8 mb-8">
        <div className="max-w-[1024px] flex flex-col items-center w-full sm:w-4/6">
          <div className="mb-6 mt-4">
              <Image
              src="https://static.wixstatic.com/media/9869c4_408ba4a4ede64189988cd67dad95bebb~mv2.jpg/v1/fill/w_392,h_392,al_c,lg_1,q_80,enc_avif,quality_auto/french-country-side-board-brown_edited.jpg"
              alt="french-country-side-board-brown_edited.jpg"
              width={200}
              height={200}
              className="rounded-full object-cover"
              />
          </div>
          <h2 className="text-4xl md:text-5xl mb-8 font-jost font-light">About</h2>
          <span className="text-left font-light text-lg/8 md:text-xl/10 mb-4 inline-block mx-2 md:ml-8">
          <p className="mb-8">
          HemanHill manufactures two lines of furniture that are designed to create a unique style for your gallery. The French Country and Italian Country lines are made from old barnwood. The Live Edge line is made from reclaimed trees. Both lines are environmentally friendly, finished in water-based paint and polyurethane. The hardware is handmade by a blacksmith in Santa Barbara.
          </p>
          <p className="mb-8">
          HemanHill started working with wood at the age of 5. His godfather, Jim Godsey, was a 4th generation grandfather clock maker who had his shop next to Heman's house. At age 12, he started to make guitars, and after college in Seattle, he studied for two years with the Smithsonian artist Sodergren. The HemanHill catalog was started in 1995.
          </p>
          </span>
        </div>
    </div>
  );
};

export default About;