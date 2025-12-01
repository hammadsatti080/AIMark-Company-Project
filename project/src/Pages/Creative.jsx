import {React,useEffect} from 'react'
import Header from '../Component/Services/Creative/Header'
import Creativeintro from '../Component/Services/Creative/Creativeintro'
import CreativeSection from '../Component/Services/Creative/CreativeSection'
import OurProcess from '../Component/Services/Creative/OurProcess'
import FAQSection from '../Component/Services/Creative/FAQSection'
export default function Creative() {
    useEffect(() => {
        // Smooth scroll to the top when this component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <div>
    <Header/>
    <Creativeintro/>
    <CreativeSection/>
    <OurProcess/>
  <FAQSection/>
    </div>
  )
}
