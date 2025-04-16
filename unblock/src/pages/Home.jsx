import React from 'react';
import Navbar from '../components/Navbar';
import Pilot from '../components/Pilot';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="bg-white text-black">
                <Pilot />
                <About />
                <Process />
                <Testimonials />
                <Team />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
