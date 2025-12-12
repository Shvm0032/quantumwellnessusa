"use client";

import Image from "next/image";

export default function PersonalizedWellness() {
  return (
   <section
         className="w-full relative bg-cover bg-no-repeat"
       >
         <div className="w-full h-full">
           <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
             
             {/* Left Div: Heading, Paragraph, Button */}
            
              <div className="md:w-1/2 flex justify-center md:justify-end">
               <div className="w-full max-w-md rounded-xl overflow-hidden ">
                 <Image
                   src="/story/performance.webp"
                   alt="Illustration"
                   width={400}
                   height={400}
                   className="object-cover"
                 />
               </div>
             </div>
   
             {/* Right Div: Image */}
           <div className="md:w-1/2 text-center md:text-left">
               <h1 className="text-2xl md:text-3xl text-black font-semibold mb-6">
                Personalized Wellness Plans
               </h1>
               <p className="mb-6 text-lg md:text-xl text-gray-600">
             Our specialists design customized wellness plans tailored to your unique needs, emphasizing nutrition, exercise, stress management, and sleep. 
               </p>
           
             </div>
   
           </div>
         </div>
       </section>
  );
}
