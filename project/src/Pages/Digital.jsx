import {React,useEffect} from 'react'
import Header from '../Component/Services/Digital/Header'
import Digitalintro from '../Component/Services/Digital/Digitalintro'
import DigitalSection from '../Component/Services/Digital/DigitalSection'
import OurProcess from '../Component/Services/Digital/OurProcess'
import FAQSection from '../Component/Services/Digital/FAQSection'
export default function Digital() {

    
  useEffect(() => {
    // Smooth scroll to the top when this component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
   
        <Header/>
        <Digitalintro/>
        <OurProcess/>
        <DigitalSection/>
        <FAQSection/>
    
    
    </div>
  )
}
