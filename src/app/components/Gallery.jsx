"use client";

import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/images/gallery/images.json');
      const data = await res.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  const openModal = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  const handleKeyDown = (event, src) => {
    if (event.key === 'Enter') {
      openModal(src);
    }
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div id="gallery" className="bg-warmGray-1000 w-full py-8 mb-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="block m-4">
          <h2 className="text-4xl md:text-5xl my-10 font-jost font-light text-center">Gallery</h2>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="mb-4 overflow-hidden relative cursor-pointer"
                onClick={() => openModal(src)}
                onKeyDown={(event) => handleKeyDown(event, src)}
                tabIndex={0}
                role="button"
                aria-label={`Open image ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={300}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                  priority={index < 3} // Add priority to the first three images
                  className="transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            ))}
          </Masonry>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
            overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80"
          >
            <div className="relative bg-transparent flex w-screen h-screen items-center justify-center" onClick={closeModal}>
              <button className="absolute top-2.5 right-2.5 bg-none border-none text-white text-2xl cursor-pointer" onClick={closeModal}>X</button>
              {currentImage && <img src={currentImage} alt="Lightbox image" className="block w-full md:w-auto" />}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Gallery;