import React, { useState } from 'react'


import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import HDIWSection from './HDIWSection';
import BoxesSection from './BoxesSection';
import QnASection from './QnASection';
import Testimonials from './Testimonials';
import DetailSection from './DetailSection';
import CTA from './CTA';
import Footer from './Footer';
import CreateContestPopUp from './Widgets/CreateContestPopUp';
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState("100")
return (
  <>
  <CreateContestPopUp isOpen={isOpen} setIsOpen={setIsOpen} number={number} />
   <HeroSection setIsOpen={setIsOpen} setNumber={setNumber} />
  
<FeatureSection setIsOpen={setIsOpen} setNumber={setNumber} />

   <HDIWSection setIsOpen={setIsOpen} setNumber={setNumber} />

<BoxesSection setIsOpen={setIsOpen} setNumber={setNumber} />

<QnASection />
<Testimonials />


 <DetailSection />

 <CTA setIsOpen={setIsOpen} setNumber={setNumber} />
    <Footer />

  </>
)
}

export default Dashboard
