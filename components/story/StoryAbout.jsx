"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StoryAbout() {
  return (
    <section className="w-full mt-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT - No heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Quantum Wellness was founded with a deep passion for healing,
            transformation, and empowering individuals to live fuller,
            healthier lives. What began as a personal journey soon turned
            into a mission to bring holistic wellness solutions to the world.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Through science-backed therapies, mindful practices, and modern
            wellness innovation, we aim to create a world where emotional,
            mental, and physical well-being align in harmony.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every step of our journey is guided by integrity, compassion,
            and a commitment to deliver real transformation.
          </p>
        </motion.div>

        {/* RIGHT SIDE - 2 IMAGES with better overlapping design */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[480px] md:h-[520px]"
        >
          {/* Image 1 - Bottom-left (back layer) */}
          <div className="absolute bottom-0 left-0 w-72 h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Silhouette yoga at sunrise"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Image 2 - Top-right (front layer, overlapping with rotate and higher z-index) */}
          <div className="absolute top-0 right-0 w-72 h-96 rounded-3xl overflow-hidden shadow-2xl z-20 rotate-6">
            <Image
              src="https://images.pexels.com/photos/3820303/pexels-photo-3820303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman in serene meditation pose in nature"
              fill
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}