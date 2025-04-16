import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { hash } = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClass = (targetHash) =>
    `cursor-pointer hover:text-gray-300 transition-colors ${hash === targetHash ? 'underline underline-offset-4 text-gray-300' : ''
    }`;

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <HashLink smooth to="/#pilot" aria-label="Go to homepage" className="cursor-pointer">
          <img src="/ua-white-rect.png" alt="Unblock Agency" className="h-10 w-auto" />
        </HashLink>
        <button
          onClick={toggleMenu}
          className="cursor-pointer text-white text-2xl md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          &#9776;
        </button>
        <nav className="hidden md:flex items-center space-x-6 text-sm md:text-base font-medium">
          <HashLink smooth to="/#pilot" className={linkClass('#pilot')}>Pilot Program</HashLink>
          <HashLink smooth to="/#about" className={linkClass('#about')}>About</HashLink>
          <HashLink smooth to="/#process" className={linkClass('#process')}>Process</HashLink>
          <HashLink smooth to="/#testimonials" className={linkClass('#testimonials')}>Testimonials</HashLink>
          <HashLink smooth to="/#team" className={linkClass('#team')}>Team</HashLink>
          <HashLink smooth to="/#contact" className={linkClass('#contact')}>Contact</HashLink>
        </nav>
      </div>
      <nav
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
      >
        <div className="flex flex-col gap-4 bg-white text-black rounded-md shadow-md px-6 py-4 mx-4">
          <HashLink smooth to="/#pilot" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-gray-700 font-medium">
            Pilot Program
          </HashLink>
          <HashLink smooth to="/#about" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-gray-700 font-medium">
            About
          </HashLink>
          <HashLink smooth to="/#process" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-gray-700 font-medium">
            Process
          </HashLink>
          <HashLink smooth to="/#testimonials" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-gray-700 font-medium">
            Testimonials
          </HashLink>
          <HashLink smooth to="/#team" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-gray-700 font-medium">
            Team
          </HashLink>
          <HashLink smooth to="/#contact" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-gray-700 font-medium">
            Contact
          </HashLink>
        </div>
      </nav>
    </header>
  );
}
