"use client";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";
import DeciceBoldPoints from "../../../components/DevicesSinglePages/DeviceBoldPoint";
import DeciceBoldSection from "../../../components/DevicesSinglePages/DeviceBoldSection";


const page = () => {
  return (
    <>
      <DeviceHero title="PNOE" image="/devices/devices-img/device-img-10.png" />
      <DeviceSection
        title="Description"
        description={[
          "PNOE is a portable metabolic analyzer that provides comprehensive insights into your metabolic function, cardiovascular health, and fitness levels. By measuring the exchange of oxygen and carbon dioxide during respiration, PNOE offers detailed information about your body's metabolic efficiency, fuel utilization (carbohydrates vs. fats), and aerobic capacity. This data is invaluable for creating personalized fitness and nutrition plans, monitoring health conditions, and optimizing athletic performance.",
        ]}
      />
      <DeciceBoldSection
        title="PNOE offers two primary tests"
        points={[
          "1. Resting Metabolic Rate (RMR) Test: This test measures your metabolism at rest, providing insights into your baseline caloric needs and metabolic efficiency. During this test, you will sit or lie down comfortably while the PNOE device measures your breath. The RMR test helps determine the number of calories your body requires to maintain basic physiological functions, such as breathing, circulation, and cell production.",
          "2. VO2 Max (Active) Test: This test assesses your maximum oxygen uptake during intense exercise, providing a comprehensive view of your cardiovascular and aerobic fitness. The VO2 Max test involves performing a graded exercise protocol, such as running on a treadmill or cycling on a stationary bike, while wearing the PNOE mask. The test measures how efficiently your body utilizes oxygen during peak physical activity, offering valuable data on your endurance and performance capabilities.",
        ]}
      />
      <DeciceBoldPoints 
      title="WHO COULD POTENTIALLY BENEFIT FROM"
        points={[
            "Athletes: Optimize training programs and enhance performance based on metabolic data.",
            "Fitness Enthusiasts: Tailor workouts and diets to improve metabolic health and fitness levels.",
            "Weight Loss Seekers: Understand metabolic rate and design effective weight loss strategies.",
            "Health-Conscious Individuals: Monitor cardiovascular and metabolic health.",
            "Personal Trainers and Coaches: Provide clients with data-driven fitness and nutrition plans.",
            "Individuals with Chronic Conditions: Monitor and manage conditions such as diabetes, obesity, and cardiovascular diseases."
        ]}
      />
      <DeciceBoldSection 
      title="HOW DO YOU FEEL DURING/AFTER A SESSION"
        points={[
            "Resting Metabolic Rate (RMR) Test: During the RMR test, you will feel relaxed as you sit or lie down comfortably. The PNOE mask will capture your breath while you remain still. The experience is non-invasive and typically lasts about 15-20 minutes. After the test, you should feel normal, with no physical exertion or discomfort, and you'll receive detailed insights into your resting metabolic rate and caloric needs.",
            "VO2 Max (Active) Test: During the VO2 Max test, you will engage in a graded exercise protocol, such as running or cycling, while wearing the PNOE mask. As the intensity of the exercise increases, you may feel progressively more exerted, similar to a vigorous workout. The test usually lasts about 10-15 minutes. After the test, you might feel fatigued and experience muscle soreness, similar to what you would feel after a high-intensity workout. However, you'll gain valuable data on your aerobic capacity and cardiovascular fitness."
           
        ]}
      />
      <DeciceBoldPoints 
      title="POTENTIAL BENEFITS"
        points={[
            "Accurate Metabolic Data: Obtain precise measurements of your metabolic rate and efficiency.",
            "Personalized Fitness Plans: Use metabolic data to create customized workout programs.",
            "Tailored Nutrition Plans: Design nutrition plans that optimize fuel utilization and support metabolic health.",
            "Enhanced Performance: Optimize training intensity and recovery based on metabolic insights.",
            "Improved Weight Management: Develop effective weight loss or weight gain strategies.",
            "Cardiovascular Health Monitoring: Assess and improve cardiovascular function and endurance.",
            "Early Detection: Identify potential health issues related to metabolism and cardiovascular health."
           
        ]}
      />
      <DeciceBoldPoints 
      title="MAXIMIZING RESULTS"
        points={[
            "Consistent Testing: Perform regular PNOE tests to track changes and progress over time.",
            "Combine with Fitness Tracking: Use PNOE data alongside other fitness metrics for a comprehensive view.",
            "Adjust Training Plans: Modify workout intensity and duration based on PNOE results.",
            "Optimize Nutrition: Adjust macronutrient intake to match your metabolic profile.",
            "Consult Professionals: Share PNOE data with fitness and health professionals for expert guidance."
           
        ]}
      />
      <DeviceSection
      title="FREQUENCY"
        description={[
          "For optimal results, it is recommended to use the PNOE device every 2-3 months. This frequency allows for accurate tracking of metabolic and cardiovascular changes while providing enough time to implement and observe the effects of adjustments in training and nutrition plans.",
        ]}
      />
      <DeciceBoldPoints 
      title="THINGS TO REMEMBER"
        points={[
            "Stay Consistent: Conduct tests under similar conditions each time for consistent results.",
            "Follow Pre-Test Guidelines: Adhere to any pre-test instructions regarding food, drink, and activity to ensure accurate measurements.",
            "Use the App: Regularly review the detailed reports provided by the PNOE app to track progress and make informed decisions.",
            "Focus on Long-Term Trends: Concentrate on long-term improvements rather than short-term fluctuations.",
           
        ]}
      />
      <DeciceBoldPoints 
      title="CONTRAINDICATIONS"
        points={[
            "Respiratory Conditions: Individuals with severe respiratory conditions should consult a healthcare professional before using the device.",
            "Recent Surgery: Those who have recently undergone surgery should seek medical advice before participating in a PNOE test.",
            "Severe Cardiovascular Conditions: Individuals with severe cardiovascular diseases should consult with their doctor prior to using PNOE.",
        ]}
      />
      <DeciceBoldPoints 
      title="DEVICES THAT PAIR WELL"
        points={[
            "BallancerPro: Use for lymphatic drainage and enhanced recovery.",
            "Biocharger: Combine for overall wellness and accelerated muscle recovery.",
            "BrainTap: Pair for improved mental focus and relaxation post-session.",
            "IR Sauna: Use for muscle relaxation and detoxification.",
            "Red Light Therapy: Enhance muscle recovery and reduce inflammation.",
            "PEMF: Combine for improved cellular repair and muscle recovery."
        ]}
      />
      <DeviceSection classname="mb-8"
        title="HOW TO PURCHASE"
        description={[
          "PNOE Resting test is included in Quantum Wellness Vitality memberships, and both the resting and the active tests are included in the training package. Members receive regular metabolic testing as part of their comprehensive wellness program, enabling them to monitor their metabolic health and optimize their fitness and nutrition plans based on precise data.",
        ]}
      />

    </>
  );
};

export default page;
