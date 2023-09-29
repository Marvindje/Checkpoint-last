import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ImageCarousel() {
  const images = [
    "trinh-minh-th-ScYGyGhA9HQ-unsplash.jpg",
    "sergi-dolcet-escrig-D3Lma0WWx4A-unsplash.jpg",
"ehimetalor-akhere-unuabona-fGATCEsRp0Q-unsplash.jpg",
    "pesce-huang-zZ0x29L7kKw-unsplash.jpg",
    "jingxi-lau-7m0Y-vhyDGE-unsplash.jpg",
    "jesus-eca-vr0q87dQQfA-unsplash.jpg",
    "milada-vigerova-p8Drpg_duLw-unsplash.jpg",
    "sindre-aalberg-q1Wd5MJvcKo-unsplash.jpg",
  
    "lola-rose-840tjesh9ww-unsplash.jpg",
    "anomaly-WWesmHEgXDs-unsplash.jpg",
    
    "warion-taipei-Gb3wBsGr_mQ-unsplash.jpg",
   "marcus-loke-xXJ6utyoSw0-unsplash.jpg",
    
    "camila-seves-espasandin-o4RpLOAF2OA-unsplash.jpg",
  ];

  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={`/images/${image}`} // Changé le chemin ici
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
