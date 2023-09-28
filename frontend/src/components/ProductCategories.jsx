import React from "react";
import { Link } from "react-router-dom";

function ProductCategories() {
  const categories = [];

  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-4 text-lg">
        {categories.map((category) => (
          <Link
            to={`/${category.toLowerCase()}`}
            key={category}
            className="font-semibold"
          >
            <div>{category}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCategories;
