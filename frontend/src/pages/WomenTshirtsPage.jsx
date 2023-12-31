import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function WomenTshirtsPage() {
  const tshirts = [
    {
      id: 52,
      name: "Classic Tee",
      price: "$25",
      image: "https://i.ibb.co/KjgKdsR/allef-vinicius-YHo-EN7-Esw-unsplash.jpg",
      description: "Un t-shirt classique pour tous les jours.",
    },
    {
      id: 53,
      name: "Sport Tee",
      price: "$30",
      image: "https://i.ibb.co/BTTW7Wp/ian-dooley-TT-ROx-Wj9n-A-unsplash.jpg",
      description: "Parfait pour les activités sportives.",
    },
    {
      id: 54,
      name: "Casual Tee",
      price: "$20",
      image: "https://i.ibb.co/q0kw19t/mikail-duran-Kv5-Wiq-G-3-NA-unsplash.jpg",
      description: "Idéal pour un look décontracté.",
    },
    {
      id: 55,
      name: "Formal Tee",
      price: "$35",
      image: "https://i.ibb.co/8grjyH5/mike-von-Ysi-SAp3ccvk-unsplash.jpg",
      description: "Pour les occasions plus formelles.",
    },
  ];

  return (
    <div className="flex justify-center mt-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-cover p-8 overflow-auto"
        style={{ gridAutoRows: "auto", justifyContent: "center" }}
      >
        {tshirts.map((tshirt) => (
          <Parallax y={[-20, 20]} key={tshirt.id}>
            <motion.div
              className="rounded overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              style={{ margin: "20px", maxWidth: "300px" }}
            >
              <img
                className="w-full h-auto object-cover"
                src={tshirt.image}
                alt={tshirt.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{tshirt.name}</div>
                <p className="text-gray-800 text-lg">{tshirt.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 mr-2 mb-2">
                  {tshirt.price}
                </span>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </div>
    </div>
  );
}

export default WomenTshirtsPage;
