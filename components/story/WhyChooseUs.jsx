"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

export default function Philosophy() {
  const cards = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#6B4F2B]" />,
      title: "Advanced Wellness Expertise",
      desc: "Benefit from science-backed assessments and guided wellness programs crafted by specialists.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#6B4F2B]" />,
      title: "Personalized Healing",
      desc: "Every plan we create is tailored to your unique body, goals, and long-term health needs.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#6B4F2B]" />,
      title: "Holistic & Modern Approach",
      desc: "We blend modern diagnostics with holistic wellness therapies for complete transformation.",
    },
  ];

  return (
    <section className="relative w-full md:pb-24 py-12   bg-[#FAF8F6] overflow-hidden ">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#2d2d2d]">
              Find Why Quantum Wellness is the Right Choice for You
            </h3>
             <p className="mt-6 text-lg md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Come to Quantum Wellness and begin your path to improved health and longevity. Explore the future of wellness today. 
          </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#e7dfd8]
                hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-5">{card.icon}</div>

                <h4 className="text-xl font-semibold text-[#2d2d2d] mb-3">
                  {card.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {card.desc}
                </p>

                {/* underline hover */}
                <div className="mt-4 w-0 h-0.5 bg-[#6B4F2B] transition-all group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
