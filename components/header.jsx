"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // initial check (in case user reloads mid-scroll)
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all md:px-16 duration-300 pt-[env(safe-area-inset-top)] ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center py-8 px-4 md:py-3 md:px-20 relative">
        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white z-20"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* LEFT MENU (Desktop Only) */}
        <div className="hidden text-sm md:flex gap-6 text-white">
          <div className="relative group">
            <button className="flex text-sm items-center gap-1">
              ABOUT US <ChevronDown size={16} />
            </button>
            <div className="absolute text-sm hidden group-hover:block bg-black p-3 rounded-md w-60">
              <Link href="#" className="block py-1 hover:text-[#6F512D] px-2 font-semibold hover:bg-gray-300">
                Our Story
              </Link>
              <Link href="#" className="block py-1 hover:text-[#6F512D] px-2 font-semibold hover:bg-gray-300">
                Our Team
              </Link>
              <Link href="#" className="block py-1 hover:text-[#6F512D] px-2 font-semibold hover:bg-gray-300">
                Quantum Wellness Blog
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="flex text-sm items-center gap-1">
              GOALS <ChevronDown size={16} />
            </button>
            <div className="absolute text-sm hidden group-hover:block bg-black p-3 rounded-md w-90">
              <Link href="#" className="block py-1 hover:text-[#6F512D] px-2 font-semibold hover:bg-gray-300">
                Body Composition & Aesthetic Enhancement
              </Link>
              <Link href="#" className="block py-1 hover:text-[#6F512D] px-2 font-semibold hover:bg-gray-300">
                Performance & Strength Optimization
              </Link>
              <Link href="#" className="block py-1 hover:text-[#6F512D] px-2 font-semibold hover:bg-gray-300">
                Pain Management & Recovery
              </Link>
              <Link href="#" className="block py-1 hover:text-[#6F512D] px-2 font-semibold hover:bg-gray-300">
                Holistic Wellness & Stress Reduction
              </Link>
              <Link href="#" className="block py-1 hover:text-[#6F512D] px-2 font-semibold hover:bg-gray-300">
                Longevity & Biohacking for Anti-Aging
              </Link>
              <Link href="#" className="block py-1 hover:text-[#6F512D] px-2 font-semibold hover:bg-gray-300">
                Sexual Health, Harmonal Balance & Personalised Optimization
              </Link>
            </div>
          </div>
          <Link href="/reviews" className="text-sm">REVIEWS</Link>
        </div>

        {/* LOGO (Always Center) */}
        <div className="flex justify-center w-full md:w-auto absolute md:static left-0 right-0 mx-auto pointer-events-none md:pointer-events-auto pt-[env(safe-area-inset-top)]">
          <Link href="/">
            <Image
              src="/quantum-logo.webp"
              width={120}
              height={50}
              alt="Logo"
              className="pointer-events-auto"
            />
          </Link>
        </div>

        {/* RIGHT SIDE (Cart + Login) */}
        <div className="flex gap-5 items-center text-white z-20">
          <Link href="/devices" className="text-sm hidden sm:block">DEVICES/SERVICES</Link>
          <ShoppingCart className="cursor-pointer" size={22} />
          <button className="border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
            Login
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Always in DOM, toggled via class) */}
      <div className={`${mobileOpen ? "block" : "hidden"} md:hidden bg-black text-white px-6 py-4 space-y-3`}>
        <Link href="#" className="block text-lg">FAQ</Link>
        <Link href="#" className="block text-lg">Contact</Link>

        {/* DROPDOWN 1 */}
        <div>
          <button
            className="flex justify-between w-full text-lg"
            onClick={() => setDropdown1(!dropdown1)}
          >
            ABOUT US <ChevronDown />
          </button>
          <div className={`${dropdown1 ? "block" : "hidden"} ml-4 mt-2 space-y-1`}>
            <Link href="#" className="block">Our Story</Link>
            <Link href="#" className="block">Our Team</Link>
            <Link href="#" className="block">Quantum Wellness Blog</Link>
          </div>
        </div>

        {/* DROPDOWN 2 */}
        <div>
          <button
            className="flex justify-between w-full text-lg"
            onClick={() => setDropdown2(!dropdown2)}
          >
            GOALS <ChevronDown />
          </button>
          <div className={`${dropdown2 ? "block" : "hidden"} ml-4 mt-2 space-y-1`}>
            <Link href="#" className="block">Body Composition</Link>
            <Link href="#" className="block">Performance</Link>
            <Link href="#" className="block">Pain Management</Link>
            <Link href="#" className="block">Holistic Wellness</Link>
            <Link href="#" className="block">Longevity</Link>
            <Link href="#" className="block">Sexual Health</Link>
          </div>
        </div>

        <Link href="/reviews" className="block text-lg">REVIEWS</Link>
        <Link href="/devices" className="block text-lg">DEVICES/SERVICES</Link>
      </div>
    </header>
  );
}
