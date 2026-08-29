import { useState } from "react";
import "./Hero.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


function Hero() {

  const heroImages = [
    "/images/header1 (2).jpg",
    "/images/header2.jpg",
    "/images/header3.jpg",
    "/images/header4.jpg",
    "/images/header5.jpg",
  ];


  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };


  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1
    );
  };


  return (
    <div className="hero">

      <button 
        className="hero-btn prev-btn" 
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>


      <img
        src={heroImages[currentIndex]}
        alt="Hero Banner"
        className="hero-image"
      />


      <button 
        className="hero-btn next-btn" 
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>


    </div>
  );
}

export default Hero;