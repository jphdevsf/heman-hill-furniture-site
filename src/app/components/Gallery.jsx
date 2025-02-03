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
      const res = await fetch('/api/images');
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
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {images.map((src, index) => (
          <div key={index} className={styles.masonryItem} onClick={() => openModal(src)}>
            <Image src={src} alt={`Gallery image ${index + 1}`} width={300} height={300} layout="responsive" />
          </div>
        ))}
      </Masonry>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={styles.lightbox}
        overlayClassName={styles.lightbox}
        shouldCloseOnOverlayClick={false}
      >
        <div className={styles.lightboxOverlay} onClick={closeModal}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            {currentImage && <img src={currentImage} alt="Lightbox image" />}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Gallery;