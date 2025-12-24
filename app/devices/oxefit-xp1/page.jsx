"use client";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";
import DeviceBoldPoint from "../../../components/DevicesSinglePages/DeviceBoldPoint";


const page = () => {
  return (
    <>
      <DeviceHero title="Oxefit XP1" image="/devices/devices-img/device-img-14.webp" />
      <DeviceSection
        title="Modality/Device Description"
        description={[
          "OXEFIT is a cutting-edge ftness device that combines strength training, cardio, and rehabilitation into one compact machine using artifcial intelligence and real-time data analytics. It ofers personalized training programs, allowing users to experience a full-body workout tailored to their unique needs. The OXEFIT system uses advanced resistance training, plyometrics, and functional ftness exercises, providing a dynamic and versatile workout experience.",
        ]}
      />
     <DeviceBoldPoint 
      title="Who Could Potentially Benefit From"
        points={[
            "Athletes: For enhancing performance, strength, and agility.",
            "Fitness Enthusiasts: Looking for a high-tech, efficient workout experience.",
            "Rehabilitation Patients: Provides controlled movements and personalized settings for recovery.",
            "Beginners: Easy to follow, guided workouts that adjust to individual fitness levels.",
            "Busy Professionals: Offers efficient, full-body workouts that can be completed quickly.",
            "Seniors: Safe, adaptive exercises that cater to various levels of mobility and strength."
           
        ]}
      /> 
      <DeviceSection
        title="How Do You Feel During/After a Session"
        description={[
          "During a session, users often feel challenged but supported, thanks to OXEFIT's adaptive resistance and real-time feedback. After the workout, expect to feel energized, with a sense of accomplishment from the dynamic and personalized exercises. There might be some muscle fatigue depending on the workout intensity, which is a sign of efective muscle engagement.",
        ]}
      />
      <DeviceBoldPoint 
      title="Benefts"
        points={[
            "Enhanced Muscle Strength and Endurance: Through adaptive resistance and varied exercise routines.",
            " Improved Cardiovascular Fitness: Cardio-integrated workouts boost heart health.",
            "Better Mobility and Flexibility: Functional movements designed to improve overall physical agility.",
            "Injury Prevention: Controlled environment reduces the risk of strain and injuries.",
            "Real-Time Performance Tracking: AI-driven analytics help monitor progress and adjust workouts.",
            "Customizable Workouts: Tailored to individual ftness levels, goals, and preferences."  
        ]}
      /> 
      <DeviceBoldPoint 
      title="Maximizing Results"
        points={[
            "Consistency is Key: Regular use will maximize the results of strength, endurance, and overall ftness. ",
            "Follow the Guided Programs: OXEFIT ofers specifc routines; following them enhances efectiveness.",
            "Monitor Progress: Use OXEFIT’s analytics to adjust your workouts according to your performance data.",
            " Proper Hydration and Nutrition: Support your ftness journey with adequate water intake and balanced meals." 
        ]}
      /> 
      <DeviceBoldPoint 
      title="Frequency"
        points={[
            "General Fitness: 3-4 sessions per week, varying between strength, cardio, and recovery days.",
            "Rehabilitation: Depending on recommendations, 2-3 times per week with a focus on controlled, low-impact exercises.",
            "Performance Enhancement: 4-5 times per week with targeted, high-intensity training sessions.",
        ]}
      /> 
      <DeviceBoldPoint 
      title="Things to Remember"
        points={[
            "Warm-Up and Cool-Down: Always start with a warm-up and end with a cool-down to prevent injuries.",
            "Adjust Settings: Ensure the resistance and workout settings are correctly adjusted for your current ftness level.",
            "Listen to Your Body: Modify exercises if you feel any discomfort or strain.",
        ]}
      /> 
      <DeviceBoldPoint 
      title="Devices That Pair Well"
        points={[
            "Biocharger: For enhanced recovery and energy boosts post-session.",
            "PEMF Therapy: To aid in muscle recovery and reduce infammation.",
            " IR Sauna: For relaxation and detoxifcation after intense workouts.",
            "BallancerPro: For lymphatic drainage and muscle recovery after workouts."
        ]}
      /> 
     
    </>
  );
};

export default page;
