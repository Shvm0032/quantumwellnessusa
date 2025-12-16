"use client";

import React from "react";
import { Download } from "lucide-react";

const PDF = () => {
  return (
    <section className="w-full px-4 py-14">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">

        {/* Heading */}
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          Download Full Schedule
        </h3>

        <p className="text-gray-600 text-sm md:text-base max-w-md">
          Get a complete overview of all sessions and timings in one PDF.
        </p>

        {/* Download Button */}
        <a
          href="/schedule/schedule.pdf"   // future pdf
          download
          className="inline-flex items-center gap-2 rounded-full
                     bg-[#7A5C32] text-white px-7 py-3
                     text-sm md:text-base font-semibold
                     hover:opacity-90 transition shadow-lg"
        >
          <Download size={18} />
          Download Schedule (PDF)
        </a>

      </div>
    </section>
  );
};

export default PDF;
