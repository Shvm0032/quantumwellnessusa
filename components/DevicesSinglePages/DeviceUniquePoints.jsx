"use client";

export default function DeviceUniquePoints({
  title,
  subtitle,     // new prop
  points = [],
}) {
  if (!points.length) return null;

  return (
    <section className="py-6 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Main Heading */}
        {title && (
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-gray-900">
            {title}
          </h2>
        )}

        {/* Sub Heading */}
        {subtitle && (
          <p className=" text-gray-700   mb-4">
            {subtitle}
          </p>
        )}

        {/* Points */}
        <ul className="space-y-1 list-disc list-inside text-gray-700 leading-relaxed">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

      </div>
    </section>
  );
}
