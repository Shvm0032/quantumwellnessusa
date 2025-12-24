import React from "react";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import ServiceDescription from "../../../components/DevicesSinglePages/ServiceDescription";
import ServiceNumberPointsSection from "../../../components/DevicesSinglePages/ServiceNumberPointsSection";

const page = () => {
  return (
    <>
      <DeviceHero
        title="NEUROFEEDBACK"
        image="/devices/services-img/services-img-2.jpg"
      />
      <ServiceDescription
        title="DESCRIPTION"
        content={[
          [
            {
              text: "Neurofeedback",
              bold: true,
            },
            {
              text: " is a type of biofeedback therapy that uses real-time monitoring of brainwave activity to help individuals regulate and improve their brain function. It involves placing electrodes on the scalp to measure brainwaves and then providing visual or auditory feedback to the person based on their brain activity. The goal is to help the individual learn how to self-regulate their brainwaves, potentially improving focus, reducing stress, and managing various mental health conditions.",
            },
          ],
        ]}
      />

      <ServiceNumberPointsSection
        className="mb-12"
        title="Who Should Consider Neurofeedback?"
        description="Neurofeedback may be beneficial for individuals experiencing:"
        points={[
          "ADHD/ADD: It can help improve focus, attention, and reduce impulsivity.",
          "Anxiety and Depression: It can assist in calming the brain and improving mood regulation.",
          "Sleep Disorders: Neurofeedback has been shown to help with insomnia and other sleep disturbances.",
          "PTSD and Trauma: It can support emotional regulation and reduce hyperarousal.",
          "Chronic Pain: Neurofeedback can alter pain perception and assist in managing chronic pain conditions.",
          "Migraines and Headaches: It may help reduce the frequency and severity of migraines.",
          "Autism Spectrum Disorders: It can improve behavioral outcomes and cognitive function.",
          "Learning Disabilities: It may enhance cognitive functions such as memory and attention.",
          "Peak Performance: Athletes, musicians, and executives sometimes use neurofeedback to improve focus, creativity, and performance.",
        ]}
      />
    </>
  );
};

export default page;
