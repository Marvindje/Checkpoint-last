import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function AccessoriesGlassesPage() {
  const glasses = [
    {
      id: 37,
      name: "Classic Glasses",
      price: "$40",
      image: "https://i.ibb.co/M2Ltrws/angus-gray-b-Sjqyquk-Cj-Y-unsplash.jpg",
      description: "Des lunettes classiques pour un look intemporel.",
    },
    {
      id: 38,
      name: "Sporty Glasses",
      price: "$45",
      image: "https://i.ibb.co/crTjj7z/carlos-vaz-KP4bxnx-Ail-U-unsplash.jpg",
      description: "Parfait pour les activités sportives.",
    },
    {
      id: 39,
      name: "Elegant Glasses",
      price: "$50",
      image: "https://i.ibb.co/StXdCM3/jess-bailey-We-Co-Lo0-Rxp4-unsplash.jpg",
      description: "Élégantes et sophistiquées.",
    },
    {
      id: 40,
      name: "Casual Glasses",
      price: "$35",
      image: "https://i.ibb.co/9mXk8dP/jocelyn-morales-Mv7kokwz-IMw-unsplash.jpg",
      description: "Idéales pour un usage quotidien.",
    },
  ];

  return (
    <div className="flex justify-center mt-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-cover p-8 overflow-auto"
        style={{ gridAutoRows: "auto", justifyContent: "center" }}
      >
        {glasses.map((glass) => (
          <Parallax y={[-20, 20]} key={glass.id}>
            <motion.div
              className="rounded overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              style={{ margin: "20px", maxWidth: "300px" }}
            >
              <img
                className="w-full h-auto object-cover"
                src={glass.image}
                alt={glass.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{glass.name}</div>
                <p className="text-gray-800 text-lg">{glass.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 mr-2 mb-2">
                  {glass.price}
                </span>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </div>
    </div>
  );
}

export default AccessoriesGlassesPage;
