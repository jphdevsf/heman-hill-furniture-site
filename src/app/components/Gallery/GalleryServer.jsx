import getGalleryImageData from "../../lib/getGalleryImageData"
import MasonryGridClient from "./MasonryGridClient"

const GalleryServer = async () => {
  const images = await getGalleryImageData()

  return (
    <div className="bg-warmGray-1000 w-full py-8 mb-10">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl md:text-5xl my-10 font-jost font-light text-center">Gallery</h2>
        <MasonryGridClient images={images} />
      </div>
    </div>
  )
}

export default GalleryServer
