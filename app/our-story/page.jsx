import React from 'react'
import StoryHero from '@/components/story/StoryHero'
import StoryAbout from '@/components/story/StoryAbout'
import Video from '@/components/story/Video'
import Health from '@/components/story/Health'
import PersonalizedWellness from '@/components/story/PersonalizedWellness'
import Fitness from '@/components/story/Fitness'
import Mindfulness from '@/components/story/Mindfulness'
import Philosophy from '@/components/story/Philosophy'
import WhyChooseUs from '@/components/story/WhyChooseUs'
import ContactSection from '@/components/story/ContactSection'


const page = () => {
  return (
    <>
    <StoryHero/>
    <StoryAbout/>
    <Video/>
    <Health/>
    <PersonalizedWellness/>
    <Fitness/>
    <Mindfulness/>
    <Philosophy/>
    <WhyChooseUs/>
    <ContactSection/>
  </>
  )
}

export default page