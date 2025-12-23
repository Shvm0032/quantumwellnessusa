"use client";

export default function TwoColumnPointsSection({
  title,
  leftPoints = [],
  rightPoints = [],
  className = "",
}) {
  return (
    <section className={`py-6 bg-transparent ${className}`}>
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        {title && (
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-gray-900">
            {title}
          </h2>
        )}

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">

          <ul className="space-y-1 list-disc list-inside leading-relaxed">
            {leftPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <ul className="space-y-1 list-disc list-inside leading-relaxed">
            {rightPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
