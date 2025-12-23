"use client"
import React from 'react'
import DeviceHero from '../../../components/DevicesSinglePages/DeviceHero'
import DeviceSection from '../../../components/DevicesSinglePages/DeviceSection'
import DevicePointsSection from '../../../components/DevicesSinglePages/DevicePointsSection'
import DeviceFrequencyPrograms from '../../../components/DevicesSinglePages/DeviceFrequencyPrograms'


const page = () => {

const frequencyProgramsData = {
  title: "FREQUENCY PROGRAMS",
  sections: [
    {
      heading: "Aesthetic / Wellness Treatments",
      content: [
        { text: "Drop at least a dress size before a major event" },
        { text: "12 treatments every day, 40 - 60 minutes each" },
        { text: "For cellulite reduction", type: "title" },
        { text: "3 - 7 treatments a week, 40 - 60 minutes each" },
        { text: "For improved skin", type: "title" },
        { text: "3 - 7 treatments a week, 40 - 60 minutes each" },
        { text: "For detoxification", type: "title" },
        { text: "3 - 7 treatments a week, 60 minutes each" },
      ],
    },
    {
      heading: "Athletic Recovery",
      content: [
        { text: "General Athletic Recovery", type: "title" },
        {
          text:
            "40 minute treatments in the Ballancer Pro are equivalent to 2 days’ rest and recovery. Treatment recommendation is at least once per day and at minimum twice a day during high volume days",
        },
        { text: "Pre and Post Heavy-Training Recovery", type: "title" },
        { text: "20 - 60 minute treatments" },
      ],
    },
  ],
};

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
<DevicePointsSection
  title="WHO COULD BENEFIT?"
  points={[
        "Anyone looking to reduce waist size quickly",
  "Anyone looking to improve the appearance of cellulite",
  "Anyone looking for total body well being and relaxation",
  "Anyone looking for muscle recovery",
  "Anyone looking to reduce inflammation",
  "Anyone looking for a full body detoxification",
  "Anyone suffering from lymphedema, lipedema, or edema",
  "Anyone who has to spend a prolonged time on their feet",
  "Anyone looking to receive aid in recovery",
  "Anyone looking to support their immune system",
  "Anyone who has or is about to experience liposuction treatments",
  "Anyone looking to enhance the results of body contouring"
  ]}
/>

<DeviceSection
  title="HOW OFTEN?"
  description={[
    "One to fourteen treatments a week for a minimum of 30 to 60 minutes each treatment. Ideally, breakdown would be 40 minutes in pants and 20 minutes in the jacket for a full body treatment",
  ]}
  />
  <DeviceSection
  title="HOW DOES IT FEEL?"
  description={[
    `During a treatment users enjoy an extremely relaxing and comfortable experience that brings aesthetic and wellness results! Depending on the desired outcome, less is more in most cases, and should feel like a thousand butterflies fluttering over your body.`,
    `After a treatment you should feel relaxed and lighter, and rejuvenated. Most clients will feel the need to urinate after treatment due to the flushing of the lymphatic system.`
  ]}
  />
    <DeviceSection
  title="MAXIMIZE RESULTS"
  description={[
    `The more frequently you use the Ballancer Pro, the better your results. Results will last typically for 6 - 9 weeks depending on our lymphatic system and lifestyle. It’s best to follow a maintenance program once goals are achieved.`
  ]}
  />

  <DevicePointsSection
  title="THINGS TO REMEMBER"
  points={[
      "Remember to use the reusable liners for most individuals",
  "The pre-treatment will always be set at 40 mmHg",
  "Less is more when stimulating the lymphatic system",
  "Remind clients that they need to be well hydrated and ensure that they drink water before and after treatment",
  "The most ideal pressure is 20 mmHg below a client’s resting diastolic BP",
  ]}
  />

 <DeviceFrequencyPrograms
  title={frequencyProgramsData.title}
  sections={frequencyProgramsData.sections}
/>
 <div className='mb-12'>
  <DevicePointsSection
  title="CONTRAINDICATIONS"
  points={[
       "Currently undergoing active chemotherapy",
  "Uncontrolled congestive heart failure",
  "Unstable cardiac disease",
  "Known or suspected deep vein thrombosis (DVT)",
  "Unexplained pain or numbness not evaluated by a physician",
  "Ischemic vascular disease, including pain at rest or gangrene",
  "Infected skin or the presence of an open infected wound",
  ]}
  />

 </div>
  






    </>
  )
}

export default page