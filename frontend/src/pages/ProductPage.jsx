import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import ProductCategories from "../components/ProductCategories";
import { Navbar } from "../components/Navbar";

function ProductPage() {
  const [products, setProducts] = useState(FAKE_PRODUCTS);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (value) => setSearchValue(value);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <SearchBar onChangeSearchValue={onChangeSearchValue} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-cover p-8">
          {products
            .filter((product) =>
              product.name.toUpperCase().includes(searchValue.toUpperCase())
            )
            .map((product, index) => (
              <div key={`product : ${index}`}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <Link to={`/products/${product.id}`}>View Details</Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
