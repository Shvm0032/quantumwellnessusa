"use client";

import { Star } from "lucide-react";

export default function WhyTrainWithRyanSection({
  eyebrow,
  headline,
  description,
  points = [],
}) {
  return (
    <section className="w-full bg-[#7A5C32] text-white py-28 px-4">
      <div className="max-w-7xl mx-auto">

        {/* TOP CONTENT */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {eyebrow && (
            <p className="text-sm uppercase tracking-widest text-[#E6C78A] mb-4 font-semibold">
              {eyebrow}
            </p>
          )}

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            {headline}
          </h2>

          {description && (
            <p className="text-white/85 text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* POINTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
           <div
  key={index}
  className="
    flex gap-4 p-6 rounded-2xl
    bg-white/10 backdrop-blur-md
    border border-white/20
    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    hover:bg-white/15 hover:scale-[1.02]
    transition-all duration-300
  "
>
  <Star
    size={22}
    className="text-[#F3D08F] mt-1 shrink-0"
  />
  <p className="text-white/90 leading-relaxed">
    {point}
  </p>
</div>

          ))}
        </div>

      </div>
    </section>
  );
}
