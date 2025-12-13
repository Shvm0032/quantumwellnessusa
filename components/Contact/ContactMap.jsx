"use client";

import { MapPin, Phone } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl text-center font-bold mb-6">Our Location</h2>

        {/* Google Map */}
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg relative">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1741.6072021097366!2d-82.125147!3d29.187814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e62caadb80fd29%3A0xe865ed905bc59ddc!2sMillennium%20Bank%20Ocala%20Branch!5e0!3m2!1sen!2sus!4v1765532965556!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        
      </div>
    </section>
  );
}
