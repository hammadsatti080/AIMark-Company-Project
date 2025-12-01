import {React,useEffect} from 'react'
import Header from '../Component/Team/Header'

export default function Team() {

  
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
