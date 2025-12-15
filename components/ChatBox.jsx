"use client";

import { useState } from "react";
import { X, MessageCircle, Mic } from "lucide-react";

export default function ChatBox() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-24 right-6 z-50 bg-[#7a5c32] text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          <MessageCircle />
        </button>
      )}

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[340px] max-h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          
          {/* HEADER */}
          <div className="bg-[#7a5c32] text-white px-4 py-3 flex items-center justify-between">
            <div>
              <p className="font-semibold">CAASI</p>
              <p className="text-xs opacity-80">
                Welcome to Quantum Wellness!
              </p>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* CHAT BODY */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#faf7f2]">
            {/* BOT MESSAGE */}
            <div className="bg-white p-3 rounded-xl text-sm shadow">
              👋 Hi! How can we assist you today?
            </div>

            {/* QUICK ACTIONS */}
            <div className="flex flex-wrap gap-2">
              {[
                "Explore Services",
                "I have a Question",
                "Leave a Message",
                "Sign up for membership",
              ].map((item, i) => (
                <button
                  key={i}
                  className="border border-[#7a5c32] text-[#7a5c32] px-3 py-1 rounded-full text-xs hover:bg-[#7a5c32] hover:text-white transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* INPUT */}
          <div className="border-t px-3 py-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message"
              className="flex-1 text-sm outline-none"
            />
            <button className="text-[#7a5c32]">
              <Mic size={18} />
            </button>
          </div>

          {/* FOOTER */}
          <div className="text-[10px] text-center py-1 text-gray-400">
            powered by WellnessLiving
          </div>
        </div>
      )}
    </>
  );
}
