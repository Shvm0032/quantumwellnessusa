import React from "react";
import DeviceHero from "./../../../components/DevicesSinglePages/DeviceHero";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";
import DevicePointsSection from "../../../components/DevicesSinglePages/DevicePointsSection";

const page = () => {
  return (
    <>
      <DeviceHero title="PEMF" image="/devices/devices-img/device-img-9.jpeg" />
      <DeviceSection
        title="DESCRIPTION"
        description={[
          "Pulsed Electromagnetic Field technology (PEMF) is a wellness modality with a variety of benefits that utilizes sophisticated generators and a variety of application accessories to introduce electromagnetic fields to the cells (not an electric current), through the clothing and skin, and into the body. This pulsed field will have a positive impact on the body, improving basic cellular function in order to combat a variety of health conditions and, when possible, to prevent cellular damage from happening in the first place.",
          "The powerhouse of our cells, our mitochondria, need to have proper energy flow in order to maintain optimal health and wellness. This is because the energy allows the cell to open up and remove the metabolic waste (perform cellular detox) and draw in the nutrients necessary for proper energy production and DNA replication. So by restoring or maintaining the energy needed for cellular function, you will in turn restore or maintain organ function, allowing the entire body to function better, which is the basis for all PEMF therapy.",
        ]}
      />
      <DevicePointsSection
  title="BENEFITS OF PEMF THERAPY"
  points={[
    "Improved circulation and blood flow",
    "Improved oxygen levels in the tissues of the body",
    "Improved mental focus, concentration, and memory",
    "Improved function of phagocytes and neutrophils",
    "Improved appearance of the skin by reducing wrinkles",
    "Enhanced muscle healing, repair and recovery",
    "Enhanced stem cell function and production",
    "Decreased pain, inflammation, and swelling",
    "Deeper and fuller sleep cycles",
    "Reduction in stress and anxiety",
    "Enhances the body’s natural recovery process",
    "Increased cellular respiration",
    "Increased ATP (our energy)",
    "Increases the transportation of oxygen to the tissues",
    "Increases the cellular absorption of nutrients",
    "Increases cellular detoxification from metabolic waste",
  ]}
/>
<DevicePointsSection
  title="WHO COULD BENEFIT?"
  points={[
    "Anyone looking to support general health and wellness",
    "Anyone looking to prevent cellular damage",
    "Athletes looking to improve their performance",
    "Anyone looking to support a healthy heart",
    "Anyone looking to improve cognitive function",
    "Anyone looking to improve their stress levels",
    "Anyone with acute or chronic inflammation",
    "Anyone looking to reduce their pain levels",
    "Anyone with non-healing wounds",
    "Anyone looking to support their immune system",
    "Anyone looking to improve their energy levels",
    "Anyone looking to optimize their wellness",
    "Anyone experiencing joint pain",
    "Anyone looking to improve the appearance of their skin",
    "Anyone who are hypoxic",
    "Anyone looking to reduce muscle spasms",
    "Anyone with cognitive issues",
    "Anyone with issues falling/staying asleep",
  ]}
/>
   <DeviceSection
        title="HOW DOES IT FEEL?"
        description={[
          "During a PEMF session you should feel a slight twitch in the muscle. It should be comfortable, you should never be bouncing off the table. If you have metal implants in the body you might feel an odd tingling though the area",
          "After a PEMF session you should feel more relaxed in the muscles and have more energy overall. You may notice a slight reduction in pain throughout the body and that you sleep better that night",
        ]}
      />

         <DeviceSection
          className="mb-12"
        title="MAXIMIZE RESULTS"
        description={[
          "You will want to start low and slow. You should feel the muscle twitch but not be bouncing off the table. Frequency is key, the more frequent the use the better. Maximum results can be seen 12 hours after treatment. In the days after treatment focus on your mood, sleep and activities of daily living",
        ]}
      />






    </>
  );
};

export default page;
