"use client"

import Image from "next/image"
import { smoothScroll } from "../helpers/smooth-scroll.js"

export default function Header() {
  const handleScroll = targetId => event => {
    event.preventDefault()
    smoothScroll(targetId)
  }

  return (
    <header className="bg-black h-[20vh] min-h-[150px] flex flex-col items-center justify-center p-2.5 w-full">
      <h1 className="mt-8 mb-6">
        <Image
          src="/images/heman-hill-logo.jpg"
          alt="Heman Hill Furniture Portfolio"
          width={134}
          height={61}
          priority
        />
      </h1>
      <nav aria-label="Main Navigation">
        <ul className="text-lg flex gap-4 font-light text-white mb-8">
          <li>
            <button
              className="text-white bg-black"
              type="button"
              href="#gallery"
              onClick={handleScroll("gallery")}
            >
              Gallery
            </button>
          </li>
          <li>
            <button
              className="text-white bg-black"
              type="button"
              href="#about"
              onClick={handleScroll("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="text-white bg-black"
              type="button"
              href="#contact"
              onClick={handleScroll("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
