import React from 'react';
import PilotNavbar from '../components/PilotProgram/PilotNavbar';
import PilotHero from '../components/PilotProgram/PilotHero';
import WhatToExpect from '../components/PilotProgram/WhatToExpect';
import Deliverables from '../components/PilotProgram/Deliverables';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function PilotProgram() {
  return (
    <div id="pilot-program">
      <PilotNavbar />
      <main>
        <PilotHero />
        <WhatToExpect />
        <Deliverables />
        <Contact id="pilot-contact" />
      </main>
      <Footer />
    </div>
  );
}
