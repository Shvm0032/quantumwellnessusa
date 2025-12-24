import React from 'react'
import DeviceHero from '../../../components/DevicesSinglePages/DeviceHero'
import DeviceSection from '../../../components/DevicesSinglePages/DeviceSection'
import DevicePointsSection from '../../../components/DevicesSinglePages/DevicePointsSection'

const page = () => {

  const additionalTreatmentsPoints = [
  "Red light therapy throughout the week.",
  "Infrared or ozone sauna sessions.",
  "PEMF and BallancerPro for detoxification.",
  "Use BallancerPro the day before, the day of, and the day after the treatment.",
];
  return (
    <>
    <DeviceHero title="CryoWave" image="/devices/devices-img/device-img-4.jpeg" />
    <DeviceSection
      title="DESCRIPTION"
      description={[
        "CryoWave Revolution System is an innovative concept, offering a multi-application platform . It provides a variety of procedures to achieve desirable results: fat reduction, cellulite reduction, lymphatic drainage, skin tightening, skin rejuvenation, facials, and pain management. Everything is possible with CryoWave Revolution! " ,
      ]}
    />
      <DevicePointsSection title="WHO COULD POTENTIALLY BENEFIT" 
      points={["Anyone looking to improve the appearance of their skin",
      "Anyone seeking to tighten loose skin ",
      "Anyone aiming to reduce body fat",
      "Anyone experiencing pain or inflammation"
      ]}/>

       <DeviceSection
      title="HOW DO YOU FEEL DURING/AFTER A SESSION"
      description={[
        "During a session, you will feel slight pressure and a cold sensation. Each session lasts approximately 26-75 minutes, depending on the body part and the program run. Some swelling at the treatment site may occur but will subside within a few hours." ,
      ]}
    />
       <DevicePointsSection  title="POTENTIAL BENEFITS " 
    points={[  "Reduction of fluid ",
  "Reduced body fat",
  "Improved skin texture ",
  "Reduction in the appearance of wrinkles ",
    ]}/>

    <DevicePointsSection  title="MAXIMIZING RESULTS " 
    points={[  "Avoid consuming carbs within 2 hours before or after a treatment. Protein is fine within this window.",
  "Limit alcohol consumption during the process.",
  "Remind clients that this treatment works best with a proper diet and exercise routine.",
  "Manage client expectations.",
  "Boost the lymphatic system by drinking 1.5 to 2.5 liters of water daily.",
    ]}/>

      <div className="max-w-4xl mx-auto px-6 mb-6">
          <p className="text-md md:text-md capitalize font-serif font-normal mb-4 text-gray-900">
            Additional treatments to enhance results include: 
          </p>

        <ul className="space-y-1 list-disc list-inside text-gray-700 leading-relaxed">
          {additionalTreatmentsPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

        <DevicePointsSection  title="FREQUENCY " 
    points={[  "Ideally once every 7-10 days for Fat freezing ",
  "Once a week for CryoFacials ",
  "Daily for pain management ",
    ]}/>

    <DevicePointsSection
  title="CONTRAINDICATIONS"
  points={[
  "Uncontrolled diabetes",
  "Pregnancy or breastfeeding",
  "Cold-related illness",
  "Cardiovascular disease or lower limb ischemia",
  "Bacterial and viral skin infections",
  "Wound healing disorders",
  "Pacemaker or metal implants in the treatment area",
  "Active or severe eczema, rashes, or dermatitis",
  "Open or infected wounds",
  "Active implanted device in or adjacent to the treatment area",
]}
/>

     <DevicePointsSection className="mb-12" title="HOW TO PURCHASE" 
    points={[  "Through packages " ]}/>

    </>
  )
}

export default page