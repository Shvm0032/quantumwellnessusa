"use client"

import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import Contact from "../components/Home/ContactSection";
import ServicesSection from "../components/Home/ServicesSection";
import OurStory from "../components/Home/OurStory";
import VideoSection from "../components/Home/VideoSection";
import OurClasses from "../components/Home/OurClasses";
import Testimonials from "../components/Home/Testimonials";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OurStory/>
      <VideoSection/>
      <OurClasses/>
      <Testimonials />
      <Contact />
    </>
  )
}

