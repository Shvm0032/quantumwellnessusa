"use client";

export default function DeviceDescriptionOnly({
  description,
  className = "",
}) {
  if (!description) return null;

  return (
    <section className={`py-6  bg-transparent ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-gray-900 font-semibold leading-relaxed space-y-2">
        {Array.isArray(description)
          ? description.map((text, index) => (
              <p key={index}>{text}</p>
            ))
          : <p>{description}</p>
        }
      </div>
    </section>
  );
}
