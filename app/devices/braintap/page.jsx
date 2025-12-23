"use client";

import React from 'react'
import DeviceHero from '../../../components/DevicesSinglePages/DeviceHero';
import BrainDescription from '../../../components/DevicesSinglePages/BrainDescription';

const page = () => {
  return (
    <>
    {/* Hero Section  */}
   <DeviceHero title="Braintap" image="/devices/devices-img/device-img-2.jpeg"/>
   
    {/* Description  */}
    <BrainDescription/>
    


    </>
  )
}

export default page