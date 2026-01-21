"use client"
import Image from "next/image"
import { useEffect } from "react"
import Modal from "react-modal"
import getScrollbarWidth from "../../helpers/getScrollbarWidth"

Modal.setAppElement("#__next")

const ModalViewerClient = ({ image, onClose }) => {
  useEffect(() => {
    let originalOverflow = ""
    let originalPaddingRight = ""

    if (image) {
      const scrollbarWidth = getScrollbarWidth()
      originalOverflow = document.body.style.overflow
      originalPaddingRight = document.body.style.paddingRight || "0px"
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${parseInt(originalPaddingRight) + scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
    }
  }, [image])

  if (!image) return null

  const { url, alt, width, height } = image

  return (
    url && (
      <Modal
        isOpen={!!image}
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        preventScroll={true}
        className="inline-block mx-auto"
        overlayClassName="overlay fixed flex items-start justify-center inset-0 bg-black bg-opacity-80 z-50 text-center overflow-auto"
      >
        <button
          type="button"
          className="fixed top-2.5 right-2.5 text-white bg-black w-8 h-8 flex items-center justify-center"
          onClick={onClose}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line
              x1="3"
              y1="3"
              x2="13"
              y2="13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="13"
              y1="3"
              x2="3"
              y2="13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {image && (
          <button type="button" className="m-4" onClick={onClose}>
            <Image
              src={url}
              alt={alt}
              width={width}
              height={height}
              loading="eager"
              className="block max-w-full h-auto"
            />
          </button>
        )}
      </Modal>
    )
  )
}

export default ModalViewerClient
