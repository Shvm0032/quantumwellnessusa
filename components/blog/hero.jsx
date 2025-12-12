"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/blog/bg.jpg')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          Dive into Quantum Wellness Blogs for <br></br> Expert Insights
        </h1>
      </div>
    </section>
  );
}
