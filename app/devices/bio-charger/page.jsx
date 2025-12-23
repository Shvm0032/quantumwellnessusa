import React from 'react'
import DeviceSection from '../../../components/DevicesSinglePages/DeviceSection'
import DeviceHero from '../../../components/DevicesSinglePages/DeviceHero'
import DevicePointsSection from '../../../components/DevicesSinglePages/DevicePointsSection'

const page = () => {
  return (
    <>
    <DeviceHero title="Bio Charger" image="/devices/devices-img/device-img-3.jpeg" />
<DeviceSection
  title="DESCRIPTION"
  description={[
    "The BioCharger replicates and amplifies PEMF, light, variable frequencies and harmonics, and voltage and applies them passively to the body to help restore our cell's voltage in a non-invasive way. When our cells are charged they take in nutrients, detoxify, and create new cells that function optimally. By precisely controlling specific frequencies and voltage output through our 'recipes' the BioCharger can be tuned to support specific aspects of wellness to help you reach your goals.",

    "Scientific and medical studies show that nature plays a vital role in our health and wellbeing. Due to our modern lifestyle, we're spending over 90% of our lives indoors, effectively shielding ourselves from four distinct energies produced in nature that are responsible for helping our cells 'charge' and function optimally. Not only are we shielding ourselves from the natural sources of these vital energies, but we're constantly bombarding ourselves with energies and stressors that are disruptive and not biocompatible. Wifi, Bluetooth, and toxins from our food and environment are examples of outside stressors that keep our cells in a constant state of stress and dysfunction.",

    "In our modern lifestyle where stressors are only becoming more abundant, we tend to operate predominately in the sympathetic state. A single BioCharger session can be just what you need to realign your body and mind, and refocus your day."
  ]}
/>

<DeviceSection
  title="WHO COULD POTENTIALLY BENEFIT FROM"
  description={[
    "Anyone can benefit from this health-enhancing treatment, which has no side effects and no adverse outcomes. The energy produced coincides with the natural energy of your body to create harmonious results that realign each cell's best functioning. Whether you're looking to take your physical or cognitive performance to the next level, assist in recovery from illness or injury, or enhance your overall well being, the BioCharger is a well rounded tool that can be tailored to support your lifestyle.",
  ]}
  
/>

  <DevicePointsSection title="HOW DO YOU FEEL DURING/AFTER A SESSION" 
  points={["Like proper nutrition and exercise consistency is where BioCharger users notice some pretty profound benefits.",
  "After an initial session, many of our clients notice a very 'grounded or centered' feeling.",
  "What we found is that you can see a profound impact on our HRV when using the BioCharger (which is essentially a measurement of how our body adapts and responds to stress). That grounded feeling is a result of our autonomic nervous system and the shift from sympathetic (fight or flight) to parasympathetic (rest and digest)."
  ]}/>

 <DevicePointsSection className="mb-12" title="POTENTIAL BENEFITS " 
    points={[  "Helps to kill pathogens and infections",
  "Increases energy",
  "Helps to increase the absorption of nutrients in the cell",
  "Helps with cellular detox",
  "Improves cellular metabolism",
  "Promotes cellular health",
  "Increases the performance of your mitochondria",
  "Modulates the immune system",
  "Improved skin health",
  "Increased tissue repair",
  "Reduction in appearance of fine lines, wrinkles and scars",
  "Improved circulation",
  "May stimulate the brain's pineal gland",
  "Decreased pain and inflammation",
  "Improves communication between the cells in the body",
  "Increased fibroblast and collagen in skin",
  "Improved quality of sleep by resetting our circadian clock",
    ]}/>

</>

  )
}

export default page