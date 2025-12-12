"use client";

import Image from "next/image";

export default function Fitness() {
  return (
    <section
      className="w-full relative bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/story/bg2.jpg')" }} 
    >
      <div className="w-full h-full">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Div: Heading, Paragraph, Button */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl text-black font-semibold mb-6">
              Fitness and Movement
            </h1>
            <p className="mb-6 text-lg md:text-xl text-gray-600">
          Join fitness programs led by experienced trainers to enhance strength, flexibility, and overall well-being.
            </p>
        
          </div>

          {/* Right Div: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-xl overflow-hidden ">
              <Image
                src="/story/fitness.webp"
                alt="Illustration"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
