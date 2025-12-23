"use client";

export default function DeciceBoldSection({
  title,
  points = [],
  className
}) {
  if (!points.length) return null;

  return (
    <section className={`py-6 bg-transparent ${className}`}>
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        {title && (
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-2 text-gray-900">
            {title}
          </h2>
        )}

        {/* Numbered Points */}
        <div className="space-y-2 text-gray-700 leading-relaxed ">
          {points.map((point, index) => {
            const [boldText, ...restText] = point.split(":");

            return (
              <p key={index}>
                <span className="font-semibold text-gray-900">
                  {boldText} :
                </span>{" "}
                {restText.join(":")}
              </p>
            );
          })}
        </div>

      </div>
    </section>
  );
}
