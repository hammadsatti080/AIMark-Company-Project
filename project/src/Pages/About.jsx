import {React,useEffect} from 'react';
import HeaderLeft from '../Component/About/HeaderLeft';
import HeaderRight from '../Component/About/HeaderRight';
import Header from '../Component/About/Header';
import Companymission from '../Component/About/Companymission';
import Contactportion from '../Component/About/Contactportion';
import QA from '../Component/About/QA';
import ReviewForm from '../Component/About/ReviewForm';
import ReviewDisplay from '../PublicFolder/ReviewDisplay';


export default function About() {


  
  useEffect(() => {
    // Smooth scroll to the top when this component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <Header/>
     <HeaderLeft/>
     <Companymission/>
      <QA/>
      <ReviewForm/>
  

   
    </div>
  )
}
