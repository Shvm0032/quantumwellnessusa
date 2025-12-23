import React from "react";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";
import DevicePointsSection from "../../../components/DevicesSinglePages/DevicePointsSection";
import TwoColumnPointsSection from "../../../components/DevicesSinglePages/TwoColumnPointsSection";

const page = () => {
  return (
    <>
      <DeviceHero
        title="Infrared Sauna"
        image="/devices/devices-img/device-img-6.jpeg"
      />
      <DeviceSection
        title="DESCRIPTION"
        description={[
          "Our body is an amazing self-healing organism and the bulk of the magic happens while we’re busy doing other things, or even during our sleep.  The skin is actually the largest organ of the human body and has been called many times; “the third kidney” because of its ability to discharge large amounts of waste material through the sweat glands. It is one of the best mechanisms the body has for elimination.",
          "nfrared saunas use advanced therapy to promote heat generation in the body with only a small percentage of the heat heating the air. This results in a deeper sweat and at a lower ambient air temperature. In fact, infrared saunas usually operate between 115° – 135°F, while traditional saunas can get up to 195°F.",
          "You will receive all of the relaxation benefits of a traditional sauna along with the increased health benefits that infrared offers all at a much more comfortable temperature.  Infrared saunas are also dry saunas and many users find this makes for a more comfortable sauna session. ",
          "Full spectrum refers to the entire infrared spectrum: near infrared, mid infrared and far infrared. With the addition of near and mid infrared, you will get the maximum benefit from your infrared sauna session",
          "Near Infrared is the shortest wavelength, and will be absorbed just below the surface of the skin creating a sweat that promotes healing and revitalization.",
          "Mid infrared is a longer wavelength that can penetrate deeper into the body’s soft tissue increasing circulation, releasing oxygen to reach injured areas.",
          "Far infrared is the longest wavelength which penetrates the fat cells causing vasodilation, where the fat cells vibrate to expel toxins, resulting in the greatest levels of detoxification and stimulate your metabolism to aid in weight-loss.",
        ]}
      />
      <DevicePointsSection
        title="CONTRAINDICATION"
        points={[
          "Anyone looking to support their immune system",
          "Anyone looking to support detoxification",
          "Anyone looking to recover faster",
          "Anyone looking to improve muscle relaxation",
          "Anyone looking to improve range of motion",
          "Anyone looking to reduce inflammation",
          "Anyone looking to reduce chronic inflammation",
          "Anyone looking to reduce stress",
        ]}
      />

      <DeviceSection
        title="HOW DO YOU FEEL DURING/AFTER A SESSION"
        description={[
          "Typical sessions last 20 to 45 minutes and can be repeated once or twice during the day to maximize the benefits. Infrared saunas leave you feeling invigorated, not depleted like conventional saunas. ",
        ]}
      />
      <TwoColumnPointsSection
  title="POTENTIAL BENEFITS"
  leftPoints={[
    "Weight loss & Increased metabolism",
    "Temporary Muscle pain relief",
    "Increase in Muscle relaxation, Flexibility and range of motion",
    "Improved Sleep",
    "Improved Detoxification",
    "Improves the appearance of cellulite",
    "Improves acne",
  ]}
  rightPoints={[
    "Temporary relief from arthritic pain",
    "Improves joint pain and stiffness",
    "Improves the immune system",
    "Reduces stress",
    "Improves fatigue",
    "Improves the appearance of the skin",
  ]}
/>

<DevicePointsSection
  title="MAXIMIZING RESULTS"
  points={[
    "This is great to combine with BallancerPro for a full body detox",
    "This is great to combine with Red light, HBOT, PEMF for muscle recovery",
    "This is great to combine with Red light, EmShapeWell, and/or Cryoskin for body contouring",
    "Combine Red-light, PEMF, Whole body Cryo and Sauna for immune support",
  ]}
/>

   <DeviceSection
        title="FREQUENCY"
        description={[
          "Typical sessions last 20 to 45 minutes and can be repeated once or twice during the day to maximize the benefits.  The more frequent the sessions the better the results. ",
        ]}
      />
      <DevicePointsSection
  title="THINGS TO REMEMBER"
  points={[
    "Clients must remember to bring water and a towel in with them.",
    "Can do whole body cryo BEFORE sauna, but will take long to heat up",
    "If you do sauna before cryo ensure the client is dry",
    "Ideally you want to do this on a separate day from WBC",
  ]}
/>

<TwoColumnPointsSection
  title="POTENTIAL BENEFITS"
  leftPoints={[
    "CHF",
    "Pacemaker / Defibrillator",
    "Injury to the joint within 48 hours",
    "Fever",
    "Consumed Alcohol before session",
    "Currently dehydrated ",
  ]}
  rightPoints={[
    "Currently dehydrated, Diseases Associated with a Reduced ability to Sweat or Perspire",
    "Insensitivity to Heat" ,
    "Pregnancy",
    "Haemophiliacs/Individuals Prone to Bleeding"
  ]}
/>




   <DeviceSection
        title="HOW TO PURCHASE"
        description={[
          "Through any of our foundational memberships  ",
        ]}
        classname="mb-12"
      />

    </>
  );
};

export default page;
