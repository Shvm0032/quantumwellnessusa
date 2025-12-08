"use client";

export default function VideoBgSection() {
  return (
    <section
      className="w-full relative bg-cover bg-center"
      style={{ backgroundImage: "url('/home/bg-video.jpg')" }}
    >
      {/* Overlay with blur */}
      <div className="w-full h-full py-24 flex justify-center items-center bg-white/20 backdrop-blur-sm">
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
