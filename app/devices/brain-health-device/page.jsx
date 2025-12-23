import React from 'react'
import DeviceHero from '../../../components/DevicesSinglePages/DeviceHero'
import DeviceSection from '../../../components/DevicesSinglePages/DeviceSection'
import DevicePointsSection from '../../../components/DevicesSinglePages/DevicePointsSection'

const page = () => {
  return (
    <>
    {/* herosection   */}
    <DeviceHero title="Ballancer Pro" image="/devices/devices-img/device-img-1.jpeg"/>
<DeviceSection
  title="Description"
  description={[
    "The Ballancer Pro is the highest standard of lymphatic drainage technology, jump into the pants to begin your journey and finish the session in our jacket for a complete body treatment. The extremely relaxing experience will bring aesthetic and wellness results like no other, it can be compared to being massaged by 24 masseuses at the same time! The Ballancer Pro works by increasing circulation and supporting the lymphatic system. Originating in the medical field, it is backed by 40 years of proven clinical studies, the state-of-the-art Ballancer Pro is known as the ‘gold standard’ for lymphatic drainage. Users enjoy an extremely relaxing and comfortable experience resulting in aesthetic and wellness benefits that are long lasting!",
  ]}
/>
<DevicePointsSection
  title="BENEFITS OF BALLANCER PRO"
  points={[
      "Helps support weight loss, reduce a dress size with 12 treatments",
  "Improves the appearance and tightness of the skin",
  "Reduces the appearance of cellulite",
  "Flushes out metabolic waste and fat",
  "Prevents and treats varicose veins",
  "Increases blood flow and massages the muscles",
  "Reduces the buildup of scar tissue",
  "Reduce limb and body swelling",
  "Increase the support of the immune system",
  "Helps to support the body’s ability to remove toxins",
  "Helps to combat chronic and acute inflammation",
  "Speeds recovery by removing metabolic waste and lactic acid",
  ]}
/>
    </>
  )
}

export default page