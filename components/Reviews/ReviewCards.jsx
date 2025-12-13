"use client";

import { useState } from "react";
import Image from "next/image";

export default function ReviewCards() {
  const [filter, setFilter] = useState("latest");

  const testimonials = [
    {
      name: "Kenny Blackstun",
      img: "/testimonials/kenny.webp",
      rating: 5,
      review: "I promise, you will never be disappointed Working with Ryan Martin and Quantum Wellness. Ryan only wants her clients to reach whatever goals you have set for yourself. Ryan is passionate, informative, extremely intelligent. Timely, polite and professional. If you're willing to put in the work, hire Ryan for your guidance. You WILL succeed.",
      verified: true,
      date: "Oct 17, 2025",
    },
    {
      name: "Robin Bednarcik",
      img: "/testimonials/robin.webp",
      rating: 5,
      review: "Ryan is a wonderful wellness coach. She really cares about giving her clients the best options to help them achieve their wellness goals.",
      verified: true,
      date: "Jul 18, 2025",
    },
    {
      name: "Megan Blanchard",
      img: "/testimonials/megan.webp",
      rating: 5,
      review: "Absolutely LOVE Ryan! She is so friendly and knows her stuff. I was very comfortable with our plan. I am so excited to get my future started!! Beautiful office and great equipment. Thank you RYAN!!!",
      verified: true,
      date: "Jun 19, 2025",
    },
    {
      name: "Robin Ford",
      img: "/testimonials/ford.webp",
      rating: 5,
      review: "Wonderful personal wellness care.",
      verified: true,
      date: "Apr 07, 2025",
    },
    {
      name: "Cheryl Treesh",
      img: "/testimonials/chiryl.webp",
      rating: 5,
      review: "Ryan is amazing and very knowledgeable about health and fitness. I am still learning about all the machines and equipment at Quantum Wellness. I highly recommend this place.",
      verified: true,
      date: "Mar 13, 2025",
    },
  ];

  // FILTER LOGIC
  const sortedTestimonials = [...testimonials].sort((a, b) => {
    if (filter === "latest") return new Date(b.date) - new Date(a.date);
    if (filter === "oldest") return new Date(a.date) - new Date(b.date);
    if (filter === "highest") return b.rating - a.rating;
    if (filter === "lowest") return a.rating - b.rating;
    return 0;
  });

  return (
    <section className="w-full py-16 px-6 bg-[#F1F1F1]">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* -------- TOP HEADER -------- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          {/* LEFT DIV */}
          <div className="flex items-center gap-3">
            <div className="flex text-[#70512E] text-2xl">
              {"★★★★★"}
            </div>
            <p className="text-gray-700 text-lg font-medium">25 Reviews</p>
          </div>

          {/* RIGHT DIV */}
          <div>
            <button className="bg-[#8B4513] text-white hover:cursor-pointer px-5 py-2 rounded-lg hover:bg-[#6a360e] transition">
              Write a Review
            </button>

            {/* FILTER DROPDOWN */}
            <select
              className="mt-3 block border hover:cursor-pointer border-gray-300 rounded-lg px-3 py-2"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="highest">Highest Rated</option>
              <option value="lowest">Lowest Rated</option>
            </select>
          </div>
        </div>

        {/* -------- TESTIMONIAL CARDS -------- */}
        <div className="space-y-8">
          {sortedTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 max-w-6xl mx-auto"
            >
              <div className="flex items-center justify-between">
                
                {/* LEFT SIDE — IMAGE + NAME + VERIFIED */}
                <div className="flex items-center gap-4">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t.name}
                    </h3>

                    <p className="text-sm text-[#8B4513]">
                      {t.verified ? "Verified Client" : ""}
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE — DATE */}
                <p className="text-sm text-gray-500">
                  {t.date}
                </p>
              </div>

              {/* STAR RATING */}
              <div className="text-[#8B4513] text-xl mt-3">
                {"★".repeat(t.rating)}{" "}
                <span className="text-gray-300">
                  {"★".repeat(5 - t.rating)}
                </span>
              </div>

              {/* REVIEW TEXT */}
              <p className="text-gray-700 mt-3 leading-relaxed">
                {t.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
