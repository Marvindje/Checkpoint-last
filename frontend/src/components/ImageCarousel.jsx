import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ImageCarousel() {
  const images = [
    "mohamad-khosravi-4fkUAduhoSY-unsplash.jpg",
    "mediamodifier-0UBg7jhsSxs-unsplash.jpg",
    "jesus-eca-qM2yxI-PcPs-unsplash.jpg",
    "benjamin-rascoe-WdhmRPvMn7A-unsplash.jpg",
    "peri-stojnic-iM9rXbjAoXI-unsplash.jpg",
    "kai-gabriel-DeUmcgcf3is-unsplash.jpg",
    "vonecia-carswell-0aMMMUjiiEQ-unsplash.jpg",
    "manny-moreno-ajhtGO4Cs7g-unsplash.jpg",
    "trinh-minh-th-ScYGyGhA9HQ-unsplash.jpg",
    "sergi-dolcet-escrig-D3Lma0WWx4A-unsplash.jpg",
    "michael-dolejs-b9hqQkKCnqw-unsplash.jpg",
    "pesce-huang-zZ0x29L7kKw-unsplash.jpg",
    "marcus-loke-xXJ6utyoSw0-unsplash.jpg",
    "camila-seves-espasandin-o4RpLOAF2OA-unsplash.jpg",
    "faith-yarn-Wr0TpKqf26s-unsplash.jpg",
    "gama-films-7hg75UX_0zY-unsplash.jpg",
  ];

  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={`/${image}`} // Changé le chemin ici
            alt="Product"
            style={{
              maxWidth: "300px",
              maxHeight: "300px",
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
