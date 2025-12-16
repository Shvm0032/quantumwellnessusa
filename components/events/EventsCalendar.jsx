"use client";

export default function EventsCalendar() {
  return (
    <section className="w-full bg-[#FAF8F6] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FILTER BAR */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-14">

          {/* DATE FILTERS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">From</span>
              <input
                type="date"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#70512E]"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">To</span>
              <input
                type="date"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#70512E]"
              />
            </div>
          </div>

          {/* SORT OPTIONS */}
          <div className="flex flex-wrap gap-4">
            <select className="border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70512E]">
              <option>Available only</option>
              <option>All events</option>
            </select>

            <select className="border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70512E]">
              <option>Start date</option>
              <option>End date</option>
            </select>

            <select className="border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70512E]">
              <option>New to old</option>
              <option>Old to new</option>
            </select>
          </div>
        </div>

        {/* EMPTY STATE */}
        <div className="w-full flex flex-col items-center justify-center text-center py-24 bg-white rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            No Events Available
          </h3>
          <p className="text-gray-600 max-w-md">
            There are currently no upcoming events scheduled.  
            Please check back soon for new wellness experiences and gatherings.
          </p>
        </div>

      </div>
    </section>
  );
}
