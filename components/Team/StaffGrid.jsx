"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, X } from "lucide-react";
import { useState } from "react";

// TEAM DATA
const team = [
  {
    name: "Ryan M",
    role: "Owner",
    subrole:"Ryan Martin - Master Trainer and Wellness Expert",
    img: "/team/staff1.jpg",
    linkedin: "https://linkedin.com",
    about: `Ryan Martin is a Master Trainer with the International Sports Sciences Association (ISSA) dedicated to helping individuals achieve their health, wellness, and fitness goals. With over 5 years of experience with the ISSA and more than 20 years in the wellness industry, Ryan brings a wealth of knowledge and expertise to her clients. She is also a Board Certified Health Coach with the American Association of Drugless Practitioners and is currently pursuing her doctorate and PhD in Natural Medicine at Quantum University.

Ryan’s extensive certifications with the ISSA include Body Building, Corrective Exercise, Exercise Recovery, Exercise Therapy, Fitness Nutrition, Strength and Conditioning, Sports Nutritionist, and Transformational Specialist. This diverse training allows her to offer a comprehensive approach to fitness and nutrition, crafting customized plans tailored to the unique needs and goals of each client.

Whether you aim to build muscle, lose weight, or improve overall health and wellness, Ryan has the experience and knowledge to guide you toward your goals. Her commitment to ongoing education and passion for helping others ensure she provides the highest quality of care and support.

At Quantum Wellness, you will find a supportive and encouraging environment where you can reach your full potential. Whether you are starting your fitness journey or are a seasoned athlete, Ryan is here to assist you every step of the way.

Ready to take control of your health and wellness? Contact us today and let’s work together to help you become the best version of yourself!`,
  },
  {
    name: "Cristine R",
    role: "Life Coach",
    subrole:"Life Coach",
    img: "/team/staff2.jpg",
    linkedin: "https://linkedin.com",
    about: `Ms. Cristine M. Rainer earned her Master’s Degree in Counseling Psychology with Honors from National University in California in 2010 and her Bachelor of Arts in Human Development with Honors from California State University, Long Beach, in 2006. Ms. Rainer has over 20 years of experience in the therapy field, including 14 years in Marriage & Family Therapy.

Cristine has designed and run an inclusive homeschooling program for all ages and abilities for three years. She has served as an Educational Therapist, assisting children and teens with learning differences; as a Psychological Testing Assistant; and as a Behavior Therapist, working with children with autism and other unique abilities through ABA and play therapy.

Her extensive specialized training and certifications include QEEG Brain Mapping, Neurofeedback, Biofeedback and Neurostimulation, Neuro Emotional Technique (NET), Dr. Daniel Amen’s Brain Health Professional Certification, Guided Meditation & Progressive Relaxation, Access Bars Facilitation, Reiki II Certification, Life & Health Coaching, Early Intervention & Parent Training, and fundamentals in Speech and Occupational Therapy. Additional credentials include Applied Kinesiology, Herbology, Detox Pathways, Evidence-Based Practices, Trauma-Focused Care, certifications in Child Abuse and Substance Abuse, as well as training in CBT, Solution-Focused Therapy, Grief and Bereavement, Sand Tray Therapy, Art Therapy, Giftedness, Eating Disorders, and Group Therapy.

Ms. Rainer, who has homeschooled her neurodivergent teen daughter since kindergarten, brings a unique perspective and dedication to working with clients across various ages and backgrounds, with a particular passion for brain health, peak performance and longevity. Her approach is eclectic, drawing from a range of therapeutic modalities to meet each client's unique needs.

Ms. Rainer is provisionally licensed in the state of Florida (PMT 312) and works under supervision.`,
  },
];

export default function StaffGrid() {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <>
      <section className="w-full py-24 bg-[#F8F5F1] px-4">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold text-center text-[#2d2d2d]"
          >
            Meet Our Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-center mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A dedicated team committed to guiding your journey toward better health and wellness.
          </motion.p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-20">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                member={member}
                index={index}
                onViewProfile={() => setActiveProfile(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeProfile && (
        <ProfileModal member={activeProfile} onClose={() => setActiveProfile(null)} />
      )}
    </>
  );
}

function TeamCard({ member, index, onViewProfile }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`rounded-3xl overflow-hidden shadow-lg bg-white border border-[#e8e2db]
          transition-all duration-500 ${
            hover ? "-translate-y-2 shadow-2xl" : ""
          }`}
      >
        {/* Image */}
        <div className="relative w-full h-64 bg-black">
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-500
              flex items-center justify-center ${
                hover ? "opacity-100" : "opacity-0"
              }`}
          >
            <button
              onClick={onViewProfile}
              className="px-5 py-2 bg-white/90 rounded-full backdrop-blur text-black font-semibold shadow"
            >
              View Profile
            </button>
          </div>
        </div>

        {/* INFO */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#2d2d2d]">{member.name}</h3>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[#6B4F2B] font-medium">{member.role}</p>

            <a
              href={member.linkedin}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProfileModal({ member, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl relative"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 hover:text-black z-10"
        >
          <X size={28} />
        </button>

        {/* HEADER */}
        <div className="px-8 pt-12 pb-6">
          <div className="w-full flex justify-center">
            <div className="w-40 h-40 relative rounded-2xl overflow-hidden shadow-lg">
              <Image src={member.img} alt={member.name} fill className="object-cover" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-[#2d2d2d] mt-6">
            {member.name}
          </h2>
          <p className="text-[#6B4F2B] font-semibold text-center mt-1">
            {member.role}
          </p>
         
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-8 pb-10 overflow-y-auto max-h-[45vh] custom-scroll">
            <p className="font-semibold">{member.subrole}</p>
          <p
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: member.about.replace(/\n\s*\n/g, "<br><br>")
            }}
          />

          
        </div>
      </motion.div>
    </motion.div>
  );
}
