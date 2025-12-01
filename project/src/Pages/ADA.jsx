import {React,useEffect} from 'react'
import Header from '../Component/Services/ADA/Header'

export default function ADA() {

    useEffect(() => {
        // Smooth scroll to the top when this component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <div>
      <Header/>
    </div>
  )
}
