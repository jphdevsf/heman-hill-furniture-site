"use client"

import Image from "next/image"
import { useState } from "react"
import Masonry from "react-masonry-css"
import ModalViewerClient from "./ModalViewerClient"

const MasonryGridClient = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(null)

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2
  }

  const handleClose = () => setCurrentImage(null)

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className="mb-4 border-0 p-0 w-full overflow-hidden relative cursor-pointer"
            onClick={() => setCurrentImage(image)}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{ width: "100%", height: "auto" }}
              priority={index < 3}
              className="transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </button>
        ))}
      </Masonry>

      <ModalViewerClient image={currentImage} onClose={handleClose} />
    </>
  )
}

export default MasonryGridClient
