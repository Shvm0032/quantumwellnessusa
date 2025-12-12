"use client";

export default function StoryHero() {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/our-story/hero.png')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          Story About Quantum Wellness 
        </h1>
      </div>
    </section>
  );
}
