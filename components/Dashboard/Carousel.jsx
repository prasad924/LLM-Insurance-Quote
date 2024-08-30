import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ slides, onClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const currentImage = slides[currentSlide];

  return (
    <>
      <div className="flex items-center gap-3">
        <span className='cursor-pointer' onClick={prevSlide}>
          <img src="/arrow.svg" alt="prev" />
        </span>
        <img 
          className='rounded-lg cursor-pointing' 
          src={currentImage.path} 
          alt={`Slide ${currentSlide + 1}`} 
          style={{ maxWidth: '100%' }}
          onClick={() => onClick(currentImage.id)}
        />
        <span className='transform rotate-180 cursor-pointing' onClick={nextSlide}>
          <img src="/arrow.svg" alt="next" />
        </span>
      </div>
    </>
  );
};

export default Carousel;
