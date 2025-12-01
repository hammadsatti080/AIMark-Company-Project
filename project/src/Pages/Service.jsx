import {React,useEffect} from 'react'
import Header from '../Component/Services/Header'
import Course from '../Component/Services/Course'
import Servicesection from '../Component/Homescreen/Servicesection'
export default function Service() {

    
  useEffect(() => {
    // Smooth scroll to the top when this component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    
    <div>
      <Header/>
      <Course/>
    <Servicesection/>
    </div>
  )
}
