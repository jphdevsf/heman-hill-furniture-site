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

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="bg-warmGray-950 w-full py-8 mb-10">
      <div className="max-w-[1440px] mx-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-7 w-auto"
          columnClassName="pl-7 bg-clip-padding"
        >
          {images.map((src, index) => (
            <div key={index} className="mb-7 overflow-hidden relative" onClick={() => openModal(src)}>
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
            {currentImage && <img src={currentImage} alt="Lightbox image" className="max-w-9/10 max-h-9/10" />}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;