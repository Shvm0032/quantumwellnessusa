"use client";

import Link from "next/link";

export default function DevicesCards() {
  const cards = [
    {
      title: "ballancer-pro",
      img: "/devices/devices-img/device-img-1.jpeg",
      link: "/devices/brain-health-device",
    },
    {
      title: "braintap",
      img: "/devices/devices-img/device-img-2.jpeg",
      link: "/devices/wellness-tracker",
    },
    {
      title: "bio charger",
      img: "/devices/devices-img/device-img-3.jpeg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "cryowave",
      img: "/devices/devices-img/device-img-4.jpeg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "flexforce",
      img: "/devices/devices-img/device-img-5.jpeg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "infrared sauna",
      img: "/devices/devices-img/device-img-6.jpeg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "Nanovi",
      img: "/devices/devices-img/device-img-7.jpeg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "red light therapy",
      img: "/devices/devices-img/device-img-8.jpeg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "PEMF",
      img: "/devices/devices-img/device-img-9.jpeg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "PNOE",
      img: "/devices/devices-img/device-img-10.png",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "salt booth",
      img: "/devices/devices-img/device-img-11.jpeg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "shapescale",
      img: "/devices/devices-img/device-img-12.jpeg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "xtone",
      img: "/devices/devices-img/device-img-13.jpeg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "Oxefit XP1",
      img: "/devices/devices-img/device-img-14.webp",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "Oxefit XS1",
      img: "/devices/devices-img/device-img-15.jpg",
      link: "/devices/body-relaxation-device",
    },
    {
      title: "Neubie/Neuit",
      img: "/devices/devices-img/device-img-16.jpg",
      link: "/devices/body-relaxation-device",
    },
  ];

  return (
    <section className="w-full bg-[#F1F1F1] py-16 px-6">
      {/* SECTION HEADING */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-3">
        Our Devices
      </h2>
      <div className="w-20 h-1 bg-[#8B4513] mx-auto mb-8"></div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 group"
          >
            {/* IMAGE FIXED HEIGHT */}
            <div className="w-full h-[250px] overflow-hidden relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />

              {/* FULL-WIDTH TITLE BAR (Slide Up on Hover) */}
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
      </div>
    </section>
  );
}
