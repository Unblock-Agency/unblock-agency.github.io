import Navbar from "../components/Navbar";
import Pilot from "../components/Pilot";
import About from "../components/About";
import Process from "../components/Process";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/Home.css"

export default function Home() {
    return (
        <div id="home">
            <Navbar />
            <Pilot />
            <About />
            <Process />
            <Team />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}