import React from 'react'
import DeviceHero from '../../../components/DevicesSinglePages/DeviceHero'
import DeviceSection from '../../../components/DevicesSinglePages/DeviceSection'
import DeviceBoldSection from '../../../components/DevicesSinglePages/DeviceBoldSection'

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




    </>
  )
}

export default page