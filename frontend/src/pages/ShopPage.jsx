import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import articles from "../data/articles.js";
import SearchBar from "../components/SearchBar";

// Utilisez cette partie seulement si Parallax est déjà importé dans votre projet
// import { Parallax } from "react-scroll-parallax";

function ArticleCard({ article }) {
  return (
    <div key={article.id}>
      <Link to={`/products/${article.id}`}>
        <motion.div
          className="rounded overflow-hidden shadow-lg bg-white"
          whileHover={{ scale: 1.05 }}
          style={{ margin: "20px", maxWidth: "300px" }}
        >
          <img
            className="w-full h-auto object-cover"
            src={article.image}
            alt={article.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">{article.name}</div>
            <p className="text-gray-800 text-lg">{article.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 mr-2 mb-2">
              ${article.price}
            </span>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};

function ShopPage() {
  const [searchValue, setSearchValue] = useState("");

  const handleFilter = (filteredItems) => {
    setSearchValue(filteredItems);
  };

  return (
    <div>
      <div className="flex justify-center mt-6">
        <SearchBar items={articles} onFilter={handleFilter} />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-cover p-8 overflow-auto"
        style={{ gridAutoRows: "auto", justifyContent: "center" }}
      >
        {articles
          .filter((article) =>
            article.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
      </div>
    </div>
  );
}

export default ShopPage;
