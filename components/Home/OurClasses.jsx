"use client";

import { useState } from "react";

export default function OurClasses() {
  const [date, setDate] = useState("2025-12-08");
  const [view, setView] = useState("day");

  // Dummy class data
  const classes = [
    { time: "08:00 AM", title: "Yoga Basics", instructor: "Alice" },
    { time: "10:00 AM", title: "Pilates", instructor: "Bob" },
    { time: "12:00 PM", title: "HIIT Training", instructor: "Charlie" },
    { time: "02:00 PM", title: "Zumba", instructor: "Diana" },
    { time: "04:00 PM", title: "Meditation", instructor: "Eve" },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-serif text-center mb-8">Our Classes</h2>

        {/* Controls */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          {/* Date Picker */}
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 bg-brown-700 text-white font-semibold rounded"
              onClick={() => setDate(new Date().toISOString().split("T")[0])}
            >
              Today
            </button>
            <input
              type="date"
              className="border rounded px-3 py-2 text-gray-700"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* View Options */}
          <div className="flex items-center gap-2">
            <button
              className={`px-4 py-2 rounded font-semibold ${view === "day" ? "bg-brown-700 text-white" : "bg-gray-200 text-gray-500"}`}
              onClick={() => setView("day")}
            >
              Day
            </button>
            <button
              className={`px-4 py-2 rounded font-semibold ${view === "week" ? "bg-brown-700 text-white" : "bg-gray-200 text-gray-500"}`}
              onClick={() => setView("week")}
            >
              Week
            </button>
            <button
              className={`px-4 py-2 rounded font-semibold ${view === "month" ? "bg-brown-700 text-white" : "bg-gray-200 text-gray-500"}`}
              onClick={() => setView("month")}
            >
              Month
            </button>
            <button className="px-4 py-2 text-brown-700 font-semibold">List view</button>
            <button className="px-4 py-2 text-gray-500">Table view</button>
          </div>

          {/* Filter */}
          <button className="px-4 py-2 border rounded text-gray-700">Filter</button>
        </div>

        {/* Schedule */}
        <div className="bg-brown-700 text-white font-semibold px-4 py-2 rounded-t">
          {new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div className="border border-t-0 rounded-b px-4 py-6 text-gray-700">
          {classes.length === 0 ? (
            <p className="text-center">No scheduled sessions.</p>
          ) : (
            <ul className="space-y-4">
              {classes.map((cls, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded shadow-sm">
                  <span className="font-semibold">{cls.time}</span>
                  <span>{cls.title}</span>
                  <span className="italic text-gray-600">{cls.instructor}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Download PDF */}
        <div className="flex items-center gap-2 mt-6 text-brown-700 font-semibold cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Download a pdf version of our schedule</span>
        </div>
      </div>
    </section>
  );
}
