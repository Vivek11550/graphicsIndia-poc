import React from 'react'
import Herocomponent from "../ui/herocomponent";
import services from "../../Assets/service-assets/header.png"

const Heroservices = () => {
  return (
    <>
     <Herocomponent imageurl={services} title="End to End Development Services" 
     subtitle="We provide full-cycle development services including web, mobile, UI/UX design, and backend systems tailored to your business needs."
      />
    </>
  )
}
export default Heroservices
