import React from 'react'
import ServiceHero from '../../../components/training/ServiceHero'
import ProblemSolutionSection from '../../../components/training/ProblemSolutionSection'
import IncludedFeaturesSection from '../../../components/training/IncludedFeaturesSection'
import IdealForSection from '../../../components/training/IdealForSection'
import WhyTrainWithRyanSection from '../../../components/training/WhyTrainWithRyanSection.jsx'

const page = () => {
  return (
    <>
    <ServiceHero
  backgroundImage="/training/online.jpg"
  title="Transform Your Body From Anywhere"
  subtitle="Data-Driven Online Coaching by IFBB Pro Ryan Martin"
  description="No guesswork. No templates. A fully customized training and nutrition system built around your metabolism, goals, and lifestyle."
/>
    <ProblemSolutionSection
      eyebrow="Online Coaching"
      headline="You Don’t Need More Motivation"
      problems={[
        "No clear direction",
        "Random workouts with no structure",
        "Generic meal plans that don’t work",
        "Lack of accountability",
        "Same body despite trying everything",
      ]}
      solutionTitle="You Need a Data-Driven Plan"
      solutionText="My online coaching removes guesswork. Every training and nutrition decision is built around your metabolism, your lifestyle, and your goals — and refined every single week."
    />
    <IncludedFeaturesSection
  eyebrow="What’s Included"
  headline="A Fully Customized Coaching System"
  features={[
    {
      title: "Customized Training Program",
      description: "Personalized workouts designed for home or gym based on your goals and ability.",
    },
    {
      title: "Personalized Nutrition & Macros",
      description: "Flexible nutrition built around your metabolism, lifestyle, and preferences.",
    },
    {
      title: "Weekly Video Check-Ins",
      description: "Ongoing feedback, progress review, and plan adjustments every week.",
    },
    {
      title: "Form Feedback & Corrections",
      description: "Exercise reviews to ensure proper execution and injury prevention.",
    },
    {
      title: "Biohacking & Recovery Guidance",
      description: "Red light, PEMF, cold therapy, and recovery protocols tailored to you.",
    },
    {
      title: "Accountability & Habit Tracking",
      description: "Messaging support and tracking to keep you consistent and progressing.",
    },
  ]}
/>
<IdealForSection
  eyebrow="Who This Is For"
  headline="This Program Is Designed For You If…"
  items={[
    "Busy professionals who need structure and flexibility",
    "People stuck with the same body despite trying everything",
    "Clients who want real accountability, not motivation quotes",
    "Anyone who wants data-driven coaching, not guesswork",
    "Competitors or physique-focused clients",
    "Moms rebuilding their body and confidence",
  ]}
/>
<WhyTrainWithRyanSection
  eyebrow="Why Train With Ryan"
  headline="This Isn’t Generic Online Coaching"
  description="You’re not hiring a random online trainer or following templated plans. You’re working directly with IFBB Pro and Master Trainer Ryan Martin — using real data, real accountability, and real weekly refinement to create results that actually last."
  points={[
    "IFBB Pro Figure Athlete with decades of real-world coaching experience",
    "Master Trainer (ISSA) with 20+ years in biomechanics and physique development",
    "Board Certified Health Coach with a data-first coaching philosophy",
    "Expert in metabolic optimization and body recomposition",
    "Owner of Quantum Wellness with access to advanced recovery and biohacking systems",
    "Data-driven programming refined weekly — not guesswork or trends",
    "Proven client transformations across lifestyle, competitors, and professionals",
    "Personal attention, feedback, and accountability you won’t find in apps or templates",
  ]}
/>




    </>
  )
}

export default page