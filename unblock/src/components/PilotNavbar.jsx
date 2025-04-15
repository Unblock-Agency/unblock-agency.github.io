import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../styles/PilotNavbar.css";

export default function PilotNavbar() {
    const linkStyle = { padding: '0.5rem 1rem', textDecoration: 'none' };

    return (
        <nav id="pilot-navbar" style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            <Link to="/" smooth style={linkStyle}>
                <img id="logo" src="/ua-white-rect.png" alt="Unblock Agency"></img>
            </Link>
            <HashLink to="#pilot-hero" smooth style={linkStyle}>Pilot Program</HashLink>
            <HashLink to="#wte" smooth style={linkStyle}>What to Expect</HashLink>
            <HashLink to="#deliverables" smooth style={linkStyle}>Key Deliverables</HashLink>
            <HashLink to="#pilot-contact" smooth style={linkStyle}>Contact Us</HashLink>
        </nav>
    )
};