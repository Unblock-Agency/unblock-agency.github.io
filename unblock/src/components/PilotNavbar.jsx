import { HashLink } from "react-router-hash-link";
import "../styles/PilotNavbar.css";

export default function PilotNavbar() {
    const linkStyle = { padding: '0.5rem 1rem', textDecoration: 'none' };

    return (
        <nav id="pilot-navbar" style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            <HashLink to="/#pilot" smooth style={linkStyle}>
                <img id="logo" src="/ua-white-rect.png" alt="Unblock Agency"></img>
            </HashLink>
            <HashLink to="#pilot-hero" smooth style={linkStyle}>Pilot Program</HashLink>
            <HashLink to="#wte" smooth style={linkStyle}>What to Expect</HashLink>
            <HashLink to="#deliverables-container" smooth style={linkStyle}>Key Deliverables</HashLink>
            <HashLink to="#pilot-contact" smooth style={linkStyle}>Contact Us</HashLink>
        </nav>
    )
};