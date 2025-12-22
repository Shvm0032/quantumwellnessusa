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
  backgroundImage="/training/one-one.jpg"
  title="1:1 Personal Training With Ryan Martin"
  subtitle="Hands-On Coaching. Faster Results."
  description="Train in person at Quantum Wellness with technique-focused, biomechanics-driven sessions designed to reshape your physique."
/>
<ProblemSolutionSection
  eyebrow="In-Person Coaching"
  headline="Your Body Won’t Change Without Precision"
  problems={[
    "Poor exercise technique",
    "No real-time corrections",
    "Plateaus from bad movement patterns",
    "Training hard but not smart",
    "Slow or inconsistent results",
  ]}
  solutionTitle="Hands-On Coaching Changes Everything"
  solutionText="In-person training allows real-time adjustments, biomechanical corrections, and precision you simply can’t get online — resulting in faster, safer, visible results."
/>
<IncludedFeaturesSection
  eyebrow="What’s Included"
  headline="Elite 1:1 In-Person Training Experience"
  features={[
    {
      title: "1:1 Hands-On Personal Training",
      description:
        "Fully personalized, in-person training sessions focused on execution, intensity, and results.",
    },
    {
      title: "Technique & Biomechanics Coaching",
      description:
        "Real-time cueing and movement correction to safely target the right muscles.",
    },
    {
      title: "Individualized Training Program",
      description:
        "Programming built specifically for your body, goals, and training history.",
    },
    {
      title: "Customized Nutrition & Macros",
      description:
        "Personalized nutrition strategy to support fat loss, muscle gain, or performance.",
    },
    {
      title: "Biohacking Device Access",
      description:
        "Access to Quantum Wellness recovery and performance optimization devices.",
    },
    {
      title: "PNOĒ Metabolic Testing",
      description:
        "Advanced metabolic testing to precisely dial in nutrition and conditioning.",
    },
    {
      title: "ShapeScale Body Analysis",
      description:
        "Detailed body composition and symmetry tracking to measure real progress.",
    },
    {
      title: "Recovery & Mobility Protocols",
      description:
        "Targeted recovery strategies to improve longevity, mobility, and performance.",
    },
  ]}
/>

<IdealForSection
  eyebrow="Perfect For"
  headline="In-Person Training Is Ideal If You Want…"
  items={[
    "Faster physique changes with hands-on coaching",
    "Real-time form correction and technique refinement",
    "To safely push intensity and performance",
    "Help bringing up lagging body parts",
    "Stage-level physique preparation",
    "Maximum accountability and structure",
  ]}
/>
<WhyTrainWithRyanSection
  eyebrow="Why Train In-Person With Ryan"
  headline="Hands-On Coaching Changes Everything"
  description="In-person training gives you a level of precision, intensity, and personalization that online programs simply can’t match. Every session is coached, corrected, and adjusted in real time — based on your body, movement patterns, and performance."
  points={[
    "IFBB Pro who has rebuilt her own physique at the highest competitive level",
    "Hands-on coaching with real-time cueing and technique correction",
    "Deep understanding of biomechanics, movement mechanics, and injury prevention",
    "Experience coaching lifestyle clients, competitors, and elite transformations",
    "Ability to push you safely beyond your perceived limits",
    "Sessions designed for maximum efficiency, muscle activation, and results",
    "Access to Quantum Wellness biohacking and recovery technology",
    "A coach who knows exactly what works — and how to apply it to your body",
  ]}
/>


    </>
  )
}

export default page