"use client"

import { createContext, useContext, useRef } from "react"

const ScrollRefsContext = createContext()

export const ScrollRefsProvider = ({ children }) => {
  const aboutRef = useRef(null)
  const galleryRef = useRef(null)
  const contactRef = useRef(null)
  const heroRef = useRef(null)
  const topRef = useRef(null)

  return (
    <ScrollRefsContext.Provider value={{ aboutRef, galleryRef, contactRef, heroRef, topRef }}>
      {children}
    </ScrollRefsContext.Provider>
  )
}

export const useScrollRefs = () => useContext(ScrollRefsContext)
