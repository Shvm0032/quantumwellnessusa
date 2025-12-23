"use client";

import React from 'react'
import DeviceHero from '../../../components/DevicesSinglePages/DeviceHero';
import BrainDescription from '../../../components/DevicesSinglePages/BrainDescription';
import DeviceSection from './../../../components/DevicesSinglePages/DeviceSection';
import TwoColumnPointsSection from '../../../components/DevicesSinglePages/TwoColumnPointsSection';
import DevicePointsSection from '../../../components/DevicesSinglePages/DevicePointsSection';

const page = () => {
  return (
    <>
    {/* Hero Section  */}
   <DeviceHero title="Braintap" image="/devices/devices-img/device-img-2.jpeg"/>
   
    {/* Description  */}
    <BrainDescription/>
    <DeviceSection title="WHO COULD POTENTIALLY BENEFIT FROM " description="From business leaders, parents, professional athletes, struggling students, and anyone else in need.  This is a great system for anyone!   
But BrainTap works especially well for anyone  "/>
<TwoColumnPointsSection 
 leftPoints={[
    "Prone to stress  ",
    "Experiences anxiety ",
    "Who has difficulty controlling their weight ",
    "Who has low energy or mood issues ",
  ]}
  rightPoints={[
    "Who experiences brain fog  ",
    "Who has poor health ",
    "Who wants to improve learning ",
    "On the spectrum ",
  ]}/>
  {/* create a session   */}
  <DevicePointsSection title="HOW DO YOU FEEL DURING/AFTER A SESSION" 
  points={["“It feels like my body fell asleep, but my mind stayed awake.” This is because BrainTap generates a natural state, very much like sleep. You are then provided information that you want to apply when you are awake. This is called anchoring your vision to your timeline. It works like writing yourself a sticky note and posting it somewhere to remind you later.",
  "Users report feeling serene, focused, and alert even when faced with high-pressure situations."]}/>
   
   <TwoColumnPointsSection
  title="POTENTIAL BENEFITS"
  leftPoints={[
    "Reduced stress",
    "Better sleep",
    "Improved mental clarity",
    "Improved digestion",
    "Improved stress management",
    "Improved mental condition",
    "Improved learning and retention",
    "Improved symptoms of PTSD",
    "Boosts alertness",
  ]}
  rightPoints={[
    "Better mood",
    "Decrease in cravings",
    "Improvement in symptoms of Seasonal Affective Disorder (SAD)",
    "Lessens the stress and discomfort for chronic pain",
    "Improved daily habits",
    "Improved myo-fascial, shoulder and/or TMJ pain",
    "Can increase blood flow to the brain",
  ]}
/>
  <DevicePointsSection title="MAXIMIZING RESULTS" 
  points={["Combing brain tap with services like PEMF, IV therapy, HBOT, BallancerPro, or Emshapewell can allow you to speed the result of your desired outcome or allow you to combat two outcomes at the same time, maximizing your time within the spa ",
  "Using BrainTap daily or at least 5 times a week is the ideal timeframe to see lasting habit changes "]}/>

   <DevicePointsSection title="THINGS TO REMEMBER" 
  points={["4 or more sessions in a day) could make a person fuzzy-headed or may cause a night of sleeplessness ",
  "Listening to any PM or sleep-inducing session should not be listened to in the daytime and may cause a sleepy, groggy state. ",
  "Conversely, listening to SMR sessions at bedtime may lead to a restless night.",
  "Fortunately, negative side effects from occasional improper use are never permanent and go away within a day.",
  "Have clients get a drink of water to rehydrate their brains. "
  ]}/>
     <DevicePointsSection title="CONTRAINDICATION" 
  points={["All persons with a history of epileptic type seizures or photo (light) sensitivity. An extremely small percentage of the population may be subject to undiagnosed epilepsy without their knowledge.  ",
  "Persons who may be prone to developing seizures, including:",
  "Those with a family history of and potential inherited disposition toward epilepsy.  ",
  "Persons with a history of brain disorders and/or disease, including brain damage, injury, scarring, tumor, blood clot, aneurysm, infection such as encephalitis or meningitis, stroke or other brain dysfunction.  ",
  "Persons withdrawing from alcohol and/or drug addictions, and/or persons with a history of hallucinogenic or other nonprescription drug use.",
  "Persons in an agitated, highly excited, fatigued, shocked, or highly emotional state or suffering from a mental Illness or abnormality.",
  "Persons with severe medical problems such as advanced heart or liver disease.",
  ]}/>

      <DeviceSection title="HOW TO PURCHASE" classname='mb-6' description="With any of our foundational services"/>

      


    </>

  )
}

export default page