"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/classes/classes.jpg')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
         Classes 
        </h1>
      </div>
    </section>
  );
}
