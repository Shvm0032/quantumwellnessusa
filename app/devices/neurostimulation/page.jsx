import React from "react";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import ServiceDescription from "../../../components/DevicesSinglePages/ServiceDescription";
import DeciceBoldSection from "../../../components/DevicesSinglePages/DeviceBoldSection";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";

const page = () => {
  return (
    <>
      <DeviceHero
        title="NEUROSTIMULATION"
        image="/devices/services-img/services-img-3.jpg"
      />
      <ServiceDescription
        title="DESCRIPTION"
        content={[
          [
            {
              text: "Neurofield ",
              bold: true,
            },
            {
              text: "is a type of neurostimulation, and biofeedback technology designed to regulate brain activity by delivering electromagnetic pulses or stimulation to the brain. It is often used as a therapeutic tool to address issues related to brain dysregulation, such as anxiety, depression, ADHD, PTSD, and traumatic brain injury. The system integrates various forms of neurofeedback and pulsed electromagnetic field (PEMF) stimulation, enabling clinicians to provide personalized treatments based on the patient's brainwave activity.",
            },
          ],
        ]}
      />

      <DeciceBoldSection
        title="What Neurofield is good for:"
        points={[
          "1. Mental Health Conditions: Neurofield therapy is used to treat anxiety, depression, PTSD, and trauma by helping the brain regulate itself better.",
          "2. Cognitive Issues: It can be applied in cases of ADHD or cognitive decline by improving focus, memory, and overall cognitive function.",
          "3. Trauma and Brain Injury: For individuals recovering from traumatic brain injuries (TBI), it helps normalize brain activity and reduce symptoms such as headaches, fogginess, or mood swings.",
          "4. Sleep Disorders: It can assist individuals suffering from insomnia or other sleep disturbances by normalizing brain activity associated with restful sleep.",
          "5. Pain Management: Neurofield has been applied to chronic pain conditions, using neurostimulation to potentially reduce pain perception.",
        ]}
      />
      <DeviceSection
      className="mb-12 -mt-4"
      description="The therapy is often tailored to individual needs, with clinicians conducting assessments (e.g., QEEG or brain mapping) to understand the patient's brain activity and identify dysregulation areas that Neurofield could help address."
       />
    </>
  );
};

export default page;
