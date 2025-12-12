"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="w-full px-4 max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d]">
            Wellness Insights & Knowledge
          </h2>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Explore expert articles, deep-dive wellness guides, and practical
            knowledge designed to help you improve your health, mind, and lifestyle.
            Updated regularly by our coaches, trainers, and wellness professionals.
          </p>
        </motion.div>

        {/* RIGHT SIDE — Rectangular Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-full md:w-[500px] h-[350px] md:h-[300px] rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src="/blog/about.jpg" // update image path as needed
              alt="Blog Intro Image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
