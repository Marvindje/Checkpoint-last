import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function MenShirtsPage() {
  const shirts = [
    {
      id: 45,
      name: "Classic Shirt",
      price: "$45",
      image: "https://i.ibb.co/zQXL1CZ/abuzar-xheikh-n-LDAb-Nlusu-A-unsplash.jpg",
      description: "Une chemise classique pour toutes les occasions.",
    },
    {
      id: 46,
      name: "Formal Shirt",
      price: "$55",
      image: "https://i.ibb.co/s9k8FGS/christopher-stark-6-RTha8-KJEq-I-unsplash.jpg",
      description: "Parfait pour les occasions formelles.",
    },
    {
      id: 47,
      name: "Casual Shirt",
      price: "$40",
      image: "https://i.ibb.co/NjQXmpn/phil-monte-4-V4t0-Jc-OM5-E-unsplash.jpg",
      description: "Idéal pour un look décontracté.",
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
