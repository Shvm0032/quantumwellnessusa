import React from 'react'
import Hero from '../../components/schedule/Hero'
import ScheduleAbout from '../../components/schedule/ScheduleAbout'
import ScheduleCalendar from '../../components/schedule/ScheduleCalendar'
import PDF from '../../components/schedule/PDF'

const page = () => {
  return (
    <>
    <Hero/>
    <ScheduleAbout/>
    <ScheduleCalendar/>
    <PDF/>

    </>
  )
}

export default page