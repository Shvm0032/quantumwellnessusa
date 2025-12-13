"use client";

import { useParams } from "next/navigation"; 
import { goalsData } from "../../data/goalsData";
import { ArrowRight } from "lucide-react";
import { FaAtom } from "react-icons/fa";

export default function SingleGoalPage() {
  const params = useParams(); 
  const { slug } = params;

  const goal = goalsData.find((item) => item.slug === slug);

  if (!goal) {
    return <div className="p-10 text-center text-xl">Goal Not Found</div>;
  }

  return (
    <section className="w-full">
      {/* TOP BANNER */}
      <div
        className="w-full h-[70vh] bg-cover bg-center flex items-center pt-10 justify-center relative"
        style={{ backgroundImage: `url(${goal.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-2xl md:text-4xl font-semibold text-center px-4">
          {goal.title}
        </h1>
      </div>

      {/* DESCRIPTION */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed">{goal.description}</p>
      </div>

      {/* GOAL DETAILS */}
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {goal.goalDetails.map((item, i) => (
          <div key={i} className="border-l-4 border-[#70512E] pl-4">
            <div className="flex items-center gap-2">
              <FaAtom className="text-[#70512E]" size={20} />
              <h3 className="text-2xl font-semibold text-gray-900">{item.heading}</h3>
            </div>
            <p className="text-gray-600 mt-2">{item.content}</p>
          </div>
        ))}
      </div>

      {/* EXTRA SECTION */}
      <div className="max-w-5xl mx-auto px-4 py-5 mt-5 ">
        <h2 className="md:text-3xl font-semibold text-gray-800">{goal.extra1}</h2>
        <p className="text-gray-700 mt-3">{goal.description1}</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-5 mb-10">
        <h2 className="md:text-3xl font-semibold text-gray-800">{goal.extra2}</h2>
        <p className="text-gray-700 mt-3">{goal.description2}</p>
      </div>
    </section>
  );
}
