"use client";

export default function DeciceBoldPoints({
  title,
  points = [],
}) {
  if (!points.length) return null;

  return (
    <section className="py-6 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        {title && (
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-2 text-gray-900">
            {title}
          </h2>
        )}

        {/* Numbered Points */}
        <ul className="space-y-1 list-disc list-inside text-gray-800 leading-relaxed">
          {points.map((point, index) => {
            const [boldText, ...restText] = point.split(":");

            return (
              <li key={index}>
                <span className="font-semibold text-gray-900">
                  {boldText} :
                </span>{" "}
                {restText.join(":")}
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}
