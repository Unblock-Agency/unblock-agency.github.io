import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css'

export default function Navbar() {
  const linkStyle = { padding: '0.5rem 1rem', textDecoration: 'none' };

  return (
    <nav id="navbar" style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <HashLink to="/#pilot" smooth style={linkStyle}>
        <img id="logo" src="/ua-white-rect.png" alt="Unblock Agency"></img>
      </HashLink>
      <HashLink to="/#pilot" smooth style={linkStyle}>Pilot Program</HashLink>
      <HashLink to="/#about" smooth style={linkStyle}>About Us</HashLink>
      <HashLink to="/#process" smooth style={linkStyle}>Our Process</HashLink>
      <HashLink to="/#team" smooth style={linkStyle}>Our Team</HashLink>
      <HashLink to="/#testimonials" smooth style={linkStyle}>Testimonials</HashLink>
      <HashLink to="/#contact" smooth style={linkStyle}>Contact Us</HashLink>
    </nav>
  );
}