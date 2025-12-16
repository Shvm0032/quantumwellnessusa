"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function ScheduleCalendar() {

  // ❌ Abhi koi events nahi
  const events = [];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-20">
      
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Schedule Calendar
        </h2>
        <p className="text-gray-600 mt-2">
          View sessions by day, week, or month.
        </p>
      </div>

      {/* Calendar Wrapper */}
      <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border">

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          
          initialView="dayGridMonth" // default = Month
          
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
          }}

          events={events}

          height="auto"

          noEventsContent={() => (
            <div className="text-center text-gray-500 py-10">
              No scheduled sessions.
            </div>
          )}
        />

      </div>
    </section>
  );
}
