"use client";

import Link from "next/link";

export default function ServicesCards() {
  const servicecards = [
    {
      title: "Biofeedback",
      img: "/devices/services-img/services-img-1.jpg",
      link: "/devices/brain-health-device",
    },
    {
      title: "Neurofeedback",
      img: "/devices/services-img/services-img-2.jpg",
      link: "/devices/wellness-tracker",
    },
    {
      title: "Neurostimulation",
      img: "/devices/services-img/services-img-3.jpg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "Brain Mapping",
      img: "/devices/services-img/services-img-4.jpg",
      link: "/devices/body-relaxation-device",
    },
  ];

  return (
    <section className="w-full bg-[#F1F1F1] py-16 px-6">
      {/* SECTION HEADING */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-3">
        Our Services
      </h2>
      <div className="w-20 h-1 bg-[#8B4513] mx-auto mb-8"></div>

      {/* CARDS */}
     <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  {servicecards.map((item, index) => (
    <Link
      href={item.link}
      key={index}
      className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 group"
    >
      <div className="w-full h-[250px] overflow-hidden relative">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />

        <div
          className="
            absolute w-full left-0
            bottom-[-60px]
            group-hover:bottom-0
            transition-all duration-500 ease-out
          "
        >
          <div className="w-full bg-[#70512E] text-center py-3">
            <h2 className="text-gray-100 font-semibold text-sm uppercase tracking-wide">
              {item.title}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  ))}

  {/* PLACEHOLDER TO CENTER LAST CARD (visible on md only) */}
  <div className="hidden md:block"></div>
</div>

    </section>
  );
}
