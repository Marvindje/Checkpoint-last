import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

function SearchBar({ onChangeSearchValue }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="p-6">
      <div className="flex items-center border border-gray-300 rounded overflow-hidden">
        <input
          type="text"
          placeholder="Search products"
          className="w-full p-2"
          onChange={(e) => onChangeSearchValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="p-2">
          <motion.div animate={{ rotate: isFocused ? 90 : 0 }}>
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
