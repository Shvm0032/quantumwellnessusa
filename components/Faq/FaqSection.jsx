"use client";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Is the fat loss permanent?",
      answer:
        "Yes, the non-invasive process that we offer at Quantum Wellness will offer you lasting permeant inch loss.   As long as you maintain a healthy lifestyle.  If you gain weight after the process,  usually the weight gain is more evenly spread. ",
    },
    {
      question: "Is there any down time?",
      answer:
        "No, you can go about your day as you normally would immediately following the procedure.  You will want to make sure that you increase your water intake, and avoid pro-inflammatory foods.  Additionally, you will want to follow a cleaner diet.  We offer diet programs and can assist you in this lifestyle change ",
    },
    {
      question: "How quickly can I see the results?",
      answer:
        "Typically, you will be able to see and feel a difference after your first treatment.  Depending on your lymphatic system, and your immune system results can take up to 6 months to fully see the final change.  This means that you will see changes even after you have finished your package. ",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="w-full mx-auto px-4 py-12 bg-repeat bg-center bg-fixed bg-size-[auto_100%] rounded-2xl"
      style={{
        backgroundImage: "url('/faq/faq-bg.png')",
      }}
    >
      {/* Optional dark overlay (agar chahiye) */}
      <div className="bg-white/50 p-6 mx-auto max-w-5xl  rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-3 text-black">FAQs</h2>
        <div className="w-20 h-1 bg-[#8B4513] mx-auto mb-8"></div>

        <div className="space-y-4">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`
                  rounded-xl p-4 shadow-sm border 
                  transition-all duration-300 hover:cursor-pointer
                  ${
                    isOpen
                      ? "bg-[#8B4513] text-white border-[#8B4513]"
                      : "bg-white text-black border-[#8B4513] hover:bg-[#8B4513] hover:text-white hover:border-[#8B4513]"
                  }
                `}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center text-left hover:cursor-pointer"
                >
                  <h3 className="text-lg font-semibold transition-colors duration-300">
                    {item.question}
                  </h3>

                  <span className="text-2xl font-bold transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Smooth Answer Animation */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-md">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
