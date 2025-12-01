import {React,useEffect} from 'react'
import Header from '../Component/Homescreen/Header'
import Hero from '../Component/Homescreen/Hero'
import Ratingsection from '../Component/Homescreen/Ratingsection'
import Servicesection from '../Component/Homescreen/Servicesection'
import Processsection from '../Component/Homescreen/Processsection'
import FAQ from '../Component/Homescreen/FAQ'
import Teamportion from '../Component/Homescreen/Teamportion'
import Clientportion from '../Component/Homescreen/Clientportion'
import Testimonial from '../Component/Homescreen/Testimonial'
import ServicePortion from '../Component/Services/Serviceportion'
import Topservice from '../Component/Services/Topservice'
import ReviewDisplay from '../PublicFolder/ReviewDisplay'

export default function Homescreen() {

  
  useEffect(() => {
    // Smooth scroll to the top when this component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
     <Header/>
     <Hero/>
     <Ratingsection/>
     <Topservice/>
     <Processsection/>
     
     <FAQ/>
     <Teamportion/>
     <Clientportion/>
     <ServicePortion/>
     <ReviewDisplay/>
     <Testimonial/>
    </div>
  )
}
