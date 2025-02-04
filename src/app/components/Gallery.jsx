"use client";

import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import Modal from 'react-modal';
import styles from './gallery.module.css';

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
    <div className="mb-10">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {images.map((src, index) => (
          <div key={index} className={styles.masonryItem} onClick={() => openModal(src)}>
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={300}
              style={{ width: '100%', height: 'auto' }}
              priority={index < 3} // Add priority to the first three images
            />
          </div>
        ))}
      </Masonry>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        className={styles.lightbox}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalContent} onClick={closeModal}>
          <button className={styles.closeButton} onClick={closeModal}>X</button>
          {currentImage && <img src={currentImage} alt="Lightbox image" />}
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
