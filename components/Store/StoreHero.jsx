"use client";

export default function StoreHero() {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[80vh] bg-cover bg-top flex items-center justify-center"
      style={{ backgroundImage: "url('/contact.png')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
          Transform Your Life with Our Health and Wellness Workshops
        </h1>
      </div>
    </section>
  );
}
