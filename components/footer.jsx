"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-[#70512E] text-white pt-14 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID */}
        <motion.div
          variants={footerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* 1️⃣ LOGO + SOCIALS */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 flex flex-col md:items-center items-start"
          >
            <Link href="/">
              <Image
                src="/quantum-logo.webp"
                alt="Quantum Wellness Logo"
                width={200}
                height={60}
                className="object-contain cursor-pointer"
              />
            </Link>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 pt-4 items-center md:justify-center justify-start">
              <a
                href="https://www.facebook.com/people/Quantum-Wellness/100069946674457/"
                className="hover:text-white transition"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/quantum_wellness_usa/"
                className="hover:text-white transition"
              >
                <AiFillInstagram size={22} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCn-GJSUTHzdSqg9K7oLWkDQ"
                className="hover:text-white transition"
              >
                <FaYoutube size={22} />
              </a>
            </div>
          </motion.div>

          {/* 2️⃣ SERVICES */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold">Service Booking</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Appointments
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Classes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Devices/Services
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 3️⃣ USEFUL LINKS */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold">Useful Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition">
                  Store
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Terms of Use
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 4️⃣ CONTACT + ADDRESS */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold">Contact</h4>

            <p className="text-white/70 flex items-center gap-3">
              <MdEmail size={20} className="text-white" />
              <a
                href="mailto:Ryan@quantumwellnessusa.com"
                className="hover:text-white transition"
              >
                Ryan@quantumwellnessusa.com
              </a>
            </p>

            <p className="text-white/70 flex items-center gap-3">
              <FaPhoneAlt size={18} className="text-white" />
              <a
                href="tel:+13524258431"
                className="hover:text-white transition"
              >
                +13524258431
              </a>
            </p>

            <p className="text-white/70 flex items-start gap-3">
              <FaMapMarkerAlt size={20} className="text-white mt-1" />
              <span>
                1107 E Silver Springs Blvd,
                <br />
                Unit 5 Ocala, FL, USA 34470
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* APP DOWNLOAD SECTION */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 flex flex-col items-center space-y-4"
        >
          <h4 className="font-serif font-bold text-md">Download Our App</h4>

          <div className="flex items-center justify-center gap-4">
            {/* App Store */}
            <a
              href="https://apps.apple.com/us/app/quantum-wellness/id6504941348"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/AppStore-logo.svg"
                alt="Download on App Store"
                width={100}
                height={50}
                className="cursor-pointer hover:opacity-80 transition"
              />
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.wellnessliving.achieve"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/GooglePlay-Logo.svg"
                alt="Get it on Google Play"
                width={100}
                height={50}
                className="cursor-pointer hover:opacity-80 transition"
              />
            </a>
          </div>
        </motion.div>

        {/* COPYRIGHT */}
        <motion.div
          variants={itemVariants}
          className="pt-5 border-t border-white/10 text-center text-gray-100"
        >
          <p>&copy; {currentYear} Quantum Wellness. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
