"use client";

import Link from "next/link";

export default function DevicesCards() {
  const cards = [
    {
      title: "Brain Health Device",
      img: "/devices/brain-device.jpg",
      link: "/devices/brain-health-device",
    },
    {
      title: "Wellness Tracker",
      img: "/devices/wellness-tracker.jpg",
      link: "/devices/wellness-tracker",
    },
    {
      title: "Relaxation Device",
      img: "/devices/relax-device.jpg",
      link: "/devices/body-relaxation-device",
    },
  ];

  return (
    <section className="w-full py-16 px-6">
      {/* SECTION HEADING */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Our Devices
      </h2>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="w-full h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
