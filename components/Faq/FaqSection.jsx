"use client";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Is the fat loss permanent?",
      answer:
        "Yes, the non-invasive process that we offer at Quantum Wellness will offer you lasting permanent inch loss, as long as you maintain a healthy lifestyle. If you gain weight after the process, the weight gain is usually more evenly spread.",
    },
    {
      question: "Is there any down time?",
      answer:
        "No, you can go about your day as you normally would immediately following the procedure. Increase water intake and avoid pro-inflammatory foods. We also offer diet programs to assist with lifestyle changes.",
    },
    {
      question: "How quickly can I see the results?",
      answer:
        "Most clients notice results after the first treatment. Depending on your lymphatic and immune system, full results can take up to 6 months, even after completing your package.",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="w-full px-4 py-12 bg-center bg-fixed bg-repeat"
      style={{ backgroundImage: "url('/faq/faq-bg.png')" }}
    >
      <div className="bg-white/60 p-6 mx-auto max-w-5xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-3 text-black">FAQs</h2>
        <div className="w-20 h-1 bg-[#8B4513] mx-auto mb-8"></div>

        <div className="space-y-4">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className={`
                  rounded-xl border border-[#8B4513] p-4 cursor-pointer
                  transition-all duration-300
                  ${
                    isOpen
                      ? "bg-[#8B4513] text-white"
                      : "bg-white text-black"
                  }
                `}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span
                    className={`text-2xl font-bold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-md">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
