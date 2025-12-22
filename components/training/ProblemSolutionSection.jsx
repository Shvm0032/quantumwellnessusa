"use client";

export default function ProblemSolutionSection({
  eyebrow,
  headline,
  problems = [],
  solutionTitle,
  solutionText,
}) {
  return (
    <section className="w-full py-24 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {eyebrow && (
            <p className="uppercase tracking-[0.2em] text-sm text-[#8B4513] mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
            {headline}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* Problems */}
          <div className="bg-white border border-gray-200 p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <h3 className="text-xl font-semibold mb-8 text-black uppercase tracking-wide">
              Most people struggle because
            </h3>

            <ul className="space-y-5">
              {problems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-gray-700 text-lg"
                >
                  <span className="text-[#8B4513] text-xl font-bold leading-none mt-1">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="relative bg-[#7A5C32] text-white p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              {solutionTitle}
            </h3>

            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              {solutionText}
            </p>

            {/* Accent line */}
            <div className="absolute top-0 right-0 w-24 h-1 rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
