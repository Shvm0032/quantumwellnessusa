"use client";

export default function DeviceFrequencyPrograms({
  title,
  sections = [],
}) {
  if (!sections.length) return null;

  return (
    <section className="py-6">
      <div className="max-w-4xl mx-auto px-6 text-gray-800">

        {/* Main Title */}
        {title && (
          <h2 className="text-3xl md:text-3xl font-semibold font-serif mb-3">
            {title}
          </h2>
        )}

        {sections.map((section, index) => (
          <div key={index} className="mb-4">

            {/* Section Heading */}
            {section.heading && (
              <h3 className="text-lg font-semibold mb-2">
                {section.heading}
              </h3>
            )}

            {/* Section Content */}
            <div className="space-y-1 leading-relaxed ">
              {section.content.map((item, i) =>
                item.type === "title" ? (
                  <p key={i} className="font-medium">
                    {item.text}
                  </p>
                ) : (
                  <p key={i}>{item.text}</p>
                )
              )}
            </div>
          
          </div>
        ))}

      </div>
    </section>
  );
}
