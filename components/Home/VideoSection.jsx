"use client";

export default function VideoBgSection() {
  return (
    <section
      className="w-full relative bg-contain bg-left"
      style={{ backgroundImage: "url('/home/bg-img-2.png')" }}
    >
      {/* Overlay with blur */}
      <div className="w-full h-full py-24 flex justify-center items-center bg-[#8B4513]/40 ">
        <div className="w-full max-w-4xl px-4">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dJstHkF-S_w"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
