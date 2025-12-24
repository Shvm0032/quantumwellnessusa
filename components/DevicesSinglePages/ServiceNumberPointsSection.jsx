"use client";

export default function ServiceNumberPointsSection({
  title,
  description,
  points = [],
  className=""
}) {
  return (
    <section className={`py-6 ${className}`}>
      <div className=" mx-auto px-6 max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl font-semibold font-serif mb-4">{title}</h2>

        {/* Description */}
        {description && (
          <p className="mb-6 text-base leading-7 text-gray-700">{description}</p>
        )}

        {/* Points */}
        <ol className="list-decimal pl-5 text-base space-y-2 text-gray-700">
          {points.map((point, index) => {
            const [boldText, ...rest] = point.split(":");
            return (
              <li key={index}>
                <strong className="text-gray-900">{boldText}:</strong>
                {rest.length > 0 && ` ${rest.join(":").trim()}`}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
