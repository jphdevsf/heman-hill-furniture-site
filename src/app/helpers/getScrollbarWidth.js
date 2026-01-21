const getScrollbarWidth = () => {
  const outer = document.createElement("div")
  outer.style.visibility = "hidden"
  outer.style.overflow = "scroll"
  outer.style.position = "absolute"
  outer.style.top = "-9999px"
  outer.style.width = "50px" // Arbitrary non-zero width
  outer.style.height = "50px"
  document.body.appendChild(outer)
  const inner = document.createElement("div")
  inner.style.height = "100%"
  outer.appendChild(inner)
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
  document.body.removeChild(outer)
  return scrollbarWidth
}

export default getScrollbarWidth
