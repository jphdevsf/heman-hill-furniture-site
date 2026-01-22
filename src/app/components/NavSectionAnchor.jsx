"use client"

import { useScrollRefs } from "../contexts/ScrollRefsContext.jsx"

const NavSectionAnchor = ({ id = "", className, children }) => {
  const { aboutRef, galleryRef, contactRef, heroRef, topRef } = useScrollRefs()
  const refs = {
    about: aboutRef,
    gallery: galleryRef,
    contact: contactRef,
    hero: heroRef,
    top: topRef
  }
  return (
    <section
      ref={refs[id] || null}
      id={id}
      className={
        className ||
        "bg-warmGray-1000 flex flex-col items-center w-full px-4 py-8 mb-8 max-w-screen-2xl mx-auto"
      }
    >
      {children}
    </section>
  )
}
export default NavSectionAnchor
