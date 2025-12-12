"use client";

export default function Video() {
  return (
    <section className="w-full relative min-h-auto bg-[#FAF8F6] overflow-hidden">
      
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23f0e6d2' stroke-width='0.8'%3E%3Ccircle cx='30' cy='30' r='2' opacity='0.6'/%3E%3Ccircle cx='10' cy='15' r='1.5' opacity='0.5'/%3E%3Ccircle cx='45' cy='40' r='2' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"), linear-gradient(45deg, %23FAF8F6 0%, %23f5f0e8 100%)`,
          backgroundBlendMode: "soft-light",
        }}
      />

      {/* Soft golden overlay for extra richness */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-[#FAF8F6] to-transparent opacity-70" />

      {/* Video Content */}
      <div className="relative z-10 w-full h-full md:py-24 pb-12 flex justify-center items-center px-6">
        <div className="w-full max-w-6xl">
          <div className="relative w-full h-[30vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/70">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dJstHkF-S_w"
              title="Luxury Project"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          {/* <p className="text-center mt-8 text-gray-700 font-medium text-lg">Experience Luxury Living</p> */}
        </div>
      </div>
    </section>
  );
}