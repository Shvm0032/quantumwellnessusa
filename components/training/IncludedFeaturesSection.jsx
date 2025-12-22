"use client";

export default function IncludedFeaturesSection({
  eyebrow,
  headline,
  features = [],
}) {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {eyebrow && (
            <p className="uppercase tracking-[0.2em] text-sm text-[#8B4513] mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black">
            {headline}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] border border-gray-200 p-8 rounded-3xl 
                         shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                         hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]
                         transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-[#8B4513] text-2xl font-bold">✔</span>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
