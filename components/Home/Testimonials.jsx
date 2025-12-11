"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "John Carter",
      review:
        "Amazing experience! The service quality much better than expected.",
      rating: 5,
    },
    {
      name: "Ava Smith",
      review: "Outstanding support and smooth process. Highly recommended!",
      rating: 4,
    },
    {
      name: "Michael Lee",
      review: "Very professional team. Loved the overall experience.",
      rating: 5,
    },
    {
      name: "Sophia Johnson",
      review: "Excellent quality and friendly staff. Will come again!",
      rating: 4,
    },
    {
      name: "Emma Wilson",
      review: "Great service and amazing results!",
      rating: 5,
    },
    {
      name: "David Brown",
      review: "Very satisfied with their work.",
      rating: 4,
    },
  ];

  const swiperRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Navigation buttons के लिए click handlers
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="py-16 w-full bg-[#FAF8F6] flex justify-center">
      <div className="max-w-6xl w-full relative px-4 md:px-10 lg:px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-[#8B4513] mx-auto mt-3"></div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Custom Navigation Arrows */}
          {/* Custom Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-6 hover:cursor-pointer md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-all active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-6 hover:cursor-pointer md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-all active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slider */}
          {isMounted && (
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={600}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="pb-2!"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="p-6 rounded-xl shadow-md border flex flex-col h-full hover:shadow-lg transition-shadow duration-300 min-h-[220px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/home/testi-1.png')" }}
                  >
                    {/* Rating */}
                    <div className="flex space-x-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${
                            i < item.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-700 text-md mb-2 grow">
                      "{item.review}"
                    </p>

                    {/* Name */}
                    <h4 className="font-semibold text-xl text-gray-800">
                      — {item.name}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
