"use client"

import { ChevronUp } from "lucide-react"
import { useScrollRefs } from "../contexts/ScrollRefsContext.jsx"

const BackToTop = () => {
  const { topRef } = useScrollRefs()

  const handleClick = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <span className="block mx-auto">
      <button
        type="button"
        className="text-white hover:cursor-pointer flex items-center bg-warmGray-1000 p-4"
        onClick={handleClick}
      >
        <span className="pr-2">Back To Top</span>
        <ChevronUp />
      </button>
    </span>
  )
}

export default BackToTop
