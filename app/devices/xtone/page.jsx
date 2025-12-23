"use client";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";
import DeviceBoldPoint from "../../../components/DevicesSinglePages/DeviceBoldPoint";


const page = () => {
  return (
    <>
      <DeviceHero
        title="Xtone"
        image="/devices/devices-img/device-img-13.jpeg"
      />
      <DeviceSection
        title="Description"
        description={[
          "The X Tone device utilizes advanced electrical muscle stimulation (EMS) technology to induce muscle contractions. These contractions lead to muscle hypertrophy (growth) and hyperplasia (increase in the number of muscle fibers). The X Tone targets deep muscle tissues, providing an efficient and effective workout that complements traditional training methods. X Tone is designed to enhance muscle strength, tone, and endurance, making it a valuable tool for fitness enthusiasts and athletes alike.",
        ]}
      />
       <DeviceBoldPoint 
      title="WHO COULD POTENTIALLY BENEFIT FROM"
        points={[
            "Athletes: Enhance performance, speed recovery, and improve muscle strength and endurance.",
            "Fitness Enthusiasts: Achieve faster muscle growth and definition.",
            "Rehabilitation Patients: Aid in muscle recovery and prevent muscle atrophy.",
            "Busy Professionals: Get an effective workout in a shorter time.",
            "Elderly Individuals: Maintain muscle mass and improve mobility.",
        ]}
      />
       <DeviceSection
        title="HOW DO YOU FEEL DURING/AFTER A SESSION"
        description={[
          "During a session, you may feel a series of controlled, rhythmic muscle contractions. Some users describe the muscle stimulation as a deep, intense workout without the physical exertion typically associated with traditional exercise. After a session, you might experience muscle fatigue similar to what you would feel after a vigorous workout. Most users report feeling energized and revitalized post-session.",
        ]}
      />
      <DeviceBoldPoint 
      title="POTENTIAL BENEFITS"
        points={[
            "Muscle Hypertrophy and Hyperplasia: Increase in muscle size and number of muscle fibers.",
            "Enhanced Muscle Strength: Improved muscle power and performance.",
            "Improved Muscle Tone: Enhanced muscle definition and firmness.",
            "Accelerated Recovery: Reduced muscle soreness and quicker recovery times.",
            "Increased Endurance: Improved stamina and resistance to muscle fatigue.",
            "Convenient Workout: Effective muscle stimulation in a short amount of time.",
        ]}
      />
      <DeviceBoldPoint 
      title="MAXIMIZING RESULTS"
        points={[
            "Combine with Traditional Exercise: Use X Tone alongside your regular workouts for optimal results.",
            "Balanced Diet: Maintain a protein-rich diet to support muscle growth.",
            "Stay Hydrated: Drink plenty of water before and after sessions to aid in muscle recovery.",
            "Consistent Use: Regular sessions, combined with proper rest and recovery, will yield the best results.",
        ]}
      />
      <DeviceSection
        title="FREQUENCY"
        description={[
          "For optimal results, it is recommended to use the X Tone device 2-3 times per week. Adjust frequency based on individual goals and response to treatment. Always allow sufficient recovery time between sessions to prevent overtraining.",
        ]}
      />
      <DeviceBoldPoint 
      title="THINGS TO REMEMBER"
        points={[
            "Consult with a Professional: Always consult with a healthcare or fitness professional before starting any new muscle stimulation regimen.",
            "Listen to Your Body: Pay attention to your body's response and adjust session intensity accordingly.",
            "Proper Placement: Ensure correct electrode placement for effective muscle targeting.",
            "Follow Guidelines: Adhere to the recommended session durations and frequencies for safety and effectiveness.",
        ]}
      />
      <DeviceBoldPoint 
      title="CONTRAINDICATIONS"
        points={[
            "Pregnancy: Not recommended for use during pregnancy.",
            "Cardiac Conditions: Individuals with pacemakers or other cardiac implants should avoid using this device.",
            "Epilepsy: Not suitable for individuals with epilepsy.",
            "Skin Conditions: Avoid using on areas with skin infections, inflammations, or open wounds.",
            "Metal Implants: Consult a healthcare professional if you have metal implants in the targeted area.",
        ]}
      />
      <DeviceBoldPoint 
      title="DEVICES THAT PAIR WELL"
        points={[
            "BallancerPro: Combine with lymphatic drainage for enhanced recovery.",
            "Biocharger: Use for overall wellness and accelerated muscle recovery.",
            "BrainTap: Pair for improved mental focus and relaxation post-session.",
            "IR Sauna: Use for muscle relaxation and detoxification.",
            "Red Light Therapy: Enhance muscle recovery and reduce inflammation.",
            "PEMF: Combine for improved cellular repair and muscle recovery.",
        ]}
      />
   
    </>
  );
};

export default page;
