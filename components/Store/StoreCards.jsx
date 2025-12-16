"use client";
import { useState } from "react";
import { storeProducts } from "../../app/data/storeProducts";
import { CiSearch } from "react-icons/ci";

const PRODUCTS_PER_PAGE = 10;

export default function Store() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 Categories extract from array
  const categories = [
    "all",
    ...new Set(storeProducts.map((item) => item.category)),
  ];
  // helper function
  const formatCategory = (slug) => {
    if (slug === "all") return "All";
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };
  // 🔹 Filter logic
  const filteredProducts = storeProducts.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "all" || item.category === activeCategory;

    return matchSearch && matchCategory;
  });

  // 🔹 Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <>
    <div className="bg-[#F1F1F1]">
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* 🔹 Top Heading + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Total Items (50)</h2>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border rounded-md px-4 py-2 pl-10"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <CiSearch />
            </span>
          </div>
        </div>

        {/* 🔹 Sub Heading */}
        <h3 className="mt-6 text-lg text-gray-600">online store category</h3>

        {/* 🔹 Categories */}
        <div className="flex flex-wrap gap-3 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-md border transition ${
                activeCategory === cat
                  ? "bg-[#70512E] text-white hover:cursor-pointer"
                  : "bg-white hover:text-white hover:bg-[#70512E] hover:cursor-pointer"
              }`}
            >
              {formatCategory(cat)}
            </button>
          ))}
        </div>

        {/* 🔹 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h4 className="text-xl font-semibold">{product.name}</h4>

                <p className="text-gray-500 mt-1">{product.price}</p>

                <div className="flex gap-3 mt-4">
                  <a
                    href={product.viewDetails}
                    className="flex-1 border rounded-lg text-[#7A5C32] py-2 text-center border-[#7A5C32] hover:bg-gray-100"
                  >
                    View Details
                  </a>

                  <button className="flex-1 bg-[#7A5C32] text-white rounded-lg py-2 hover:bg-black hover:cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full border ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
      </div>
    </>
  );
}
