import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function MenSweatshirtsPage() {
  const sweatshirts = [
    {
      id: 48,
      name: "Classic Sweatshirt",
      price: "$60",
      image: "https://i.ibb.co/Mg56pDR/sandeep-swarnkar-asytdeog-TDE-unsplash.jpg",
      description: "Un sweatshirt classique pour tous les jours.",
    },
    {
      id: 49,
      name: "Sport Sweatshirt",
      price: "$65",
      image: "https://i.ibb.co/cxF5LXm/kate-oseen-kk1-NA7f-Vqnw-unsplash.jpg",
      description: "Parfait pour les activités sportives.",
    },
    {
      id: 50,
      name: "Casual Sweatshirt",
      price: "$55",
      image: "https://i.ibb.co/9NwKhYF/erendira-tovar-u-I0c-QFXESps-unsplash.jpg",
      description: "Idéal pour un look décontracté.",
    },
    {
      id: 51,
      name: "Formal Sweatshirt",
      price: "$70",
      image: "https://i.ibb.co/fNc2pyj/elijah-hiett-umfp-Fo-Kx-IVg-unsplash.jpg",
      description: "Pour les occasions plus formelles.",
    },
  ];

  return (
    <div className="flex justify-center mt-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-cover p-8 overflow-auto"
        style={{ gridAutoRows: "auto", justifyContent: "center" }}
      >
        {sweatshirts.map((sweatshirt) => (
          <Parallax y={[-20, 20]} key={sweatshirt.id}>
            <motion.div
              className="rounded overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              style={{ margin: "20px", maxWidth: "300px" }}
            >
              <img
                className="w-full h-auto object-cover"
                src={sweatshirt.image}
                alt={sweatshirt.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{sweatshirt.name}</div>
                <p className="text-gray-800 text-lg">{sweatshirt.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 mr-2 mb-2">
                  {sweatshirt.price}
                </span>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </div>
    </div>
  );
}

export default MenSweatshirtsPage;
