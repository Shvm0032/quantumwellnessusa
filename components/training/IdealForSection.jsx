"use client";

import { CheckCircle } from "lucide-react";

export default function IdealForSection({
  eyebrow,
  headline,
  items = [],
}) {
  return (
    <section className="w-full bg-[#FAF8F6] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {eyebrow && (
            <p className="text-sm uppercase tracking-widest text-[#8B4513] mb-3 font-semibold">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {headline}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 border border-[#8B4513]/30 rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <CheckCircle className="text-[#8B4513] mt-1 shrink-0" size={22} />
              <p className="text-gray-800 text-base leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
