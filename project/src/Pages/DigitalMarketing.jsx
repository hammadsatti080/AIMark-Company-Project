import {React,useEffect} from 'react'
import Headers from '../Component/Services/DigitalMarketing/Headers'
import Analytices from '../Component/Services/DigitalMarketing/Analytices'
import ContentSection from '../Component/Services/DigitalMarketing/ContentSection'
import EmailSection from '../Component/Services/DigitalMarketing/EmailSection'
import Networkingsection from '../Component/Services/DigitalMarketing/Networkingsection'
import Scroll from '../Component/Services/DigitalMarketing/Scroll'
import SeoSection from '../Component/Services/DigitalMarketing/SeoSection'
import Socialsection from '../Component/Services/DigitalMarketing/Socialsection'

export default function DigitalMarketing() {

    
  useEffect(() => {
    // Smooth scroll to the top when this component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <Headers/>
      <Analytices/>
      <ContentSection/>
      <EmailSection/>
   
      <Scroll/>
      <SeoSection/>
     <Socialsection/>
    </div>
  )
}
