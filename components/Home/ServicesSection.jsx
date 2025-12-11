"use client";

import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      imgSrc: "/icons/health.webp", 
      title: "Health Assessments",
      desc: "Using advanced diagnostics, we provide detailed insights into your health status, identifying areas for improvement and prevention.",
    },
    {
      imgSrc: "/icons/plan.webp",
      title: "Personalized Wellness Plans",
      desc: "Our experts craft customized plans tailored to your unique needs, focusing on nutrition, exercise, stress management, and sleep optimization.",
    },
    {
      imgSrc: "/icons/therapes.png",
      title: "Innovative Therapies",
      desc: "Experience state-of-the-art treatments, including regenerative medicine, IV therapy, cryotherapy, and more, designed to rejuvenate your body and mind.",
    },
    {
      imgSrc: "/icons/fitness.png",
      title: "Fitness and Movement",
      desc: "Engage in tailored fitness programs led by experienced trainers to enhance strength, flexibility, and overall well-being.",
    },
    {
      imgSrc: "/icons/mind.png",
      title: "Fitness & Mindfulness & Relaxation",
      desc: "Discover tranquility through our meditation, yoga, and mindfulness sessions, promoting mental clarity and emotional balance.",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-[#F1F1F1]">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-[#8B4513] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Services Cards */}
      <div className="flex flex-col gap-10 items-center">

        {/* First Row: 3 cards */}
        <div className="flex flex-wrap justify-center gap-10 w-full">
          {services.slice(0, 3).map((service, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl border-b-4 border-b-[#8B4513] shadow-md hover:shadow-lg transition-all duration-300 text-center w-full sm:w-[350px]"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#8B4513]/10 flex items-center justify-center shadow-sm overflow-hidden">
                  <Image
                    src={service.imgSrc}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Second Row: 2 cards center aligned */}
        <div className="flex flex-wrap justify-center gap-10 w-full">
          {services.slice(3).map((service, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl border-b-4 border-b-[#8B4513] shadow-md hover:shadow-lg transition-all duration-300 text-center w-full sm:w-[350px]"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#8B4513]/10 flex items-center justify-center shadow-sm overflow-hidden">
                  <Image
                    src={service.imgSrc}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
