"use client";

export default function DeviceSection({
  title,
  description,
   className = "",
}) {
  return (
    <section className={`py-6 bg-transparent ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold font-serif mb-2 text-gray-900">
            {title}
          </h2>
        )}

        <div className="space-y-2 text-gray-700 leading-relaxed ">
          {Array.isArray(description)
            ? description.map((text, index) => (
                <p key={index}>{text}</p>
              ))
            : <p>{description}</p>
          }
        </div>
      </div>
    </section>
  );
}
