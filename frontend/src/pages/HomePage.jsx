import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

const initialContainer = { opacity: 0 };
const animateContainer = { opacity: 1 };
const transitionContainer = { duration: 1 };

const initialText = { opacity: 0, y: -50 };
const animateText = { opacity: 1, y: 0 };
const transitionText = { duration: 1, delay: 0.5 };

const initialTitle = { opacity: 0, y: 50 };
const animateTitle = { opacity: 1, y: 0 };

const initialParagraph = { opacity: 0, x: -50 };
const animateParagraph = { opacity: 1, x: 0 };

const Homepage = memo(() => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-blue-200 to-blue-300 p-6"
      initial={initialContainer}
      animate={animateContainer}
      transition={transitionContainer}
    >
      <motion.div
        className="text-center text-gray-800"
        initial={initialText}
        animate={animateText}
        transition={transitionText}
      >
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={initialTitle}
          animate={animateTitle}
          transition={transitionContainer}
        >
          Bienvenue !
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={initialParagraph}
          animate={animateParagraph}
          transition={transitionText}
        >
          Explore notre collection de produits
        </motion.p>
      </motion.div>
      <Link
        to="/about"
        className="inline-block mt-4 bg-white text-gray-700 px-6 py-3 rounded-full font-bold text-xl hover:bg-gray-700 hover:text-white transition-colors duration-300"
      >
        En savoir plus
      </Link>
    </motion.div>
  );
});

export default Homepage;
