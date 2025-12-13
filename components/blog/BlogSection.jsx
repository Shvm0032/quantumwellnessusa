"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import BlogOverlay from "./BlogOverlay";

// TEMP PEXELS IMAGES
const pexelsImages = [
  "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg",
  "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
  "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
  "https://images.pexels.com/photos/2475875/pexels-photo-2475875.jpeg",
];

// Dummy Data
const allBlogs = [
  {
    id: 1,
    title: "Unlocking the Power of Personal Training for Lasting Wellness",
    excerpt: "Forget everything you know about wellness. The old way of hitting the gym without a plan is dead...",
    fullContent:
      "Here is the full blog content… Add all long paragraphs here for this blog #1…",
    date: "SEP 25 2025",
    author: "BryanQuantumWellnessUSA",
    category: "Training",
    image: pexelsImages[0],
  },
  {
    id: 2,
    title: "Nutrient Timing for Hypertrophy, Performance, and Longevity",
    excerpt: "Nutrient timing—also called peri-workout nutrition…",
    fullContent: "Full blog content for blog #2…",
    date: "AUG 26 2025",
    author: "BryanQuantumWellnessUSA",
    category: "Nutrition",
    image: pexelsImages[1],
  },
  {
    id: 3,
    title: "The Steps to Longevity: A Proven Roadmap to Living Better, Longer",
    excerpt: "At Quantum Wellness, we believe…",
    fullContent: "Full blog content for blog #3…",
    date: "AUG 11 2025",
    author: "BryanQuantumWellnessUSA",
    category: "Longevity",
    image: pexelsImages[2],
  },
  {
    id: 4,
    title: "Biohacking Sleep: The Ultimate Recovery Protocol",
    excerpt: "Elite performers are using science to sleep deeper…",
    fullContent: "Full blog content for blog #4…",
    date: "JUL 30 2025",
    author: "BryanQuantumWellnessUSA",
    category: "Recovery",
    image: pexelsImages[3],
  },
];

const categories = ["All Categories", "Training", "Nutrition", "Longevity", "Recovery"];

export default function BlogSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activePost, setActivePost] = useState(null);

  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section className="w-full min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-2xl font-semibold text-gray-800">
            Total Items ({filteredBlogs.length})
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

            {/* SEARCH */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-6 py-4 w-full sm:w-80 bg-white border border-gray-200 rounded-xl 
                focus:outline-none focus:border-[#6F512D] focus:ring-4 focus:ring-[#6F512D]/20 
                transition-all duration-300 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* CATEGORY */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-4 bg-white border border-gray-200 rounded-xl 
              focus:outline-none focus:border-[#6F512D] cursor-pointer text-gray-700"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* GRID */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No posts found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} onOpen={() => setActivePost(blog)} />
            ))}
          </div>
        )}
      </div>

      {/* OVERLAY OPEN */}
      {activePost && (
        <BlogOverlay post={activePost} onClose={() => setActivePost(null)} />
      )}
    </section>
  );
}

/* GOLD PREMIUM CARD */
function BlogCard({ blog, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >

      <div
        onClick={onOpen}
        className="cursor-pointer overflow-hidden rounded-3xl bg-white border border-gray-200 
        shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.25)]
        hover:border-[#6F512D] transition-all duration-500 flex flex-col min-h-[520px]"
      >

        {/* IMAGE */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={blog.image}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            alt="blog"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30"></div>
        </div>

        {/* CONTENT */}
        <div className="p-7 flex flex-col grow">

          {/* CATEGORY TAG */}
          <span className="inline-block bg-[#d4af37]/10 text-[#6F512D] text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
            {blog.category}
          </span>

          {/* TITLE */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3.2rem] group-hover:text-[#6F512D] transition-all">
            {blog.title}
          </h3>

          {/* META: DATE + AUTHOR */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">{blog.date}</p>
            <p className="text-sm text-[#6F512D] font-medium">
              By {blog.author}
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm line-clamp-3 grow leading-relaxed">
            {blog.excerpt}
          </p>

          {/* BUTTON */}
          <div className="mt-6">
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
              border border-[#6F512D] text-[#6F512D] font-medium tracking-wide
              hover:bg-[#6F512D] hover:text-white transition-all duration-300 
              hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
            >
              Read post{" "}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </motion.article>
  );
}
