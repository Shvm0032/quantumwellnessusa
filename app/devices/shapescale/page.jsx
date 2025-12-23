"use client";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";
import DeviceBoldPoint from "../../../components/DevicesSinglePages/DeviceBoldPoint";


const page = () => {
  return (
    <>
      <DeviceHero
        title="ShapeScale"
        image="/devices/devices-img/device-img-12.jpeg"
      />
      <DeviceSection
        title="Description"
        description={[
          "ShapeScale is a 3D body scanning device that provides detailed and accurate measurements of your body's shape and composition. By using advanced sensors and imaging technology, ShapeScale creates a precise 3D model of your body, allowing you to track changes in your physique over time. This device is particularly useful for individuals looking to monitor their fitness progress, weight loss, or muscle gain. The 3D scans provide insights into body fat percentage, muscle distribution, and specific areas of improvement.",
        ]}
      />
      <DeviceBoldPoint
          title="WHO COULD POTENTIALLY BENEFIT FROM"
          points={[
            "Athletes: Monitor muscle development and body composition changes.",
            "Fitness Enthusiasts: Track progress in detail and make data-driven adjustments to their routines.",
            "Weight Loss Seekers: Visualize weight loss and body transformation over time.",
            "Personal Trainers: Provide clients with accurate progress reports and tailor fitness plans.",
            "Rehabilitation Patients: Track recovery and physical changes during rehabilitation.",
            "Elderly Individuals: Monitor changes in body composition and maintain a healthy physique.",
          ]}
        />
        <DeviceSection
        title="HOW DO YOU FEEL DURING/AFTER A SESSION"
        description={[
          "During a session, you will stand on the platform while the ShapeScale arm moves around your body, capturing detailed 3D images. The process is quick and non-invasive, usually taking less than a minute. After the session, you will receive a comprehensive 3D model of your body, which you can view and analyze through the accompanying app. Most users find the experience fascinating and informative, gaining a deeper understanding of their body composition.",
        ]}
      />
      <DeviceBoldPoint
          title="POTENTIAL BENEFITS"
          points={[
            "Accurate Body Measurements: Obtain precise measurements of your body dimensions and composition.",
            "Visual Progress Tracking: See detailed 3D models that show changes in your physique over time.",
            "Enhanced Motivation: Visual evidence of progress can boost motivation and adherence to fitness goals.",
            "Personalized Fitness Plans: Use detailed body data to create customized fitness and nutrition plans.",
            "Early Detection: Identify imbalances or areas needing improvement early on.",
            "Objective Feedback: Get unbiased, data-driven feedback on your body transformation.",
          ]}
        />
      <DeviceBoldPoint
          title="MAXIMIZING RESULTS"
          points={[
            "Regular Scans: Schedule regular scans (e.g., bi-weekly or monthly) to monitor progress consistently.",
            "Combine with Fitness Tracking: Use ShapeScale data alongside other fitness tracking methods for a holistic view of your progress.",
            "Set Specific Goals: Use the detailed body data to set and achieve specific fitness goals.",
            "Adjust Plans Accordingly: Make data-driven adjustments to your workout and nutrition plans based on scan results.",
            "Consult Professionals: Share your ShapeScale data with personal trainers or nutritionists for expert advice.",
          ]}
        />
         <DeviceSection
        title="FREQUENCY"
        description={[
          "For optimal results, it is recommended to use ShapeScale 1-2 times per month. This frequency allows for accurate tracking of body composition changes without overwhelming the user with too much data.",
        ]}
      />
      <DeviceBoldPoint
          title="THINGS TO REMEMBER"
          points={[
            "Stay Consistent: Perform scans at the same time of day and under similar conditions for consistent results.",
            "Wear Tight-Fitting Clothing: Ensure accurate scans by wearing tight-fitting clothing or minimal attire.",
            "Stay Still: Stand still during the scanning process to ensure accurate data capture.",
            "Use the App: Regularly check the accompanying app to analyze and interpret your scan results.",
            "Track Progress Over Time: Focus on long-term trends rather than short-term fluctuations.",
          ]}
        />
      <DeviceBoldPoint
          title="CONTRAINDICATIONS"
          points={[
            "Pregnancy: Pregnant women should consult with a healthcare professional before using ShapeScale.",
            "Recent Surgery: Individuals who have recently undergone surgery should seek medical advice before using the device.",
            "Severe Skin Conditions: Avoid using the device on areas with severe skin conditions or infections.",
          ]}
        />
      <DeviceBoldPoint
          title="DEVICES THAT PAIR WELL"
          points={[
            "BallancerPro: Use for lymphatic drainage and enhanced recovery.",
            "Biocharger: Combine for overall wellness and accelerated muscle recovery.",
            "BrainTap: Pair for improved mental focus and relaxation post-session.",
            "IR Sauna: Use for muscle relaxation and detoxification.",
            "Red Light Therapy: Enhance muscle recovery and reduce inflammation.",
            "PEMF: Combine for improved cellular repair and muscle recovery.",
          ]}
        />
        <DeviceSection
        title="HOW TO PURCHASE"
        description={[
          "ShapeScale is included in Quantum Wellness memberships. Members receive regular scans as part of their comprehensive wellness program, allowing them to monitor their progress and make data-driven decisions to achieve their fitness and health goals.",
        ]}
      />
    </>
  );
};

export default page;
