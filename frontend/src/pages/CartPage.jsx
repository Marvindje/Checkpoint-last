import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import ProductCategories from "../components/ProductCategories";

function CartPage() {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <SearchBar />
      <ProductCategories />
      <p>You have 0 items in your cart.</p>
    </div>
  );
}

export default CartPage;
