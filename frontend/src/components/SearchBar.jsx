import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

function SearchBar({ items, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );

    onFilter(filteredItems);
  };

  return (
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
      <div className="relative">
        <FaSearch className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
        <motion.input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-3 py-2 rounded-md text-sm font-medium"
          value={searchTerm}
          onChange={handleSearch}
          whileFocus={{ scale: 1.1 }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
