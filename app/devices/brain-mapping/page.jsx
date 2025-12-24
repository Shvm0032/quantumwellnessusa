import React from "react";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";
import DeviceBoldSection from "../../../components/DevicesSinglePages/DeviceBoldSection";
import DescriptionOnly from "../../../components/DevicesSinglePages/DescriptionOnly";
import DevicePointsSection from "../../../components/DevicesSinglePages/DevicePointsSection";

const page = () => {
  return (
    <>
      <DeviceHero
        title="BRAIN MAPPING"
        image="/devices/services-img/services-img-4.jpg"
      />
      <DeviceSection
        title="HOW DOES IT FEEL?"
        description={[
          `A QEEG “Brain mapping" assessment refers to techniques used to visualize the structure and function of the brain. These techniques can provide detailed images of brain activity and connectivity, allowing researchers and clinicians to better understand how different regions of the brain interact and work together.`,
          `By identifying how your brain is functioning and where there may be issues, brain mapping can help guide personalized interventions to improve cognitive health, emotional well-being, mental & physical performance, and longevity.`,
        ]}
      />

      <DeviceBoldSection
        title="How Brain Mapping Can Help :"
        points={[
          "1. Diagnosing Disorders: Brain mapping can aid in diagnosing neurological and psychiatric conditions such as epilepsy, Alzheimer's disease, depression, and traumatic brain injuries by identifying abnormalities in brain function or structure.",
          "2. Treatment Planning: In cases like tumors or epilepsy surgery, brain mapping helps surgeons plan by identifying crucial areas responsible for motor functions, language, and memory, which they need to avoid during procedures.",
          "3. Understanding Cognitive Functions: Brain mapping can shed light on how processes such as memory, attention, language, and emotions work by mapping which brain areas are activated during these tasks.",
          "4. Neurofeedback and Rehabilitation: In therapies like neurofeedback, brain mapping helps track progress by showing changes in brain activity, which can be useful for patients recovering from stroke, brain injuries, or those undergoing mental health treatments.",
          "5. Personalized Medicine: Brain maps can help customize treatments, such as in the case of depression, where specific brain patterns might indicate the most effective treatment options, whether it’s medication, therapy, or brain stimulation techniques.",
        ]}
      />

      <DescriptionOnly description="A QEEG Brain Map is a non-invasive, comprehensive assessment for your brain health, which also relates to your overall health. It takes approximately 1.5 hrs. We record your brain waves with a cap and gel on your head for 10 minutes with your eyes closed, and 10 minutes with your eyes open, and you typically get results within a week, including a comprehensive treatment plan. "/>
      <DescriptionOnly description="If you, your loved ones, or your kids, have ever had any of the below issues or symptoms, this is something you could greatly benefit from."/>

   <DevicePointsSection
   className="-mt-3"
   points={[  "Difficulty concentrating",
  "Brain fog",
  "Mental health issues",
  "Anxiety",
  "Depression",
  "Memory issues",
  "ADHD",
  "Looking for peak performance",
  "Head injury",
  "Learning issues",
  "Autism",
  "OCD, ODD",
  "Tic disorder or Tourette’s",
  "Migraines / headaches",
  "Physical assault, fighting, or quick to anger",
  "Anesthesia / surgeries",
  "Sleep issues",
  "Rigidity",
  "Teary or cries easily",
  "Possible exposure to mold, metals, toxins, or chemicals",
  "Dizziness",
  "Tinnitus",
  "Drug use",
  "Dyslexia",
  "Chemotherapy",
  "Concussion",
  "High fevers",
  "Repeated infections",
  "Possible seizures",
  "Stroke",
  "Long-term illnesses",
  "Autoimmune issues",
  "Lupus, Lyme disease, Fibromyalgia",
  "Chronic pain",
  "PTSD",
  "Fears about Dementia or Alzheimer’s (these are reversible and avoidable!)",]}
   />

    <DescriptionOnly className="mb-12 -mt-3"
     description="We can tell 25 years before any symptoms even occur and reverse it!"/>

    </>
    
  );
};

export default page;
