"use client"

import Image from "next/image"
import { useScrollRefs } from "../contexts/ScrollRefsContext.jsx"
import Nav from "./Nav.jsx"
export default function Header() {
  const { topRef } = useScrollRefs()

  return (
    <header
      ref={topRef}
      className="bg-black h-[20vh] min-h-[150px] flex flex-col md:flex-row items-center justify-between p-2 md:p-4 md:px-8 w-full"
    >
      <h1 className="mt-8 mb-6">
        <Image
          src="/images/heman-hill-logo-white.svg"
          alt="Heman Hill Furniture Portfolio"
          width={120}
          height={45}
          priority
        />
      </h1>
      <Nav />
    </header>
  )
}
