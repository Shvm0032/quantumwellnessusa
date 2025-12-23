"use client"

export default function DevicePointsSection({
  title,
  points = [],
}) {
  if (!points.length) return null;

  return (
    <section className="py-6 bg-transparent ">
      <div className="max-w-4xl mx-auto px-6">
        {title && (
          <h2 className="text-2xl md:text-3xl font-serif mb-2 text-gray-900">
            {title}
          </h2>
        )}

        <ul className="space-y-1 list-disc list-inside text-gray-700 leading-relaxed">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
