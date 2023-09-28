import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles";

function ProductDetailsPage() {
  const [currentProduct, setCurrentProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const findProduct = articles.find((product) => product.id === id);
      setCurrentProduct(findProduct);
    }
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">
        Détails du produit
      </h2>
      {currentProduct && (
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">
            {currentProduct.name}
          </h3>
          <div className="max-w-xs w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-4">
            <img
              className="w-full h-auto transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={currentProduct.image}
              alt={currentProduct.name}
            />
          </div>
          <p className="text-lg text-gray-600 mb-2">
            Catégorie: {currentProduct.type}
          </p>
          <p className="text-xl font-bold mb-2 text-gray-900">
            Prix: ${currentProduct.price}
          </p>
          <p className="text-base text-gray-700 mb-2">
            Description: {currentProduct.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
