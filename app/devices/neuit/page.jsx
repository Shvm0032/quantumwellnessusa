"use client";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";
import DeviceBoldPoint from "../../../components/DevicesSinglePages/DeviceBoldPoint";
import DevicePointSection from "../../../components/DevicesSinglePages/DevicePointsSection";

const page = () => {
  return (
    <>
      <DeviceHero
        title="Neubie/Neuit: Revolutionary Neuromuscular Electrical Stimulation Device"
        image="/devices/devices-img/device-img-16.jpg"
      />
      <DeviceSection
        title="MODALITY/DEVICE DESCRIPTION"
        description={[
          "The Neubie (short for 'Neuro-Bio-Electric Stimulator') from NeuFit is an advanced electrical stimulation device designed to harness the power of neuromuscular re-education and acceleration of muscle recovery. Using direct current (DC) technology, the Neubie stimulates the nervous system, helping muscles contract effectively and support targeted therapy for areas that may be weak of underactive.. The device can be customized for a variety of therapeutic and performance-driven goals, including injury recovery, muscle strengthening, and pain management.",
        ]}
      />
      <DeviceBoldPoint
        title="WHO COULD POTENTIALLY BENEFIT FROM NUEBIE"
        points={[
          "Athletes: Improve strength, speed, and agility, aiding in peak performance.",
          "Rehabilitation Patients: Accelerate recovery for muscle injuries, surgeries, or musculoskeletal conditions.",
          "Chronic Pain Sufferers: Relief from pain through targeted neuromuscular stimulation.",
          "Fitness Enthusiasts: Optimize training with reduced risk of strain, enhancing muscle activation and growth.",
        ]}
      />
      <DeviceBoldPoint
        title="How Do You Feel During/After a Session"
        points={[
          "During: Users often experience mild tingling or pulsing sensations as the device stimulates  muscle contractions. It may feel intense yet controlled, akin to a strong muscle contraction during exercise.",
          "After: Many report a feeling  of relaxation in previously tight or painful areas. Some may experience increased energy, reduced soreness, and a feeling of 'lightness' or improved mobility.",
        ]}
      />
      <DevicePointSection
        title="POTENTIAL BENEFITS"
        points={[
          "Improved muscle activation for optimized performance in physical therapy or training.",
          "Support for faster recovery times and injury prevention.",
          "Reduction of chronic pain and muscle tension.",
          "Improved flexibility, range of motion, and joint stability.",
          "Increased neuromuscular efficiency, helping the body move with better coordination.",
        ]}
      />
      <DeviceBoldPoint
        title="MAXIMIZING RESULTS"
        points={[
          "Hydrate: Maintain hydration before and after sessions to optimize muscle response and prevent cramping.",
          "Warm Up & Cool Down: Integrate Neubie sessions with a thorough warm-up and cooldown for enhanced benefits.",
          "Combine with Stretching/Mobility Exercises: To encourage flexibility and better neuromuscular adaptation.",
          "Nutrition: Ensure adequate protein intake for muscle repair and growth.",
        ]}
      />
      <DeviceBoldPoint
        title="FREQUENCY"
        points={[
          "For rehabilitation: 2-3 times per week, as recommended by healthcare provider.",
          "For athletic training: 1-2 times per week to supplement regular workouts.",
          "Maintenance or general wellness: Weekly or bi-weekly as part of a supervised long-term routine.",
        ]}
      />
      <DevicePointSection
        title="THINGS TO REMEMBER"
        points={[
          "Communicate any unusual sensations to your therapist.",
          "Start with lower intensity if you’re new to electrical stimulation.",
          "Post-session hydration is essential to support recovery.",
          "Rest days between sessions can maximize results and avoid over-fatigue.",
        ]}
      />
      <DevicePointSection
        title="CONTRAINDICATIONS"
        points={[
          "Pacemakers or other electronic implants.",
          "Pregnancy.",
          "Active cancer treatments.",
          "Severe cardiovascular conditions.",
          "Acute infections or open wounds at the site of application.",
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 mb-8">

        <div className="space-y-2 text-gray-700 leading-relaxed "> 
            <p><span className="font-semibold">Note:</span> Always use the Neubie under the guidance of a licensed practitioner, and refer to the user manual for additional safety precautions and contraindications.</p>
        </div>
      </div>
    </>
  );
};

export default page;
