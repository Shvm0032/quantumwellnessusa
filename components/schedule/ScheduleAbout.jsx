"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ScheduleAbout() {
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

          <p className="text-gray-700 text-md md:text-lg leading-relaxed">
           At Quantum Wellness, we offer flexible scheduling to accommodate your busy lifestyle. Our appointment-based system ensures personalized attention and a seamless experience for every client. Whether you’re looking to book a single session or establish a consistent routine, our team is here to help you create a schedule that aligns with your wellness goals. Start prioritizing your health today by choosing a time that works best for you! 
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
              src="/schedule/about.jpg" // update image path as needed
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
