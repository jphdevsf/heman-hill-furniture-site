import Image from "next/image"
import NavSectionAnchor from "./NavSectionAnchor"

const Contact = () => {
  return (
    <NavSectionAnchor id="contact">
      <div className="w-full h-48 md:h-auto md:w-7/12 mb-4 md:mb-0 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl text-white mb-2 font-jost font-light">Contact</h2>
        <a href="mailto:hemanhill@yahoo.com" className="text-white underline mb-6 md:mb-4">
          hemanhill@yahoo.com
        </a>
      </div>
      <div className="h-60 md:h-[33vh] md:min-h-[150px] relative w-full md:w-5/12 mb-8 md:mb-0">
        <Image
          src={`/images/bio-hills.jpg`}
          alt={`central coast`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </NavSectionAnchor>
  )
}

export default Contact
