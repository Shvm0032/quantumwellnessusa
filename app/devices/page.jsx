"use client"

import DevicesHero from "@/components/Devices/DevicesHero";
import DevicesSection from "@/components/Devices/DevicesSection";
import DevicesCards from "@/components/Devices/DevicesCards";
import ServicesCards from "@/components/Devices/ServicesCards";
import ContactDevices from "../../components/Devices/ContactDevices";




export default function Devices() {
  return (
    <>
      <DevicesHero />
      <DevicesSection/>
      <DevicesCards/>
      <ServicesCards/>
      <ContactDevices/>
    </>
  )
}

