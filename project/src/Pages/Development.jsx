import {React,useEffect} from 'react'
import Header from '../Component/Services/Development/Header'
import Intro from '../Component/Services/Development/Intro'
import DevelopmentSection from '../Component/Services/Development/DevelopmentSection'
import OurProcess from '../Component/Services/Development/OurProcess'
import FAQSection from '../Component/Services/Development/FAQSection'
export default function Development() {
    
  useEffect(() => {
    // Smooth scroll to the top when this component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>

<Header/>
<Intro/>
<OurProcess/>
<DevelopmentSection/>
<FAQSection/>
    
    </div>
  )
}
