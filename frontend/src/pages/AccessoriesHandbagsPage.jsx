import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function AccessoriesHandbagsPage() {
  const handbags = [
    {
      id: 30,
      name: "Handbag Classic",
      price: "$70",
      image: "https://i.ibb.co/V2PfBbV/content-pixie-ZB4e-Qc-Nq-VUs-unsplash.jpg",
      description: "Un sac à main classique pour toutes les occasions.",
    },
    {
      id: 31,
      name: "Handbag Elegant",
      price: "$90",
      image: "https://i.ibb.co/M98Vf9L/irene-kredenets-tc-VH-Bw-Htrc-unsplash.jpg",
      description: "Élégant et sophistiqué.",
    },
    {
      id: 32,
      name: "Handbag Casual",
      price: "$60",
      image: "https://i.ibb.co/d55y1qZ/laura-chouette-Ct-OA9wb-FAd-Q-unsplash.jpg",
      description: "Idéal pour un usage quotidien.",
    },
  ];

  return (
    <div className="flex justify-center mt-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-cover p-8 overflow-auto"
        style={{ gridAutoRows: "auto", justifyContent: "center" }}
      >
        {handbags.map((handbag) => (
          <Parallax y={[-20, 20]} key={handbag.id}>
            <motion.div
              className="rounded overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              style={{ margin: "20px", maxWidth: "300px" }}
            >
              <img
                className="w-full h-auto object-cover"
                src={handbag.image}
                alt={handbag.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{handbag.name}</div>
                <p className="text-gray-800 text-lg">{handbag.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 mr-2 mb-2">
                  {handbag.price}
                </span>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </div>
    </div>
  );
}

export default AccessoriesHandbagsPage;
