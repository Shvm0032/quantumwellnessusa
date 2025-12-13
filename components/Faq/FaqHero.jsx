"use client";

export default function FaqHero() {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/faq/faq.jpg')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
          FREQUENTLY ASKED QUESTIONS 
        </h1>
      </div>
    </section>
  );
}
