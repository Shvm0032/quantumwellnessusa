import React from "react";
import DeviceHero from "./../../../components/DevicesSinglePages/DeviceHero";
import ServiceDescription from "../../../components/DevicesSinglePages/ServiceDescription";
import ServiceBoldPointsSection from "./../../../components/DevicesSinglePages/ServiceBoldPointsSection";
import DeviceBoldSection from "./../../../components/DevicesSinglePages/DeviceBoldSection";
import DeviceSection from "./../../../components/DevicesSinglePages/DeviceSection";

const page = () => {
  return (
    <>
      <DeviceHero
        title="BIOFEEDBACK"
        image="/devices/services-img/services-img-1.jpg"
      />
      <ServiceDescription
        title="DESCRIPTION"
        content={[
          [
            {
              text: "Biofeedback ",
              bold: true,
            },
            {
              text: "is a therapeutic technique where individuals learn to control certain physiological functions that are typically involuntary, such as heart rate, muscle tension, or skin temperature. Using sensors and devices, biofeedback provides real-time feedback about these bodily processes, helping people become more aware of their physiological responses and enabling them to influence them through relaxation techniques, breathing exercises, and other strategies.",
            },
          ],
        ]}
      />
      <DeviceBoldSection
        title="How Biofeedback Works:"
        points={[
          "1. Monitoring: Sensors are placed on the body to measure physiological signals (e.g., heart rate, muscle tension, brainwaves, or skin conductance).",
          "2. Feedback: The data from the sensors is displayed in real time on a monitor in the form of graphs, sounds, or visual cues.",
          "3. Training: With the help of a therapist or a trained professional, individuals learn to control these processes by recognizing the patterns and practicing techniques to manage stress, tension, or other conditions.",
        ]}
      />

      <ServiceBoldPointsSection
        title="Who Should Do Biofeedback:"
        description="Biofeedback is suitable for a wide range of people, particularly those looking to manage:"
        points={[
          "Stress and Anxiety: It helps people become aware of their physical stress responses and practice relaxation techniques.",
          "Chronic Pain: People with conditions like tension headaches, migraines, or fibromyalgia can benefit by learning to relax muscles and reduce pain perception.",
          "Hypertension: Biofeedback can assist individuals in lowering blood pressure through stress management and relaxation techniques.",
          "Muscle Tension and Injury Recovery: It's useful for people recovering from muscle injuries or those with chronic muscle tension.",
          "Sleep Disorders: It can help people with insomnia or other sleep-related problems by teaching relaxation techniques.",
          "Attention Deficit Disorders (ADD/ADHD): Neurofeedback, a form of biofeedback focused on brain activity, is often used to help manage symptoms of ADD/ADHD.",
          "Mental Health Conditions: It may also benefit people with depression, PTSD, or panic disorders by enhancing their control over their emotional and physical responses.",
          "Urinary Incontinence or IBS: It can be helpful for managing bladder control and gastrointestinal disorders.",
        ]}
      />
      <ServiceBoldPointsSection
        title="Who Should Provide Biofeedback:"
        description="Biofeedback should be conducted by trained professionals such as:"
        points={[
          "Clinical Psychologists: Clinical Psychologists or other mental health practitioners who specialize in biofeedback.",
          "Physical Therapists : Physical Therapists for patients dealing with muscle tension and injury recovery.",
          "Medical Doctors or Nurses : Medical Doctors or Nurses with expertise in biofeedback techniques.",
          "Neurofeedback & Biofeedback Specialists : Neurofeedback & Biofeedback Specialists for brain-related therapies, particularly for ADHD, anxiety, or depression.",
        ]}
      />
      <DeviceSection
        className="mb-12 -mt-4"
        description="The success of biofeedback therapy depends on the skill of the therapist and the patient's commitment to practice and apply the techniques learned during the sessions."
      />
    </>
  );
};

export default page;
