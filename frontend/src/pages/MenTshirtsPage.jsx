import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function MenShirtsPage() {
  const shirts = [
    {
      id: 41,
      name: "Classic Tee",
      price: "$25",
      image: "https://i.ibb.co/drQGmWc/anomaly-WWesm-HEg-XDs-unsplash.jpg",
      description: "Un t-shirt classique pour tous les jours.",
    },
    {
      id: 42,
      name: "Sport Tee",
      price: "$30",
      image: "https://i.ibb.co/0tPVYYZ/arrul-lin-s-Yh-Uhse5u-T8-unsplash.jpg",
      description: "Parfait pour les activités sportives.",
    },
    {
      id: 43,
      name: "Casual Tee",
      price: "$20",
      image: "https://i.ibb.co/GT8xnDf/frame-kings-j-Y54-He9-ZJu-I-unsplash.jpg",
      description: "Idéal pour un look décontracté.",
    },
    {
      id: 44,
      name: "Formal Tee",
      price: "$35",
      image: "https://i.ibb.co/rt6dN4x/linkedin-sales-solutions-EI50-ZDA-l8-Y-unsplash.jpg",
      description: "Pour les occasions plus formelles.",
    },
  ];

  return (
    <div className="flex justify-center mt-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-cover p-8 overflow-auto"
        style={{ gridAutoRows: "auto", justifyContent: "center" }}
      >
        {shirts.map((shirt) => (
          <Parallax y={[-20, 20]} key={shirt.id}>
            <motion.div
              className="rounded overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              style={{ margin: "20px", maxWidth: "300px" }}
            >
              <img
                className="w-full h-auto object-cover"
                src={shirt.image}
                alt={shirt.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{shirt.name}</div>
                <p className="text-gray-800 text-lg">{shirt.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 mr-2 mb-2">
                  {shirt.price}
                </span>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </div>
    </div>
  );
}

export default MenShirtsPage;