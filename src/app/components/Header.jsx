"use client"

import Image from "next/image"
import { useScrollRefs } from "../contexts/ScrollRefsContext.jsx"
import Nav from "./Nav.jsx"
export default function Header() {
  const { topRef } = useScrollRefs()

  return (
    <header
      ref={topRef}
      className="bg-black h-[20vh] min-h-[150px] flex flex-col items-center justify-center p-2.5 w-full"
    >
      <h1 className="mt-8 mb-6">
        <Image
          src="/images/heman-hill-logo.jpg"
          alt="Heman Hill Furniture Portfolio"
          width={134}
          height={61}
          priority
        />
      </h1>
      <Nav />
    </header>
  )
}
