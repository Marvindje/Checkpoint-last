import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function AccessoriesCapsPage() {
  const caps = [
    {
      id: 34,
      name: "Classic Cap",
      price: "$25",
      image: "https://i.ibb.co/NV7LJ1P/ahmed-syed-6-NVr-H0-HB-DE-unsplash.jpg",
      description: "Une casquette classique pour un look décontracté.",
    },
    {
      id: 35,
      name: "Sporty Cap",
      price: "$30",
      image: "https://i.ibb.co/XF3mh2y/joe-ciciarelli-Fw-Vn-AY-x-Ma-Y-unsplash.jpg",
      description: "Parfait pour les activités sportives.",
    },
    {
      id: 36,
      name: "Winter white cap",
      price: "$20",
      image: "https://i.ibb.co/TbR2h8P/mediamodifier-t8-Hi-P3e5abg-unsplash.jpg",
      description: "Du style  pour les jours froids.",
    },
  ];

  return (
    <div className="flex justify-center mt-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-cover p-8 overflow-auto"
        style={{ gridAutoRows: "auto", justifyContent: "center" }}
      >
        {caps.map((cap) => (
          <Parallax y={[-20, 20]} key={cap.id}>
            <motion.div
              className="rounded overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              style={{ margin: "20px", maxWidth: "300px" }}
            >
              <img
                className="w-full h-auto object-cover"
                src={cap.image}
                alt={cap.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{cap.name}</div>
                <p className="text-gray-800 text-lg">{cap.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 mr-2 mb-2">
                  {cap.price}
                </span>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </div>
    </div>
  );
}

export default AccessoriesCapsPage;
