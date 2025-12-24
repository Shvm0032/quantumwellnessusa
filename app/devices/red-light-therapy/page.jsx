import React from "react";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";
import DevicePointsSection from "../../../components/DevicesSinglePages/DevicePointsSection";
import DeviceDescriptionOnly from "../../../components/DevicesSinglePages/DeviceDescriptionOnly";
import DeviceFrequencyPrograms from './../../../components/DevicesSinglePages/DeviceFrequencyPrograms';

const page = () => {
    const frequencyProgramsData = {
  title: "FREQUENCY PROGRAMS",
  sections: [
    {
      heading: "Muscle recovery",
      content: [
        { text: "Before exercise (for injury prevention)", type: "title" },
        { text: "3 to 5 minutes per day at 8” to 18”" },

        { text: "After exercise (for accelerated recovery)", type: "title" },
        { text: "10 to 20 minutes per day at 8” to 14”" },

        { text: "For muscle injury:", type: "title" },
        {
          text:
            "20 minutes per day at 8” to 14” until the injury heals.",
        },
      ],
    },

    {
      heading: "Skin Conditions",
      content: [
        { text: "General Skin Care", type: "title" },
        {
          text:
            "10 minutes per day at 12” to 18”, 3 to 7 times a week",
        },
        { text: "Usually shows improvements after 30 sessions" },

        { text: "Chronic Skin conditions", type: "title" },
        {
          text:
            "10 to 20 minutes per day at 12” to 18”, 3 to 5 times a week",
        },
        {
          text:
            "1 to 4 months of treatment, then a maintenance program",
        },
      ],
    },

    {
      heading: "Hair Loss",
      content: [
        {
          text:
            "10 to 20 minutes per day at 8” to 14”, 3 to 5 times a week",
        },
        { text: "Then a maintenance program" },
      ],
    },

    {
      heading: "Arthritis / Joint Pain",
      content: [
        { text: "15 minutes twice per day at 8”" },
        {
          text:
            "Then a maintenance program of 10 to 20 minutes per day",
        },
      ],
    },

    {
      heading: "Skin wounds and Scars",
      content: [
        {
          text:
            "10 to 20 minutes per day at 8” to 14”, 3 to 5 times a week",
        },
        { text: "1 to 4 months of treatment" },
        {
          text:
            "Mild/newer scars should soften and minimize visible signs of scars. Older/deeper scars and skin conditions may require longer treatment for wound healing.",
        },
      ],
    },

    {
      heading: "Low back pain",
      content: [
        {
          text:
            "10 to 20 minutes per day at 8” to 14”, 5 to 7 times a week",
        },
        {
          text:
            "Then a maintenance program after pain reduces",
        },
      ],
    },
  ],
};

  return (
    <>
      <DeviceHero
        title="Red Light Therapy"
        image="/devices/devices-img/device-img-7.jpeg"
      />
      <DeviceSection
        title="DESCRIPTION"
        description={[
          "Red-light therapy, also known as photobiomodulation (PBM) involves having low power red light wavelengths and near infrared (NIR) wavelengths emitted directly through the skin at a depth of about 8-10 millimeters. These wavelengths fall between 650 nanometers (nm) to 850 (nm), which are the most studied wavelengths, and seem to have the greatest therapeutic effect on the body.",
          "The wavelengths stimulate the mitochondria of the cell, which are the powerhouse of cells. This means that the red-light panels are creating positive effects on our cellular energy, improving multiple nervous system and metabolic processes. To put it simply, red light therapy supercharges your cells. With more energy, our cells function better.",
        ]}
      />
      <DevicePointsSection
  title="BENEFITS OF RED LIGHT THERAPY"
  points={[
    "Reduction in appearance of fine lines, wrinkles and scars",
    "Soothes sore muscles, joint pain, and arthritis",
    "Can help ease symptoms associated with autoimmune diseases",
    "Will assist in releasing fat storage in the adipocytes",
    "Improved quality of sleep by resetting our circadian clock",
    "Increased fibroblast and collagen in skin",
    "Increases testosterone production",
    "Decreased pain and inflammation",
    "Can improve symptoms of arthritis",
    "Can stimulate nerve regeneration",
    "Stimulates stem cell generation",
    "Stimulate hair growth",
    "Improved skin health",
    "Increased tissue repair",
    "Promotes cellular health",
    "Improved wound healing",
    "Improved circulation",
  ]}
/>
<DevicePointsSection
  title="WHO COULD BENEFIT?"
  points={[
    "Athletes wanting to recover faster from a training session",
    "Those frustrated with accelerated aging",
    "Those experiencing any acute pain and inflammation",
    "Those experiencing any chronic pain and inflammation",
    "Those wanting to speed the healing process",
    "Those in need of a quick energy boost",
    "Those looking to potentially increase lipolysis",
    "Those looking to improve hair growth",
    "Those looking to improve skin conditions",
    "Those suffering from PTSD",
    "Those suffering from any mood disorders",
    "Men wanting to potentially increase testosterone",
  ]}
/>
<DeviceSection
  title="HOW OFTEN?"
  description={[
    "We recommend starting with 3 to 5 sessions a week for",
    "10 to 20 minutes at a time.",
    "Joint and muscle health - 6\" away",
    "Skin conditions - 12\" to 18\" away",
    "Facial treatment - 18\" to 24\" away",
    
  ]}
/>
<DeviceDescriptionOnly
className="pt-0"
  description="See back for full list frequency recommendations"
/>
<DeviceSection
  title="HOW DOES IT FEEL?"
  description={[
    "During a red light session you should feel a warmth being emitted from the red light panels, this is from the near infrared light being emitted from the device",
    "After a red light session you should feel more rejuvenated and refreshed, you may notice a slight reduction in pain throughout the body, relaxation in the muscles, and that you sleep better that night",
  ]}
/>
<DeviceSection
  title="MAXIMIZE RESULTS"
  description={[
    "Patience is key. Red light treatment heals from within, working at a cellular level, promoting the optimal functioning of cells.",
    "Effectiveness depends on overall cellular health and other biological processes that occur while red light stimulates cells during led light therapy.",
  ]}
/>
<DevicePointsSection
  title="THINGS TO REMEMBER"
  points={[
    "Can take time to see long term benefits",
    "Expose as much skin to the red-light as possible",
    "Diminishing return when used for longer than 20 minutes",
    "Wavelengths are 630 nm, 660 nm, 810 nm, 830 nm, 850 nm",
    "There are no dangers associated with over-treatment",
    "Skin color, tone, and thickness can affect red light absorption",
  ]}

/>
<DeviceFrequencyPrograms
  title={frequencyProgramsData.title}
  sections={frequencyProgramsData.sections}
/>
<DevicePointsSection
className="mb-12"
  title="CONTRAINDICATIONS"
  points={[
    "Cancer",
    "Direct Eye Exposure (must wear protective goggles)",
    "Pregnancy",
    "Certain Thyroid Conditions",
    "Epilepsy",
    "Active Bleeding",
    "Certain Medications that increase photosensitivity",
    "(antibiotics, tetracyclines, Digoxin, Retina A)",
  ]}
/>








    </>
  );
};

export default page;
