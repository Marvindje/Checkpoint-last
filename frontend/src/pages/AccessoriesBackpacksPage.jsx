import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";


function AccessoriesBackpacksPage() {
  const backpacks = [
    {
      id: 28,
      name: "Backpack Classic",
      price: "$50",
      image: "https://i.ibb.co/y8xzQZs/wiser-by-the-mile-Sw-WCo1k92-M4-unsplash.jpg", // Remplacez par l'URL de l'image
      description: "Un sac à dos classique pour tous les jours.",
    },
    {
      id: 29,
      name: "Backpack Sport",
      price: "$60",
      image: "https://i.ibb.co/VDfBCX8/sun-lingyan-H0fj-ILH5-Vw-unsplash.jpg", // Remplacez par l'URL de l'image
      description: "Parfait pour les activités sportives.",
    },
    {
      id: 30,
      name: "Backpack Travel",
      price: "$80",
      image: "https://i.ibb.co/NCW4x74/josiah-weiss-8sj-Bz-L1-Iy-Mo-unsplash.jpg", // Remplacez par l'URL de l'image
      description: "Idéal pour les voyages.",
    },
  ];

  return (
    <div className="flex justify-center mt-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-cover p-8 overflow-auto"
        style={{ gridAutoRows: "auto", justifyContent: "center" }}
      >
        {backpacks.map((backpack) => (
          <Parallax y={[-20, 20]} key={backpack.id}>
            <motion.div
              className="rounded overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              style={{ margin: "20px", maxWidth: "300px" }}
            >
              <img
                className="w-full h-auto object-cover"
                src={backpack.image}
                alt={backpack.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{backpack.name}</div>
                <p className="text-gray-800 text-lg">{backpack.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 mr-2 mb-2">
                  {backpack.price}
                </span>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </div>
    </div>
  );
}

export default AccessoriesBackpacksPage;