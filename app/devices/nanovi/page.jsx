import React from 'react'
import DeviceHero from '../../../components/DevicesSinglePages/DeviceHero'
import DeviceUniquePoints from '../../../components/DevicesSinglePages/DeviceUniquePoints'
import DeviceSection from '../../../components/DevicesSinglePages/DeviceSection'
import DevicePointsSection from '../../../components/DevicesSinglePages/DevicePointsSection'
import DeviceDescriptionOnly from '../../../components/DevicesSinglePages/DeviceDescriptionOnly'

const page = () => {
  const pairspoints = [
    "Infrared Sauna: Enhances detoxification and overall cellular health.",
    "BallancerPro: Improves lymphatic drainage and detoxification.",
    "Biocharger: Boosts energy and cellular function.",
    "Red Light Therapy: Supports skin health and cellular repair.",
    "PEMF: Enhances cellular recovery and health.",
    "CryoWave: Aids in reducing inflammation and enhancing recovery.",
  ]
  return (
    <>
     <DeviceHero
            title="NanoVi"
            image="/devices/devices-img/device-img-8.jpeg"
          />
          <DeviceUniquePoints
  title="WHO COULD POTENTIALLY BENEFIT FROM"
  subtitle="The NanoVi device is suitable for anyone looking to enhance their overall health and well-being, particularly those who:"
  points={[
    "Are athletes or fitness enthusiasts seeking improved performance and recovery.",
    "Experience high levels of oxidative stress.",
    "Are undergoing detoxification protocols.",
    "Have chronic conditions that affect cellular function.",
    "Want to improve their immune function and energy levels.",
    "Are looking for anti-aging and longevity solutions.",
  ]}
/>
<DeviceSection
        title="HOW DO YOU FEEL DURING/AFTER A SESSION"
        description={[
          "During a NanoVi session, you will experience a gentle flow of moist air that is easy to breathe in. Many clients report feeling a sense of relaxation and calm during the session. After a session, individuals often feel more energized, rejuvenated, and clear-minded. Some may notice improved breathing and a general sense of well-being.",
         
        ]}
      />
      <DevicePointsSection
  title="POTENTIAL BENEFITS"
  points={[
    "Enhanced cellular repair and regeneration.",
    "Reduction in oxidative stress and free radical damage.",
    "Improved athletic performance and faster recovery times.",
    "Boosted immune system function.",
    "Increased energy levels and mental clarity.",
    "Support for detoxification processes.",
    "Anti-aging benefits, including improved skin health.",
  ]}
/>

<DeviceUniquePoints
  title="MAXIMIZING RESULTS"
  subtitle="To get the most out of NanoVi sessions:"
  points={[
    "Stay well-hydrated before and after treatments.",
    "Incorporate a balanced diet rich in antioxidants to complement the oxidative stress reduction.",
    "Use in conjunction with other wellness treatments for a synergistic effect.",
    "Maintain a regular exercise routine to support overall health.",
  ]}
/>



<DeviceSection
        title="FREQUENCY"
        description={[
          "For optimal benefits, it is recommended to use the NanoVi device 3-5 times per week. Some individuals may benefit from daily use, especially those with higher levels of oxidative stress or specific health goals.",
         
        ]}
      />
<DevicePointsSection
  title="THINGS TO REMEMBER"
  points={[
    "Sessions typically last around 15-30 minutes.",
    "Relax and breathe normally during the session.",
    "Consistency is key to achieving long-term benefits.",
    "Ensure the device is properly maintained and cleaned for the best experience.",
  ]}
/>

<DeviceUniquePoints
  title="CONTRAINDICATIONS"
  subtitle="The NanoVi device is generally safe for most individuals, but it should be used with caution or avoided by those who:"
  points={[
    "Have respiratory conditions that could be aggravated by increased moisture intake.",
    "Are pregnant or nursing (consult with a healthcare provider).",
    "Have severe chronic conditions without prior medical approval.",
  ]}
/>
<DeviceSection
        title="DEVICES THAT PAIR WELL"
        description={[
          "The NanoVi device pairs well with several other wellness devices and treatments, including:",
        ]}
      />
      
     <div className="max-w-4xl mx-auto px-6 mb-6">
      
      <ul className="space-y-1 list-disc list-inside text-gray-800 leading-relaxed">
          {pairspoints.map((point, index) => {
            const [boldText, ...restText] = point.split(":");

            return (
              <li key={index}>
                <span className="font-semibold text-gray-900">
                  {boldText} :
                </span>{" "}
                {restText.join(":")}
              </li>
            );
          })}
        </ul>
     </div>

     <DeviceSection
     className='-mt-4 mb-12'
        description={[
          "By integrating the NanoVi device with these complementary treatments, clients can experience a comprehensive approach to health and wellness, maximizing their overall results.",
        ]}
      />


    </>
  )
}

export default page