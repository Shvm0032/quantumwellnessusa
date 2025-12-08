"use client"

import { Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react" // for arrow icons

export default function Testimonials() {
  const testimonials = [
    { name: "Sarah Mitchell", role: "Marketing Executive", content: "This program completely transformed my health. I feel stronger, more energetic, and happier than ever before.", rating: 5 },
    { name: "James Rodriguez", role: "Business Owner", content: "The personalized approach and expert guidance made all the difference. Highly recommended for anyone serious about wellness.", rating: 5 },
    { name: "Emily Chen", role: "Fitness Enthusiast", content: "The community here is amazing. Everyone is supportive and the coaches really care about your progress.", rating: 5 },
    { name: "Emily Chen", role: "Fitness Enthusiast", content: "The community here is amazing. Everyone is supportive and the coaches really care about your progress.", rating: 5 },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-serif font-bold">What Our Clients Say</h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-white rounded-lg border border-border hover:shadow-lg transition-shadow h-full flex flex-col justify-between">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic flex-1">"{testimonial.content}"</p>
                <div>
                  <p className="font-serif font-bold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer shadow hover:bg-gray-100">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer shadow hover:bg-gray-100">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </div>
        </Swiper>
      </div>
    </section>
  )
}
