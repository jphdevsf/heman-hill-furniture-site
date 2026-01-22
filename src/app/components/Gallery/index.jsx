import getGalleryImageData from "../../lib/getGalleryImageData"
import NavSectionAnchor from "../NavSectionAnchor"
import MasonryGridClient from "./MasonryGridClient"

const Gallery = async () => {
  const images = await getGalleryImageData()

  return (
    <NavSectionAnchor id="gallery">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl md:text-5xl text-white my-10 font-jost font-light text-center">
          Gallery
        </h2>
        <MasonryGridClient images={images} />
      </div>
    </NavSectionAnchor>
  )
}

export default Gallery
