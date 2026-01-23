"use client"

import { useScrollRefs } from "../contexts/ScrollRefsContext.jsx"

const Nav = () => {
  const { aboutRef, galleryRef, contactRef } = useScrollRefs()

  const handleClick = ref => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <nav aria-label="Main Navigation" className="block m-0 mb-8 md:mb-0 p-0">
      <ul className="text-lg flex gap-4 font-light text-white">
        <li>
          <button
            className="text-white bg-black border-b-2 border-b-black hover:cursor-pointer hover:border-b-white transition-all duration-300"
            type="button"
            onClick={() => handleClick(galleryRef)}
          >
            Gallery
          </button>
        </li>
        <li>
          <button
            className="text-white bg-black border-b-2 border-b-black hover:cursor-pointer hover:border-b-white transition-all duration-300"
            type="button"
            onClick={() => handleClick(aboutRef)}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="text-white bg-black border-b-2 border-b-black hover:cursor-pointer hover:border-b-white transition-all duration-300"
            type="button"
            onClick={() => handleClick(contactRef)}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
